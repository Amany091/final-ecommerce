import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "login",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes: ["login"],
    
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({data}) => ({
                url: "auth/login",
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["login"],
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse : (response) => response.data
        }),

        getUser: builder.query({
            query: () => ({
                url: "auth/currentUser",
                method: "GET",
                credentials: "include",
            }),
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.data,
        })
    })
})

export const {useLoginMutation , useGetUserQuery} = loginApi