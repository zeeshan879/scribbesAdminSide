import React from "react";
import BackArrow from "../../BackArrow";
import as from "../../../Asstes/style/acount_setting.module.css";
import arrowDown from "../../../Asstes/DashboardImages/arrowDown.png";
import delet from "../../../Asstes/DashboardImages/delet.png";
import ProfileUserInfoForm from "../Profile/userInformation";
import Image from "next/image";
import DetleAccountModal from "./delteAccountModal"
import {useState} from "react";

const AccountSettingBodySec = () => {
  const [open,setOpen]=useState(false)
  const handleModal=()=>{
    setOpen(!open)
  }
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Account Settings" />
        <div className={as.acount_seting_form}>
          <div className={as.acount_left_form}>
            <div>
              <div className={as.form_heading}>Email</div>
              <div className={as.info_box}>johndoe@gmail.com</div>
            </div>
            <div>
              <div className={as.form_heading}>Status</div>
              <div className={as.info_box}>Active</div>
            </div>
            <div>
              <div className={as.form_heading}>Verification</div>
              <div className={as.info_box}>Verified</div>
            </div>
          </div>
          <div className={as.acount_left_form}>
            <div>
              <div className={as.form_heading}>Joining date</div>
              <div className={as.info_box}>01/02/2022</div>
            </div>
            <div>
              <div className={as.form_heading}>Account URL</div>
              <div className={as.info_box}>
                user/scribbes-com/14-10-gpu-1tb#
              </div>
            </div>
            <div className={as.right_dived_form}>
              <div className="w-full">
                <div className={as.form_heading}>IP address</div>
                <div className={as.info_box}>66.249.66.24</div>
              </div>
              <div className="w-full">
                <div className={as.form_heading}>Id</div>
                <div className={as.info_box}>8888888</div>
              </div>
            </div>
          </div>
        </div>

        <div className={as.language_heading}>Language</div>
        <div className={as.language_select_box}>
          <div className={as.lang_select_Wraper}>
            English
            <Image src={arrowDown} />
          </div>
        </div>
        <div className={as.pass_heading}>Change Password</div>
        <div className={as.change_pass_wrapper}>
          <div className={as.curent_pass_box}>
            <div className="text-base lg:text-[20px] font-DM font-bold">
              Current Password
            </div>
            <div className={as.c_pass_wraper}>
              <input className={as.ip_ele} placeholder="Current Password" />
            </div>
            <div className="text-[#1CAC19] font-DM font-normal pl-[55px] cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <div className={as.seprator}></div>
          <div className={as.new_pass_box}>
            <div className="text-base lg:text-[20px] font-DM font-bold">New Password</div>
            <div className={as.c_pass_wraper2}>
              <input className={as.ip_ele} placeholder="New Password" />
            </div>
            <div className="text-base lg:text-[20px] font-DM font-bold">
              Confirm New Password
            </div>
            <div className={as.c_pass_wraper2}>
              <input className={as.ip_ele} placeholder="Confirm New Password" />
            </div>
            <div className="flex justify-end pt-5 lg:pt-[40px]">
              <div className={as.pass_save_btn}>Save</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-1 lg:pt-[40px]  pb-[40px]">
          <div className="flex gap-2 items-center font-DM text-base text-[#FF0000] cursor-pointer" onClick={()=>handleModal()}>
            <Image src={delet} />
            Delete Account
          </div>
        </div>
      </div>
      <DetleAccountModal state={open} onClick={handleModal} />
    </>
  );
};

export default AccountSettingBodySec;
