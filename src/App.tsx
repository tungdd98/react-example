import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserListScreen from "features/user/screens/UserListScreen";
import HomeScreen from "features/home/screens/HomeScreen";
import PostListScreen from "features/post/screens/PostListScreen";
import Navbar from "components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/users" component={UserListScreen} />
          <Route exact path="/posts" component={PostListScreen} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
