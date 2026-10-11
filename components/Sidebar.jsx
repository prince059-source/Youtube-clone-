import React from "react";
import home from "../assets/home.png";
const Sidebar = () => {
  return (
    <div className="w-fit h-full slidebar sticky top-0 ">
      <ul className="text-white unorder">
        <li>
          <i className="opacity-90 fa-solid fa-house"></i>
          <p>Home</p>
        </li>
        <li>
          <i className="opacity-90 fa-brands fa-youtube-shorts"></i>
          <p>Shorts</p>
        </li>
        <li>
          <i className="opacity-90 fa-brands fa-scribd"></i>
          <p>Subscription</p>
        </li>
        <li>
          <i className="opacity-90 fa-regular fa-circle-user"></i>
          <p>You</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
