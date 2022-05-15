import axios from "axios";

export const api = axios.create({
  baseURL: "https://5eaf78cd0605ed0016d2c9a1.mockapi.io/api/tv/",
  headers: {
    "Content-Type": "application/json",
  },
});
