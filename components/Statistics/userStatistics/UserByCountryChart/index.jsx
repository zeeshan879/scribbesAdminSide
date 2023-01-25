import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectMonth from "../../SelectMonth";
import GoogleChart from "../../../Charts/googleChart";

const UserByCountryChart = () => {
  return (
    <>
      <div className={vs.user_chart_box}>
        <div className="flex justify-between items-center">
          <div className="font-grotesk font-bold text[20px]">
            Users by Country
          </div>
          <SelectMonth />
        </div>
        <div className="h-[220px] pt-[20px]">
          <GoogleChart />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-[5px]">
            <div className="flex items-center gap-[10px] font-grotesk">
              <div className={vs.country_indicator}></div>
              Most Active Users
            </div>
            <div className="flex items-center gap-[10px] font-grotesk">
              <div className={vs.country_indicator2}></div>
              Average Active Users
            </div>
            <div className="flex items-center gap-[10px] font-grotesk">
              <div className={vs.country_indicator3}></div>
              Least Active Users
            </div>

          </div>
          <div className="font-DM underline cursor-pointer">Full Breakdown</div>
        </div>
      </div>
    </>
  );
};

export default UserByCountryChart;
