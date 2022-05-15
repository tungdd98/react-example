import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { FC, useEffect } from "react";
import { getUserList } from "../redux/user.slice";

const UserListScreen: FC = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, isError } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !users) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h3>UserListScreen</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListScreen;
