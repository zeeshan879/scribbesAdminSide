import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";
import { useState } from "react";

const SelectGender = () => {
  const [selectGender, setGender] = useState(false);
  return (
    <>
      <div
        className={cen.select_gender}
        onClick={() => setGender(!selectGender)}
      >
        Male <Image src={profileArrow} />
        {selectGender && (
          <div className={cen.gender_select_toogle}>
            <div className="text-black cursor-pointer pl-[20px] hover:bg-[#D9D9D9]">
              Male
            </div>
            <div className="text-black cursor-pointer pl-[20px] hover:bg-[#D9D9D9]">
              Female
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectGender;
