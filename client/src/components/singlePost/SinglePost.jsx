import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [singlePosts, setSinglePosts] = useState({});
  const [title, setTitle] = useState("");
  const history = useHistory();
  const [desc, setDesc] = useState("");

  const [updateMode, setUpdateMode] = useState("");

  const PF = "http://localhost:5000/images/";

  const { user } = useContext(Context);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/` + postId);
      setSinglePosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + postId, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + postId, {
        username: user.username,
        title,
        desc,
      });
      //window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePosts.photo && (
          <img className="singlePostImg" src={PF + singlePosts.photo} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {singlePosts.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
