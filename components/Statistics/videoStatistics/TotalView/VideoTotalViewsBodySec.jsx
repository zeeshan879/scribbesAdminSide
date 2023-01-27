import React from "react";

import BackArrow from "../../../BackArrow";
import InfoAboutUserVideo from "./infoAboutUserVideot";
import PopularPostByCountry from "../../popularPostByCountry";

const TotalVideoViewBodySec = () => {
  const pageInfo = { tile: "Videos Statistics", subtitle: "Total Views" };
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <InfoAboutUserVideo />
        <PopularPostByCountry />
      </div>
    </>
  );
};

export default TotalVideoViewBodySec;
