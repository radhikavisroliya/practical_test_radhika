import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    data: {}
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setStoreToken: (state, action) => {
            state.token = action?.payload
        },
        setEventList: (state, action) => {
            state.data = action?.payload
        },
        setTggleFavorite: (state, action) => {
            const selectedId = action.payload;
            console.log('selectedId --->', selectedId)
            const events = state?.data?.data?.events ?? [];
            
            state.data.data.events = events.map(ev => {
                if (ev.event_date_id === selectedId) {
                    return {
                        ...ev,
                        isFavorite: ev.isFavorite === 1 ? 0 : 1,
                    };
                }
                return ev;
            });
        },

        resetauthState: (state) => initialState,
    },
});

export const {
    setStoreToken,
    setEventList,
    setTggleFavorite
} = authSlice.actions;

export default authSlice.reducer;
