import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectAge from "../../../SelectAge";
import SelectCountry from "../../../SelectCountry";
import SelectGender from "../../../SelectGender";
import RangeProgressChart from "../../RangeProgressChart";
import SelectMonth from "../../SelectMonth";
import SplineAreaChart from "../../../Charts/splineAreaChart";

const ReachedAudiance = () => {
  const progresChartData = { percentage: "70", gender: "Gender" };
  const progresChartData2 = { percentage: "70", gender: "Age" };
  return (
    <>
      <div className={vs.reached_audiance_container}>
        <div className={vs.circular_progress_chart}>
          <div className="font-grotesk text-[20px] font-bold">
            Reached Audiance
          </div>
          <div className="font-grotesk text-[30px] pt-[18px] font-bold">
            500000
          </div>
          <div className="font-grotesk text-base">Total Audiance Reached</div>
          <div className="flex gap-[50px] items-center pt-4">
            <div>
              <div className="w-[160px] h-[160px]">
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
            <div>
              <div className="w-[160px] h-[160px]">
                <RangeProgressChart data={progresChartData2} />
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
        <div className="flex w-full gap-[30px] h-full">
          <div className="h-full min-w-[170px] flex flex-col justify-between py-[10px]">
            <div className="font-bold font-grotesk text-[20px]">Overview</div>
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[10px] font-grotesk">
                <div className={vs.color_indicator}></div>
                Accounts Reached
              </div>
              <div className="flex items-center gap-[10px] font-grotesk">
                <div className={vs.color_indicator2}></div>
                Accounts Engaged
              </div>
              <div className="flex items-center gap-[10px] font-grotesk">
                <div className={vs.color_indicator}></div>
                Accounts Activity
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex  justify-end">
              <div className="flex gap-[40px] items-center">
                <div>
                  {" "}
                  <SelectCountry />
                </div>
                <div>
                  {" "}
                  <SelectGender />
                </div>
                <div>
                  {" "}
                  <SelectAge />
                </div>
                <div>
                  {" "}
                  <SelectMonth />
                </div>
              </div>
            </div>
            <div className="w-full h-full pb-[40px]">
              <SplineAreaChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachedAudiance;
