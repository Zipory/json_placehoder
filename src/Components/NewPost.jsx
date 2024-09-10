import React, { useRef } from "react";
import Post from "./Post";
const NewPost = (props) => {
  const setPosts = props.setPosts;
  const id = props.length;

  let title = useRef("");
  let body = useRef("");
  return (
    <>
      <h2>New Post</h2>
      <input ref={title} type="text" placeholder="Enter a title" />
      <input ref={body} type="text" placeholder="Enter a body" />
      <button
        onClick={() => {
          const temp = (
            <Post
              title={title.current.value}
              body={body.current.value}
              id={id + 1}
              key={id + 1}
            />
          );
          console.log(title.current.value);

          //   return;

          setPosts((prev) => [...prev, temp]);
        }}>
        Submit
      </button>
    </>
  );
};

export default NewPost;
