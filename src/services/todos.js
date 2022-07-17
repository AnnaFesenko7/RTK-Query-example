import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ceb308486b6ce8264ac089.mockapi.io/contacts',
  }),
  endpoints: builder => ({
    fetchTodo: builder.query({
      query: () => `/todos`,
    }),
  }),
});

export const { useFetchTodoQuery } = todoApi;
