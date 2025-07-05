import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const API_BASE_URL = 'http://3.7.81.243/projects/plie-api/public/api/';

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
        const token = getState().auth.token.data.token;

        console.log('baseUrl ---->', API_BASE_URL);
        console.log('token ---->', token);
        console.log('endpoint ->', endpoint);

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (formdata) => ({
                url: 'login',
                method: 'POST',
                body: formdata
            })
        }),
        eventlist: builder.mutation({
            query: () => ({
                url: 'events-listing',
                method: 'POST',
            })
        }),
    })
})


export const {
    useLoginMutation,
    useEventlistMutation
} = apiSlice