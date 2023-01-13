import React from "react";
import BackArrow from "../../BackArrow";
import PostInfocard from "./PostInfoCard";
import activeFlag from "../../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";
import ReachedAudiance from "./reachedAudianceSec";
import PopularPostPost from "./MostPopularPost";
import SelectMonth from "../SelectMonth";

const PostStaticsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Posts Statistics" />

        <ReachedAudiance />
        <div className="flex justify-end items-center gap-[42px]">
          <div className="flex items-center gap-[14px] cursor-pointer">
            <Image src={activeFlag} />
            <Image src={profileArrow} />
          </div>
          <div>
            <SelectMonth />
          </div>
        </div>

        <PostInfocard />
        <PopularPostPost />
      </div>
    </>
  );
};

export default PostStaticsBodySec;
