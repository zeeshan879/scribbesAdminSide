import React from "react";
import MostPostedHourChart from "../../Charts/mostPostedHourChart";
import fa from "../../../Asstes/style/followes_analysis.module.css";
import SelectCountry from "../../SelectCountry";
import SelectMonth from "../SelectMonth";

const MostPostHourChartSec = () => {
  return (
    <>
      <div className={fa.most_followers_chart}>
        <div className="flex justify-between items-center">
          <div className="font-grotesk font-bold text-base xl:text-[20px]">
            Most Posted Hour{" "}
          </div>
          <div className="flex items-center gap-[20px] xl:gap-[50px]">
            <div>
              <SelectCountry />
            </div>
            <div>
              <SelectMonth />
            </div>
          </div>
        </div>
    <div className="h-[82%]">
    <MostPostedHourChart />
    </div>
        <div className="flex justify-between text-xs xl:text-base items-center pl-[30px] md:pl-[70px] pr-4">
          <div className="font-grotesk">
            Average most posted hour is <span className="font-bold">8PM</span>
          </div>
          <div className="font-DM">Hours (Pm)</div>
        </div>
      </div>
    </>
  );
};

export default MostPostHourChartSec;
