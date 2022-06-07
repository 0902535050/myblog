import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [singlePosts, setSinglePosts] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/` + postId);
      setSinglePosts(res.data);
    };
    getPost();
  });
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePosts.photo && (
          <img className="singlePostImg" src={singlePosts.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {singlePosts.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            <Link to={`/?user=${singlePosts.username}`} className="link">
              Author: <b>{singlePosts.username}</b>
            </Link>
          </div>
          <div className="singlePostDate">
            {new Date(singlePosts.createdAt).toLocaleDateString()}
          </div>
        </div>
        <p className="singlePostDesc">{singlePosts.desc}</p>
      </div>
    </div>
  );
}
