import React from "react";
import vs from "../../../Asstes/style/video_statics.module.css";
import profileArrow from "../../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";
import { useState } from "react";

const SelectMonth = () => {
  const [select, setSelect] = useState(false);
  return (
    <>
      <div className={vs.select_month} onClick={() => setSelect(!select)}>
        <div className="text-[#1CAC19] font-DM text-base">Month</div>
        <div>
          <Image src={profileArrow} />
        </div>
        {select && (
          <div className={vs.select_month_drop_down}>
            <div className={vs.month_items}>Year</div>
            <div className={vs.month_items}>Month</div>
            <div className={vs.month_items}>Week</div>
            <div className={vs.month_items}>Day</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectMonth;
