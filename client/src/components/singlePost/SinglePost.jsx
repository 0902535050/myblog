import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://picsum.photos/500/500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsum.
          Velit laboriosam id culpa mollitia laudantium amet sit? Velit odio
          minus ratione? Aliquid magnam explicabo nulla reiciendis officia
          consectetur consequatur.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            Author: <b>Thanh Tuấn</b>
          </div>
          <div className="singlePostDate">1 hour ago</div>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          deleniti laudantium qui facere minus, officiis obcaecati quod
          cupiditate ullam ipsum laborum enim. Inventore blanditiis perferendis
          dolorem quia beatae, magni optio.
        </p>
      </div>
    </div>
  );
}
