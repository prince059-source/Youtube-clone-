import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Smallnav from "../components/Smallnav";
import Feed from "../components/Feed";

const Home = () => {
  const [category, setcategory] = useState(20);
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="w-full sm:h-170 h-screen px-5">
        <Smallnav category={category} setcategory={setcategory} />
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;
