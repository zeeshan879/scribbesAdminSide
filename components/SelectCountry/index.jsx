import React from "react";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png";
import Image from "next/image";
import cen from "../../Asstes/style/home_centerView.module.css";

const SelectCountry = () => {
  return (
    <div>
      <div className="flex cursor-pointer items-center gap-[11px]">
        <div className={cen.country_icon}>
          <Image src={activeFlag} />
        </div>
        <Image src={profileArrow} />
      </div>
    </div>
  );
};

export default SelectCountry;
