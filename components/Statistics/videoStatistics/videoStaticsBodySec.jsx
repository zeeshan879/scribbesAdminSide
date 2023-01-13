import React from "react";
import BackArrow from "../../BackArrow";
import VideosInfocard from "./VidosInfoCard";
import activeFlag from "../../../Asstes/DashboardImages/activeFlag.png"
import profileArrow from "../../../Asstes/DashboardImages/profileArrow.png"
import Image from "next/image";
import ReachedAudiance from "./reachedAudianceSec"
import PopularPostVideos from "./MostPopularVideos/mostPoplaurVideos"

const VideoStaticsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Posts Statistics" />

		<ReachedAudiance/>
		<div className="flex justify-end items-center gap-[42px]">
          <div className="flex items-center gap-[14px] cursor-pointer">
            <Image src={activeFlag} />
            <Image src={profileArrow} />
          </div>
          <div className="flex items-center gap-[14px] cursor-pointer">
            <div className="text-base font-DM text-[#1CAC19]">Month</div>
            <Image src={profileArrow} />
          </div>
        </div>

        <VideosInfocard />
		<PopularPostVideos/>
      </div>
    </>
  );
};

export default VideoStaticsBodySec;
