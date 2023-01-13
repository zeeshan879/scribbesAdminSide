import React from "react";

import BackArrow from "../../../BackArrow";
import InfoAboutUserPost from "./infoAboutUserPost"
import PopularPostByCountry from "../../popularPostByCountry"

const TotalViewBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Post Statistics , Total Views" />
		<InfoAboutUserPost/>
    <PopularPostByCountry/>

      </div>
    </>
  );
};

export default TotalViewBodySec;
