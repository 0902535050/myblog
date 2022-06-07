import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCat();
  }, []);
  console.log(cat);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://picsum.photos/200/300" alt="" />
        <p>lorem ipsum dolor sit amet, con...</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        <ul className="sidebarList">
          {cat.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem">{c.name}</li>;
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}
