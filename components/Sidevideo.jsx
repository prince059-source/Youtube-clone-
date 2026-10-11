import React from "react";
import { api, value_converter } from "../src/api";
import { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Sidevideo = ({ categoryId }) => {
  const [alldata, setalldata] = useState([]);

  const fetchurl = async () => {
    const rawdata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=7&regionCode=US&videoCategoryId=${categoryId}&key=${api}`,
    );
    const data = await rawdata.json();
    // if (data.items.snippet.categoryId === category) {
    //   setcopydata(data.items);
    // }
    setalldata(data.items);
    // setalldata(copydata.reverse());
  };
  useEffect(() => {
    fetchurl();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {alldata.map((item) => (
        <Link
          to={`/video/${item.snippet.categoryId}/${item.snippet.channelId}/${item.id}`}
          className="flex mb-2"
        >
          <img
            className="rounded-2xl w-[50%] sm:w-[60%]"
            id="1"
            alt=""
            src={item.snippet.thumbnails.high.url}
          />
          <div className="px-2 flex flex-col">
            <p className=""> {item.snippet.title}</p>
            <span className="text-[12px] opacity-50">
              {item.snippet.channelTitle}
            </span>
            <span className="opacity-50 text-[12px]">
              <i className="fa-solid fa-play text-[8px]"></i>
              {value_converter(item.statistics.viewCount)}{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidevideo;
