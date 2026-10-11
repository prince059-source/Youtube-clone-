import React from "react";

const Smallnav = ({ category, setcategory }) => {
  return (
    <div className="flex justify-between smallnav py-2 px-2 font-medium h-10 sm:h-12 gap-2 overflow-hidden overflow-x-scroll">
      <div
        className={`a ${category === 20 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit `}
        onClick={() => {
          setcategory(20);
        }}
      >
        All
      </div>
      <div
        className={`a  ${category === 10 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(10);
        }}
      >
        Music
      </div>
      <div
        className={`a ${category === 23 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(23);
        }}
      >
        Comedy{" "}
      </div>
      <div
        className={`a ${category === 39 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(39);
        }}
      >
        Horror{" "}
      </div>
      <div
        className={`a ${category === 18 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(18);
        }}
      >
        Short movie
      </div>
      <div
        className={`a ${category === 11 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(11);
        }}
      >
        Indian pop music
      </div>
      <div
        className={`a ${category === 32 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(32);
        }}
      >
        Action{" "}
      </div>
      <div
        className={`a ${category === 21 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(21);
        }}
      >
        Blogs
      </div>
      <div
        className={`a ${category === 21 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(21);
        }}
      >
        Gaming
      </div>
      <div
        className={`a ${category === 27 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(27);
        }}
      >
        Education{" "}
      </div>
      <div
        className={`a ${category === 31 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(31);
        }}
      >
        Naruto
      </div>
      <div
        className={`a ${category === 17 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(17);
        }}
      >
        Sports
      </div>
      <div
        className={`a ${category === 25 ? "bg-[rgb(114,113,113)]" : "bg-[rgb(55,55,55)]"} cursor-pointer h-fit w-fit`}
        onClick={() => {
          setcategory(25);
        }}
      >
        News
      </div>
    </div>
  );
};

export default Smallnav;
