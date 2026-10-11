import React from "react";
import user from "../assets/user_profile.jpg";

const Comments = ({ name, time, text, like }) => {
  return (
    <div className="my-5 flex gap-2  flex-nowrap">
      <img className="rounded-full w-8 h-8 shrink-0" src={user} alt="" />
      <div>
        <h2 className="text-[15px]">
          @{name}{" "}
          <span className="opacity-50 text-[12px]">{time} years ago</span>
        </h2>
        <p>{text}</p>
        <div className="flex gap-2 mt-2">
          {" "}
          <i className="fa-regular fa-thumbs-up text-[20px] opacity-70"></i>{" "}
          <span className="opacity-50">{like}</span>
          <i className="fa-regular fa-thumbs-down text-[20px] opacity-70"></i>{" "}
          <span className="ml-5 text-[14px] font-bold">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
