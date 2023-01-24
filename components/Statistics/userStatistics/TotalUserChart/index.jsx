import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectMonth from "../../SelectMonth";
import MostPostedHourChart from "../../../Charts/mostPostedHourChart";

const TotalUserChart = () => {
  return (
    <>
      <div className={vs.user_chart_box}>
        <div className="flex justify-between items-center">
          <div className="font-grotesk font-bold text[20px]">Total Users</div>
          <SelectMonth />
        </div>
        <div className="flex gap-[0px] items-center h-[90%] lg:pb-[0px]">
          <div className="text_rotate">TotalUsers</div>
          <div className="w-full h-full">
            <MostPostedHourChart />
          </div>
        </div>
        <div className="flex justify-center font-DM">Months</div>
      </div>
    </>
  );
};

export default TotalUserChart;
