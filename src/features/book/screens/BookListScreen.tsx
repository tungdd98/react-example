import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useGetBookListQuery } from "../redux/book.slice";

const BookListScreen: FC = () => {
  const { isLoading, isError, data } = useGetBookListQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h3>BookListScreen</h3>

      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookListScreen;
