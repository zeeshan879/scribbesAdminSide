import React from "react";
import au from "../../../Asstes/style/allUser.module.css";
import profileArrow from "../../../Asstes/DashboardImages/profileArrow.png";
import activeFlag from "../../../Asstes/DashboardImages/activeFlag.png";
import Image from "next/image";

const VerifiedCommunityFilter = () => {
  return (
    <>
      <div className={au.filter_box}>
        <div className={au.filter_left}>
          <div className="flex cursor-pointer gap-3 items-center">
            <Image src={activeFlag} />
            <Image src={profileArrow} />
          </div>
        </div>
        <div className={au.filter_right}>
          <div>Show</div>
          <div className={au._filter_enitiy}>
            <input className={au.entity_ele} type="number" placeholder="05" />
          </div>
          <div> Entries</div>

        </div>
      </div>
    </>
  );
};

export default VerifiedCommunityFilter;
