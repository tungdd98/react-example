import { api } from "api/api";
import { AxiosResponse } from "axios";

const getPostListApi = (): Promise<AxiosResponse> => {
  return api.get("/posts");
};

export const postApi = {
  getPostListApi,
};
