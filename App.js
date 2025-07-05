import React from "react";
import { Router } from "./src/Router";
import { Provider } from "react-redux";
import { Persistor, stores } from "./src/Store/store";
import { PersistGate } from "redux-persist/integration/react";


export default function App() {
    return (
        <Provider store={stores}>
          <PersistGate persistor={Persistor}>
            <Router />
          </PersistGate>
        </Provider>
    )
} 