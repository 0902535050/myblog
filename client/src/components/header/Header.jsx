import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitleSm">React & Node</div>
        <div className="headerTitleLg">Blog</div>
      </div>
      <img className="headerImg" src="https://picsum.photos/2000/2000" alt="" />
    </div>
  );
}
