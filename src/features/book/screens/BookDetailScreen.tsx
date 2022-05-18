import { useAppDispatch } from "app/hooks";
import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  updateBook as updateBookThunk,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../redux/book.slice";

const BookDetailScreen: FC = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, data } = useGetBookByIdQuery(id);
  const [updateBook, { isLoading: isLoadingMuation }] = useUpdateBookMutation();

  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUpdateBook = () => {
    setIsSubmitting(true);
    dispatch(
      updateBookThunk({
        bookId: id,
        title,
      })
    ).finally(() => setIsSubmitting(false));
  };

  const handleUpdateBookMutation = () => {
    updateBook({
      id,
      title,
    });
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            minWidth: 300,
          }}
        />
        <button disabled={isSubmitting} onClick={handleUpdateBook}>
          Update
        </button>
        <button disabled={isLoadingMuation} onClick={handleUpdateBookMutation}>
          Update Mutation
        </button>
      </div>
      <div>Created at: {data.createdAt}</div>
    </div>
  );
};

export default BookDetailScreen;
