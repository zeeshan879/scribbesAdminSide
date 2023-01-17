import React from "react";
import cen from "../../Asstes/style/home_centerView.module.css";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";

const SelectGender = () => {
  return (
    <>
      <div className={cen.select_gender}>
        Male <Image src={profileArrow} />
      </div>
    </>
  );
};

export default SelectGender;
