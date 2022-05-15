import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookDef } from "../types/book.types";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "book",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/",
  }),
  // global configuration for the api
  // keepUnusedDataFor: 30,

  // Re-fetching on window focus with refetchOnFocus
  // refetchOnFocus

  // Re-fetching on network reconnection with refetchOnReconnect​
  // refetchOnReconnect: true,
  endpoints: (builder) => ({
    getBookList: builder.query<BookDef[], void>({
      query: () => "books",
      // Once the subscription is removed (e.g. when last component subscribed to the data unmounts), after an amount of time (default 60 seconds), the data will be removed from the cache
      // configuration for an individual endpoint, overriding the api setting
      keepUnusedDataFor: 10,
    }),
    getBookById: builder.query<BookDef, string>({
      query: (id) => `books/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookListQuery, useGetBookByIdQuery } = bookApi;
