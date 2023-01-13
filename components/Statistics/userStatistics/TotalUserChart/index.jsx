import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectMonth from "../../SelectMonth";

const TotalUserChart = () => {
  return (
    <>
      <div className={vs.user_chart_box}>
        <div className="flex justify-between items-center">
          <div className="font-grotesk font-bold text[20px]">Total Users</div>
          <SelectMonth />
        </div>
      </div>
    </>
  );
};

export default TotalUserChart;
