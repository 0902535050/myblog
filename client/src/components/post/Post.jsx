import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://picsum.photos/500/500" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">LifeStyle</span>
        </div>
        <span className="postTitle">lorem ipsum dolor sit amet,</span>
        <hr />
        <span className="postDate">2 hours ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
        consectetur assumenda laborum odio, corporis voluptate eligendi fugit
        perferendis explicabo odit ratione neque ad molestiae maiores ipsum
        magnam hic dolorum exercitationem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nobis unde voluptas veniam animi ipsum
        corporis placeat. Impedit laudantium sed modi vel animi, cupiditate
        nulla dolore fugiat veniam in a optio!
      </p>
    </div>
  );
}
