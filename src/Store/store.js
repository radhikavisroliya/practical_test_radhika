import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { apiSlice } from './apiSlice';
import authSlice from '../Store/Slice/authSlice'

const persistConfig = {
    key: 'Test',
    storage: AsyncStorage,
}

const appReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    
})

const PersistedReducer = persistReducer(persistConfig, appReducer);

export const stores = configureStore({
    reducer: PersistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware),
});
export const Persistor = persistStore(stores);