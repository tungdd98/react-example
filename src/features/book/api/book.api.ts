import { api } from "api/api";
import { AxiosResponse } from "axios";

const updateBookApi = (
  bookId: string,
  title: string
): Promise<AxiosResponse> => {
  return api.put(`/books/${bookId}`, { title });
};

export const bookApi = {
  updateBookApi,
};
