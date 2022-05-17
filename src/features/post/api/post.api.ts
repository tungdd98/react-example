import { api } from "api/api";
import { AxiosResponse } from "axios";

const getPostListApi = (): Promise<AxiosResponse> => {
  return api.get("/posts");
};

export const updatePostTitleApi = (id: string, title: string) => {
  return api.put(`/posts/${id}`, {
    title,
  });
};

export const getPostDetailApi = (id: string) => {
  return api.get(`/posts/${id}`);
};

export const postApi = {
  getPostListApi,
  updatePostTitleApi,
  getPostDetailApi,
};
