import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={post.photo || "https://picsum.photos/500/500"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => {
            return <span className="postCat">{category.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
