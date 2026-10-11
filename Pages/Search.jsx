import React, { useEffect, useState } from "react";
import { api, value_converter } from "../src/api";
import Sidebar from "../components/Sidebar";
import moment from "moment";

import { Link, useParams } from "react-router-dom";

const Searchl = () => {
  const [inputn, setinputn] = useState();
  const { searchid } = useParams();
  const [viewdata, setviewdata] = useState([]);
  const [alldata, setalldata] = useState([]);
  const [channel, setchannel] = useState([]);
  const fetchurl = async () => {
    const rawdata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchid}&key=${api}`,
    );
    const data = await rawdata.json();
    setalldata(data.items);
  };

  useEffect(() => {
    fetchurl();
  }, [searchid]);
  useEffect(() => {
    const fetchview = async () => {
      const ids = alldata
        .map((item) => {
          return item.id.videoId;
        })
        .join(",");
      const viewdata = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}&key=${api}`,
      );

      const indata = await viewdata.json();
      let a = indata.items;
      console.log(a);
      setviewdata(a);
    };

    fetchview();
  }, [alldata]);

  const fetchchannel = async () => {
    let a = viewdata
      .map((i) => {
        return i.snippet.channelId;
      })
      .join(",");
    console.log(a);
    let rawdata = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${a}w%2CUChdEDIG2WGfla4scYRYwPCQ&key=${api}`,
    );
    let b = await rawdata.json();
    console.log(b.items[5].snippet.thumbnails.high.url);
    setchannel(b.items);
  };
  useEffect(() => {
    fetchchannel();
  }, [viewdata]);
  return (
    <div className="flex h-screen sm:h-174 w-screen ">
      <div className="flex overflow-y-auto w-full">
        {console.log(alldata, viewdata)}

        <Sidebar />
        <div className="px-3 pt-3 sm:px-30 h-fit w-full flex flex-col flex-wrap gap-45  sm:gap-43">
          {alldata.map((item, id) => (
            <Link
              key={id}
              className="h-30  inline-block"
              to={`/video/${1}/${item.snippet.channelId}/${item.id.videoId}`}
            >
              <div className="w-full h-70 sm:flex  ">
                {" "}
                <div
                  className={`w-full sm:w-120 overflow-x-hidden h-50 sm:h-70 bg-cover bg-center rounded-xl sm:rounded-3xl`}
                  style={{
                    backgroundImage: `url(${item.snippet.thumbnails.high.url})`,
                  }}
                ></div>
                <div className="sm:px-5 pt-2 sm:pt-0 font-medium flex sm:block gap-2 sm:gap-0">
                  <div className="sm:hidden">
                    {" "}
                    <img
                      className=" w-8 rounded-full"
                      src={
                        channel[id]
                          ? channel[id].snippet.thumbnails.high.url
                          : "#"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <p>{item.snippet.title}</p>
                    <div className="gap-4">
                      <p className="text-[12px] opacity-50 font-normal">
                        <span>
                          {" "}
                          {viewdata[id]
                            ? value_converter(viewdata[id].statistics.viewCount)
                            : ""}
                        </span>
                        <span className="mx-1 font-normal text-[2px] relative bottom-1">
                          <i className="fa-solid fa-circle"></i>
                        </span>
                        <span>
                          {viewdata[id]
                            ? moment(viewdata[id].snippet.publishedAt).fromNow()
                            : ""}
                        </span>
                        {}
                      </p>
                      <div className=" hidden  sm:my-3 sm:flex gap-2 sm:gap-5 text-[13px] ">
                        <img
                          className=" w-6 rounded-full"
                          src={
                            channel[id]
                              ? channel[id].snippet.thumbnails.high.url
                              : "#"
                          }
                          alt=""
                        />{" "}
                        <span className="opacity-50">
                          {channel[id] ? channel[id].snippet.title : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="hidden sm:block opacity-50 text-[12px]">
                    <span>{item.snippet.description}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchl;
