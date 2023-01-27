import React from "react";
import at from "../../Asstes/style/admin_tab.module.css";
import cardImg from "../../Asstes/DashboardImages/cardImg.png";
import onlineAdmin from "../../Asstes/DashboardImages/onlineAdmin.png";
import supper from "../../Asstes/DashboardImages/supper.png";
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import Image from "next/image";
import SupperAdminTable from "./supperAdminTable";
import SupperHistoryOfAdmin from "./supperAdminHistory";
import Link from "next/link";

const SuperAdminContentSection = () => {
  return (
    <>
      <div className="body_container">
        <div className={at.supper_admin_counts}>
          <div className={at.supper_admin_inner}>
            <div className={at.supper_admin_count_item}>
              <div>
                <Image src={cardImg} />
              </div>
              <div className="font-grotesk font-bold text-[20px] lg:text-[30px]">50</div>
              <div className="font-grotesk text-base">Admins</div>
            </div>
            <div className={at.supper_admin_count_item}>
              <div>
                <Image src={onlineAdmin} />
              </div>
              <div className="font-grotesk font-bold text-[20px] lg:text-[30px]">40</div>
              <div className="font-grotesk text-base">Online Admins</div>
            </div>
            <Link href="/Allsupper-admin" >
            <div className={at.supper_admin_count_item}>
              <div className="relative">
                <div className="flex justify-center">
                  <Image src={supper} />
                </div>
                <Image src={cardImg} />
              </div>
              <div className="font-grotesk font-bold text-[20px] lg:text-[30px]">30</div>
              <div className="font-grotesk text-base">Super Admins</div>
            </div>
            </Link>
          </div>
          <div className={at.admin_action_box}>
            <Link href="/admin/add-admin">
            <div className={at.add_admin_btn}>+Add Admin</div>
            </Link>
            <div className={at.edit_admin_btn}>Edit Admin</div>
          </div>
        </div>
        <div className={at.admin_his_tab}>

          <div className={at.sup_admin_table}>
            <div className="w-full max-w-[900px] flex justify-end pt-1 2xl:pt-4">
              <div className="flex items-center gap-[40px]">
                <div className="flex cursor-pointer items-center gap-[14px]">
                  <Image src={activeFlag} />
                  <Image src={profileArrow} />
                </div>
                <div className="flex items-center cursor-pointer gap-[14px] font-DM text-[#1CAC19]">
                  Male
                  <Image src={profileArrow} />
                </div>
                <div className="flex items-center cursor-pointer gap-[14px] font-DM text-[#1CAC19]">
                  Age
                  <Image src={profileArrow} />
                </div>
              </div>
            </div>
            <div>
              <SupperAdminTable />
            </div>
          </div>
       
          <SupperHistoryOfAdmin />
          </div>
        </div>
    
    </>
  );
};

export default SuperAdminContentSection;
