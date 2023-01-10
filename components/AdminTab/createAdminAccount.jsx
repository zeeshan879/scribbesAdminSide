import React from "react";
import ca from "../../Asstes/style/create_admin_account.module.css";
import BackArrow from "../BackArrow";
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png";
import arrowDown from "../../Asstes/DashboardImages/arrowDown.png";
import Image from "next/image";

const CreateAdminAccount = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Add Admin" />

        <div className={ca.create_account_body}>
          <div className="max-w-[474px]">
            <div className={ca.heading}>Create Admin Account</div>
            <div className={ca.main_ip_wrapwer}>
              <div>
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                  First Name*
                </div>
                <div className={ca.small_ip}>
                  <input placeholder="John" className={ca.ip_ele} />
                </div>
              </div>
              <div>
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                  Last Name*
                </div>
                <div className={ca.small_ip}>
                  <input placeholder="Doe" className={ca.ip_ele} />
                </div>
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                Email Address*
              </div>
              <div className={ca.email_box}>
                <input placeholder="email@website" className={ca.ip_ele} />
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">Username*</div>
              <div className={ca.email_box}>
                <input placeholder="John Doe" className={ca.ip_ele} />
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">Password*</div>
              <div className={ca.email_box}>
                <input
                  placeholder="12345678"
                  type="password"
                  className={ca.ip_ele}
                />
              </div>
            </div>
            <div className={ca.main_ip_country}>
              <div>
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">Country*</div>
                <div className={ca.slect_country}>
                  <div className="flex items-center gap-[10px]">
                    <div className="pt-[5px]">
                      <Image src={activeFlag} />
                    </div>
                    <div className={ca.select_sep}></div>
                  </div>
                  <div className="w-full flex justify-between items-center pl-[10px]">
                    <div className="font-DM">USA</div>
                    <div>
                      <Image src={arrowDown} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">Gender*</div>
                <div className={ca.select_dender}>
				<div className="font-DM">Male</div>
                    <div>
                      <Image src={arrowDown} />
                    </div>
                </div>
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">Admin type*</div>
              <div className={ca.select_admin_type}>
			  <div className="font-DM">Super Admin</div>
                    <div>
                      <Image src={arrowDown} />
                    </div>
              </div>
            </div>
            <div className={ca.create_acount}>Creat Account</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdminAccount;
