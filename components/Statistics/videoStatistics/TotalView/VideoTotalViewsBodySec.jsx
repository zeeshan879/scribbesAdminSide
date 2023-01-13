import React from "react";

import BackArrow from "../../../BackArrow";
import InfoAboutUserVideo from "./infoAboutUserVideot";
import PopularPostByCountry from "../../popularPostByCountry";

const TotalVideoViewBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Videos Statistics , Total Views" />
        <InfoAboutUserVideo />
        <PopularPostByCountry />
      </div>
    </>
  );
};

export default TotalVideoViewBodySec;
