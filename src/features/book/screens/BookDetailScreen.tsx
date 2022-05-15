import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/book.slice";

const BookDetailScreen: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, data } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h3>Title: {data.title}</h3>
      <div>Created at: {data.createdAt}</div>
    </div>
  );
};

export default BookDetailScreen;
