import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import Image from "next/image";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import { useState } from "react";

const SelectAge = () => {
  const [selectAge, setAge] = useState(false);
  return (
    <>
      <div className={cen.select_age_box} onClick={() => setAge(!selectAge)}>
        Age <Image src={profileArrow} />
        {selectAge && (
          <div className={cen.age_select_toogle}>
            <div className="text-black text-sm cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              less then 10
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              10 to 20
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              20 to 30
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              30 to 40
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              40 to 50
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              60 to 70
            </div>
            <div className="text-black  text-sm  cursor-pointer pl-[10px] hover:bg-[#D9D9D9]">
              more then 70
            </div>

          </div>
        )}
      </div>
    </>
  );
};

export default SelectAge;
