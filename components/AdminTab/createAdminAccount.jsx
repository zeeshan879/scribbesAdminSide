import React, { useState } from "react";
import ca from "../../Asstes/style/create_admin_account.module.css";
import cen from "../../Asstes/style/home_centerView.module.css";
import BackArrow from "../BackArrow";
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png";
import arrowDown from "../../Asstes/DashboardImages/arrowDown.png";
import Image from "next/image";

const CreateAdminAccount = () => {
  const pageInfo = { tile: "Add Admin", subtitle: "" };
  const [gender, setGender] = useState("Male");
  const [adminType, setAdminType] = useState("Admin");
  const [genderToggle, setGenderToggle] = useState(false);
  const [adminTypeToggle, setadminTypeToggle] = useState(false);
  const genderArry = [
    {
      gen: "Male",
    },
    {
      gen: "Female",
    },
  ];
  const adminArray=[
    {
      type:"Supper Admin"
    },
    {
      type:"Admin"
    },
  ]
  const handleGender=(data)=>{
    setGender(data)
    setGenderToggle(false)
  }
  const handleAdminType=(data)=>{
    setAdminType(data)
    setadminTypeToggle(false)
  }
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />

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
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                Username*
              </div>
              <div className={ca.email_box}>
                <input placeholder="John Doe" className={ca.ip_ele} />
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                Password*
              </div>
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
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                  Country*
                </div>
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
                <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                  Gender*
                </div>
                <div className={ca.select_dender} onClick={() => setGenderToggle(!genderToggle)}>
                  <div className="font-DM">
                  {gender}
                  </div>
                  <div >
                    <Image src={arrowDown} />
                  </div>
                  {genderToggle && (
                    <div className={cen.gender_select_toogle2}>
                      {genderArry.map((data) => {
                        return (
                          <>
                            <div className="text-black cursor-pointer pl-[20px] hover:bg-[#D9D9D9]"
                            onClick={()=>handleGender(data?.gen)}
                            >
                              {data?.gen}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={ca.larg_ele_box}>
              <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                Admin type*
              </div>
              <div className={ca.select_admin_type} onClick={()=>setadminTypeToggle(!adminTypeToggle)}>
                <div className="font-DM">{adminType}</div>
                <div >
                  <Image src={arrowDown} />
                </div>
                {adminTypeToggle && (
                    <div className={cen.gender_select_toogle2}>
                      {adminArray.map((data) => {
                        return (
                          <>
                            <div className="text-black cursor-pointer pl-[20px] hover:bg-[#D9D9D9]"
                            onClick={()=>handleAdminType(data?.type)}
                            >
                              {data?.type}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  )}
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
