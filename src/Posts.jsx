import React from "react";
import { Outlet, Link } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <div>Posts</div>
      <Link to={"/posts/some"}>Some</Link>
      <Outlet />
    </>
  );
};

export default Posts;
