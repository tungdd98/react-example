import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updatePostTitleApi } from "../api/post.api";
import { usePostDetail } from "../hooks/post.hooks";

const PostDetailScreen: FC = () => {
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdateTitle = async () => {
    setIsSubmitting(true);
    try {
      await updatePostTitleApi(id, title);
    } catch (error) {
      // TODO: Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const { data, isLoading, isError } = usePostDetail(id);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h3>PostDetailScreen</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          minWidth: 300,
        }}
      />
      <button disabled={isSubmitting} onClick={handleUpdateTitle}>
        Change title
      </button>
    </div>
  );
};

export default PostDetailScreen;
