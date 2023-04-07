import React from "react";
import ar from "../../../Asstes/style/assign_role.module.css";
import Image from "next/image";
import profile from "../../../Asstes/DashboardImages/profile.png";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useEffect } from "react";
import {
  getCurrentAdminData,
  mangeRole,
} from "../../../redux/reducers/adminReducer";
const AssignRoleContent = () => {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState();
  const [userVerification, setUserVerification] = useState();
  const [comunityVerification, setComunityVerification] = useState();
  const [userReports, setuserReports] = useState();
  const [communityReports, setCommunityReports] = useState();
  const [suspendUser, setSuspendUser] = useState();
  const [suspendCommunity, setSuspendCommunity] = useState();
  const [allRoles, setallRoles] = useState();
  const [cancel,setCancel]=useState(false)
  const adminRole_id = router.query.id;
  const dispatch = useDispatch();
  console.log("userVerification", currentRole);
  const ApiCall = async (adminRole_id) => {
    if (adminRole_id) {
      const res = await dispatch(getCurrentAdminData(adminRole_id));
      setCurrentRole(res?.payload?.data);
      setUserVerification(res?.payload?.data.userVerificationRole);
      setComunityVerification(res?.payload?.data.communityVerificationRole);
      setuserReports(res?.payload?.data.userReportsRole);
      setCommunityReports(res?.payload?.data.communityReportsRole);
      setSuspendUser(res?.payload?.data.suspendUserRole);
      setSuspendCommunity(res?.payload?.data.suspendCommunityRole);
      setallRoles(res?.payload?.data.allRoles);
      return res.payload;
    }
  };
  useEffect(() => {
    ApiCall(adminRole_id);
    console.log("useEffect run")
  }, [cancel,adminRole_id]);
  const handleAdminRole = (data) => {
    switch (data) {
      case "userVerification":
        setUserVerification(!userVerification);
        break;
      case "comunityVerification":
        setComunityVerification(!comunityVerification);
        break;
      case "userReports":
        setuserReports(!userReports);
        break;
      case "communityReports":
        setCommunityReports(!communityReports);
        break;
      case "suspendUser":
        setSuspendUser(!suspendUser);
        break;
      case "suspendCommunity":
        setSuspendCommunity(!suspendCommunity);
        break;
      case "allRoles":
        setUserVerification(allRoles == true ? false : true);
        setComunityVerification(allRoles == true ? false : true);
        setuserReports(allRoles == true ? false : true);
        setSuspendUser(allRoles == true ? false : true);
        setSuspendCommunity(allRoles == true ? false : true);
        setCommunityReports(allRoles == true ? false : true);
        setallRoles(!allRoles);
        break;
      default:
        return 0;
    }
  };
  const handleChnageAdminRole = () => {
    const obj = {
      userVerificationRole: userVerification,
      communityVerificationRole: comunityVerification,
      userReportsRole: userReports,
      communityReportsRole: communityReports,
      suspendUserRole: suspendUser,
      suspendCommunityRole: suspendCommunity,
      allRoles: allRoles,
    };
    dispatch(mangeRole({ data: obj, userId: adminRole_id }));
    Swal.fire(
      'Success!',
      'Admin roles has been chnage successfully!',
      'success'
    )
  };
  const handleCancel=()=>{
    setCancel(!cancel)
  }
  return (
    <>
      <div className={ar.assign_role_main_page}>
        <div className={ar.prfile_box}>
          <div>
            <Image src={profile} />
          </div>
          <div className="font-DM font-bold text-[18px] lg:text-[20px]">
      {currentRole?.userName}
            <div className={ar.admin_btn}>{
              currentRole?.adminType? currentRole?.adminType:"null"
            }</div>
          </div>
          <div className={ar.view_profile_btn}>View Profile</div>
        </div>

        <div className={ar.profile_action_box}>
          <div className="flex flex-col gap-[25px]">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  User Verifications
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to verify users
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={userVerification}
                    name="uverification"
                    onChange={() => handleAdminRole("userVerification")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  Community Verifications
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to verify community
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={comunityVerification}
                    onChange={() => handleAdminRole("comunityVerification")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px]">
                  User Reports
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to handle user reports
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={userReports}
                    onChange={() => handleAdminRole("userReports")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  Community Reports
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to handle community reports
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={communityReports}
                    onChange={() => handleAdminRole("communityReports")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  Suspend Users
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to suspend users
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={suspendUser}
                    onChange={() => handleAdminRole("suspendUser")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  Suspend Communities
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to suspend communities
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={suspendCommunity}
                    onChange={() => handleAdminRole("suspendCommunity")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold text-[18px] lg:text-[20px]">
                  All Roles
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to verify and suspend users
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    checked={allRoles}
                    onChange={() => handleAdminRole("allRoles")}
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end pt-[50px] lg:pt-[100px]">
            <div className="flex flex-col md:flex-row items-center gap-[10px]">
              <div className={ar.canecl_btn} onClick={()=>handleCancel()}>Cancel</div>
              <div
                className={ar.change_btn}
                onClick={() => handleChnageAdminRole()}
              >
                Change Role
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignRoleContent;
