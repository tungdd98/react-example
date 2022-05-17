import React, { FC } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/post.hooks";

const PostListScreen: FC = () => {
  const { isError, isLoading, isFetching, data } = usePosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h3>PostListScreen</h3>

      {isFetching && <div>Fetching...</div>}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListScreen;
