import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ item }) {
  console.log("item:", item);
  return (
    <div className="posts">
      {item.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
