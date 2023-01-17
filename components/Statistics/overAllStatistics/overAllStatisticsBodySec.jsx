import React from "react";
import OverAllUserInfo from "./overAllUserInfo";
import VideosInfocard from "../videoStatistics/VidosInfoCard";
import SelectCountry from "../../SelectCountry";
import SelectMonth from "../SelectMonth";
import FollwersAnalysis from "./FollwersAnalysis"

const OverAllStatisticsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <OverAllUserInfo />
        <div className="flex justify-end pt-[30px]">
          <div className="flex gap-[40px] items-center">
            <div>
              <SelectCountry />
            </div>
            <div>
              <SelectMonth />
            </div>
          </div>
        </div>
        <div>
          <VideosInfocard />
        </div>
<div className="w-full flex justify-between pt-[33px]">
<div className="w-full">
<FollwersAnalysis/>
</div>
</div>
      </div>
    </>
  );
};

export default OverAllStatisticsBodySec;
