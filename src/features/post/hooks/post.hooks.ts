import { useQuery } from "react-query";
import { postApi } from "../api/post.api";
import { PostDef } from "../types/post.types";

export const usePosts = () => {
  return useQuery("posts", async (): Promise<PostDef[]> => {
    const response = await postApi.getPostListApi();

    return response.data;
  });
};

export const usePostDetail = (postId: string) => {
  return useQuery(
    "postDetail",
    async (): Promise<PostDef> => {
      const response = await postApi.getPostDetailApi(postId);

      return response.data;
    },
    { enabled: !!postId }
  );
};
