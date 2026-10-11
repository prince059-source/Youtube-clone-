import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, value_converter } from "../src/api";
import moment from "moment";
const Feed = ({ category }) => {
  const [alldata, setalldata] = useState([]);

  const fetchurl = async () => {
    const rawdata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostpopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api}`,
    );
    const data = await rawdata.json();

    setalldata(data.items);
    console.log(data.items);
  };
  useEffect(() => {
    fetchurl();
  }, [category]);
  return (
    <div className="w-full h-full overflow-y-auto p-2 pt-5 sm:flex sm:flex-wrap sm:gap-4">
      {alldata.map((item, id) => (
        <Link
          key={id}
          to={`/video/${item.snippet.categoryId}/${item.snippet.channelId}/${item.id}`}
          className="sm:w-115 w-[85vw] h-fit p-1 mb-6 sm:mb-2 rounded-2xl transition-all duration-200 hover:shadow-[0_0_15px_rgba(100,100,100,0.5)] flex flex-col  "
        >
          <img
            className="rounded-2xl object-contain w-full"
            id="1"
            alt=""
            src={`${item.snippet.thumbnails.high.url}`}
          />{" "}
          <div className="mt-2 pl-2">
            <h1 className="font-bold"> {item.snippet.title}</h1>
            <span className="opacity-50 ">{item.snippet.channelTitle}</span>
            <span className="opacity-50 ml-3 ">
              <i className="fa-solid fa-play text-[8px] relative bottom-1 mr-1"></i>
              {value_converter(item.statistics.viewCount)}
              <span className="ml-2">
                {" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
