import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">HomeScreen</Link>
      </li>
      <li>
        <Link to="/users">UserListScreen</Link>
      </li>
      <li>
        <Link to="/posts">PostListScreen</Link>
      </li>
    </ul>
  );
};

export default Navbar;
