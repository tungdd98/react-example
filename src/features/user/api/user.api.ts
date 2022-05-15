import { api } from "api/api";
import { AxiosResponse } from "axios";

const getUserListApi = (): Promise<AxiosResponse> => {
  return api.get("/users");
};

export const userApi = {
  getUserListApi,
};
