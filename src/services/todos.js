import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ceb308486b6ce8264ac089.mockapi.io/contacts',
  }),
  tagTypes: ['TODO'],
  endpoints: builder => ({
    fetchTodo: builder.query({
      query: () => `/todos`,
      providesTags: ['TODO'],
    }),
    updateTodo: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    createTodo: builder.mutation({
      query: todoContent => ({
        url: `todos`,
        method: 'POST',
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ['TODO'],
    }),
    deleteTodo: builder.mutation({
      query: todoId => ({
        url: `todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TODO'],
    }),
  }),
});

export const {
  useFetchTodoQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi;
