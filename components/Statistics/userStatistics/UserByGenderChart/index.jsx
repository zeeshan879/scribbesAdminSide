import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectMonth from "../../SelectMonth";
import RangeProgressChart from "../../RangeProgressChart"

const UserByGenderChart = () => {
  const progresChartData={percentage:"70",gender:"Gender"}
  return (
    <>
      <div className={vs.user_chart_box}>
        <div className="flex justify-between items-center">
		<div className="font-grotesk font-bold text[20px]">Users by Gender</div>
          <SelectMonth />
        </div>
        <div className="flex justify-center pt-[25px]">
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
        </div>
      </div>
    </>
  );
};

export default UserByGenderChart;
