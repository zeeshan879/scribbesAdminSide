import React from "react";
import OverAllUserInfo from "./overAllUserInfo";
import VideosInfocard from "../videoStatistics/VidosInfoCard";
import SelectCountry from "../../SelectCountry";
import SelectMonth from "../SelectMonth";
import FollwersAnalysis from "./FollwersAnalysis";
import MostPostHourChartSec from "./mostPostHourChart";
import vs from "../../../Asstes/style/video_statics.module.css"

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
        <div className={vs.followers_posted_hour}>
          <div className="w-full">
            <FollwersAnalysis />
          </div>
          <div className={vs.most_posted_box}>
            <MostPostHourChartSec />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverAllStatisticsBodySec;
