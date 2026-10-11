import React, { useState } from "react";
import menu from "../assets/menu.png";
import logo from "../assets/dark-logo.png";
import search from "../assets/search.png";
import notification from "../assets/notification.png";
import prince from "../assets/prince profile photo.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [query, setquery] = useState("");
  return (
    <nav className="w-full h-15  flex justify-between px-1 sm:px-6 items-center select-none sticky">
      <div className="flex items-center">
        <img src={menu} alt="" className="h-5 hidden sm:inline" />
        <Link to="/#">
          <img src={logo} alt="" className="h-15" />
        </Link>
      </div>
      <div className="w-[55%] sm:w-[40%] flex">
        <input
          type="text"
          className="border outline-none px-5 text-sm font-bold text-white border-white/20 rounded-l-3xl w-[80%] sm:w-[90%]"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setquery(e.target.value);
          }}
        />
        <Link
          className="w-[20%] sm:w-[10%] bg-[#2B2A2A] flex items-center justify-center p-2 rounded-r-3xl  "
          to={`/search/${query}`}
        >
          <button>
            {" "}
            <img src={search} alt="" className="h-5  hover:cursor-pointer" />
          </button>{" "}
        </Link>{" "}
      </div>
      <div className="sm:w-55 flex justify-between ">
        <button className="bg-[#2B2A2A] py-2 px-4 rounded-3xl hidden sm:inline">
          <i className="fa-solid fa-plus mr-2"></i>
          <span className="font-medium">Create</span>
        </button>
        <button>
          <img src={notification} alt="" className="h-7" />
        </button>
        <button className="hidden sm:inline">
          <img src={prince} alt="" className="rounded-full h-10" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
