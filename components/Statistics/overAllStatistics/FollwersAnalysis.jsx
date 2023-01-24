import React from "react";
import fa from "../../../Asstes/style/followes_analysis.module.css";
import SelectAge from "../../SelectAge";
import SelectGender from "../../SelectGender";
import SelectMonth from "../SelectMonth";
import UserProgressChart from "./userProgresChart";
import RangeProgressChart from "../RangeProgressChart";
import vs from "../../../Asstes/style/video_statics.module.css";
const FollwersAnalysis = () => {
  const progresChartData = { percentage: "70", gender: "Gender" };
  const progresChartData2 = { percentage: "70", gender: "Age" };
  return (
    <>
      <div className={fa.follwes_main_box}>
        <div className="flex justify-between items-center">
          <div className="font-bold font-grotesk text-base xl:text-[20px]">
            Followers Analysis
          </div>
          <div className="flex gap-[40px] items-center">
            <SelectGender />
            <SelectAge />
            <SelectMonth />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-[30px] lg:gap-[50px] 2xl:gap-[100px] justify-center md:justify-between items-center pt-[25px]">
          <div className="w-full">
            <UserProgressChart />
          </div>
          <div className="w-[75%] flex flex-col gap-[20px] 2xl:gap-[30px]">
            <div className="flex gap-[30px] items-center">
              <div className="h-[120px] w-[120px]">
                <RangeProgressChart data={progresChartData} />
              </div>

              <div className="flex flex-col justify-center items-center pt-4 gap-3">
                <div className="flex items-center gap-[7px] font-grotesk">
                  <span className={vs.chart_fill_circle}></span> Male 60%
                </div>
                <div className="flex items-center gap-[7px] pl-[15px] font-grotesk">
                  <span className={vs.chart_fill_circle2}></span> Female 40%
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] items-center">
              <div className="h-[120px] w-[120px]">
                <RangeProgressChart
                  data={progresChartData2}
                  data2={progresChartData2}
                />
              </div>

              <div className="flex flex-col justify-center items-center pt-4 gap-3">
                <div className="flex items-center gap-[7px] font-grotesk">
                  <span className={vs.chart_fill_circle}></span> Male 60%
                </div>
                <div className="flex items-center gap-[7px] pl-[15px] font-grotesk">
                  <span className={vs.chart_fill_circle2}></span> Female 40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollwersAnalysis;
