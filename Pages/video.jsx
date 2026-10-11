import React, { useEffect, useState } from "react";
import save from "../assets/save.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import Comments from "../components/Comments";
import Sidevideo from "../components/Sidevideo";
import { useParams } from "react-router-dom";
import { api, value_converter } from "../src/api";
const video = () => {
  const [realdata, setrealdata] = useState([]);
  const [finaldata, setfinaldata] = useState(false);
  const { videoId } = useParams();
  const { channelId } = useParams();
  const { categoryId } = useParams();
  const videodata = async () => {
    let date = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${api} `,
    );
    const dates = await date.json();
    setrealdata(dates.items);
    const channelData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${api}`,
    );
    const agdata = await channelData.json();
    setfinaldata(agdata.items);
  };
  useEffect(() => {
    videodata();
  }, [videoId]);

  return (
    <div className="h-screen sm:h-178 w-full  overflow-y-auto ">
      <div className="sm:flex h-fit w-full">
        <div className="sm:px-6 px-1 w-full sm:w-[72%] pt-2">
          {realdata.map((item) => (
            <>
              <iframe
                className="w-full h-81 sm:h-150"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h1 className="text-xl py-2 font-semibold sm:font-bold">
                {item.snippet.title}
              </h1>
              <div className="sm:flex justify-between h-20 sm:h-10 mt-2">
                <div className="flex justify-between mb-2">
                  {" "}
                  <div className="flex gap-3  ">
                    <img
                      className="rounded-full h-10 sm:h-10"
                      alt=""
                      src={
                        finaldata
                          ? finaldata[0].snippet.thumbnails.high.url
                          : "img"
                      }
                    />
                    {console.log(finaldata ? finaldata[0] : "img")}
                    <div className="mr-4  ">
                      <p className="font-bold">{item.snippet.channelTitle}</p>
                      <span className="text-[12px] relative bottom-1">
                        {value_converter(
                          finaldata
                            ? finaldata[0].statistics.subscriberCount
                            : "img",
                        )}
                        <span className="ml-1">Subscriber</span>
                      </span>
                    </div>
                  </div>
                  <button className=" px-5 rounded-3xl bg-white text-black">
                    Subscribe
                  </button>
                </div>
                <div className="w-140 flex gap-2 font-bold ">
                  <div className="flex items-center gap-5 w-fit px-2 bg-white/10 rounded-4xl">
                    <button className="flex items-center gap-2">
                      <i className="fa-regular fa-thumbs-up text-[25px]"></i>{" "}
                      <span>{value_converter(item.statistics.likeCount)}</span>
                    </button>
                    <hr className="border  h-[70%] opacity-30" />
                    <button className="flex items-center">
                      <i className="fa-regular fa-thumbs-down text-[25px]"></i>{" "}
                    </button>
                  </div>
                  <button className="flex items-center px-4 gap-1 bg-white/10 rounded-4xl">
                    <img className="w-7" src={share} alt="" />{" "}
                    <span>Share</span>
                  </button>
                  <button className="flex items-center px-4 gap-1 bg-white/10 rounded-4xl">
                    <img className="w-7" src={save} alt="" /> <span>Save</span>
                  </button>

                  <button></button>
                </div>
              </div>
              <div className="mt-3 bg-white/10 rounded-2xl p-2">
                {item.snippet.description.slice(0, 250)}....
              </div>
              <div className="mt-2 p-2 hidden sm:block">
                <h1 className="font-bold text-2xl">Comments</h1>
                <hr className="mt-2" />
                <Comments
                  name="princegupta"
                  time="6"
                  text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequatur perspiciatis aliquid quisquam quae quo libero dolores aut, debitis mollitia."
                  like="17"
                />{" "}
                <Comments
                  name="rekha"
                  time="1"
                  text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequatur perspiciatis aliquid quisquam quae quo libero dolores aut, debitis mollitia.kfnno jbfpfjw hhv0 v"
                  like="1"
                />{" "}
                <Comments
                  name="siya varodra"
                  time="3"
                  text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequatur ."
                  like="5"
                />{" "}
                <Comments
                  name="priyanshigupta"
                  time="0.5"
                  text=" Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. consectetur, adipisicing elit. Voluptate consequatur ."
                  like="10"
                />
              </div>
            </>
          ))}{" "}
        </div>
        <div className="sm:w-[28%] pt-2  ">
          <Sidevideo categoryId={categoryId} />{" "}
        </div>
      </div>
    </div>
  );
};

export default video;
