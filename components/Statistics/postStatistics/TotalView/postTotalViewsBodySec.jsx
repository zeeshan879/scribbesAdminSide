import React from "react";

import BackArrow from "../../../BackArrow";
import InfoAboutUserPost from "./infoAboutUserPost"
import PopularPostByCountry from "../../popularPostByCountry"

const TotalViewBodySec = () => {
  const pageInfo = { tile: "Post Statistics", subtitle: "Total Views" };
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
		<InfoAboutUserPost/>
    <PopularPostByCountry/>

      </div>
    </>
  );
};

export default TotalViewBodySec;
