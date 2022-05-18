import { createAsyncThunk } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookDef } from "../types/book.types";
import { bookApi as api } from "../api/book.api";

export const updateBook = createAsyncThunk<
  BookDef,
  { bookId: string; title: string }
>("book/updateBook", async ({ bookId, title }) => {
  const response = await api.updateBookApi(bookId, title);

  return response.data;
});

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
    updateBook: builder.mutation<BookDef, Partial<BookDef>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `books/${id}`,
          method: "PUT",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBookListQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} = bookApi;
