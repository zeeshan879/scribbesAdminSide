import React from "react";
import vs from "../../../../Asstes/style/video_statics.module.css";
import SelectMonth from "../../SelectMonth";

const UserByAgeChart = () => {
  return (
    <>
      <div className={vs.user_chart_box}>
        <div className="flex justify-between items-center">
		<div className="font-grotesk font-bold text[20px]">Users by Age</div>
          <SelectMonth />
        </div>
      </div>
    </>
  );
};

export default UserByAgeChart;
