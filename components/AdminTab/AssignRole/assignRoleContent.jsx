import React from "react";
import ar from "../../../Asstes/style/assign_role.module.css";
import Image from "next/image";
import profile from "../../../Asstes/DashboardImages/profile.png";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentAdminData,mangeRole } from "../../../redux/reducers/adminReducer";
const AssignRoleContent = () => {
  const router = useRouter();
  const [assignRole, setAssignRole] = useState();
  const adminRole_id = router.query.id;
  const dispatch = useDispatch();

  const ApiCall = async (adminRole_id) => {
    if (adminRole_id) {
      const res = await dispatch(getCurrentAdminData(adminRole_id));
      setAssignRole(res?.payload?.data);
      return res.payload;
    }
  };
  useEffect(() => {
    ApiCall(adminRole_id);
  }, [adminRole_id]);


  const handleAdminRole = async (obj) => {

    console.log("obj===========>", obj);
    // const res = await dispatch(mangeRole({ data: obj, userId: adminRole_id }));
    // if (res.payload) {
    //   ApiCall(adminRole_id);
    // }
    console.log("assignRole?.userVerificationRole",assignRole?.userVerificationRole)
  };

  return (
    <>
      <div className={ar.assign_role_main_page}>
        <div className={ar.prfile_box}>
          <div>
            <Image src={profile} />
          </div>
          <div className="font-DM font-bold text-[18px] lg:text-[20px]">
            John Doe
            <div className={ar.admin_btn}>Admin</div>
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
                  {
                    console.log("assignRole?.userVerificationRole",assignRole?.userVerificationRole)
                  }
                  <input
                    type="checkbox"
                    checked={assignRole?.userVerificationRole}
                    onChange={() =>
                      handleAdminRole({
                        userVerificationRole: !assignRole?.userVerificationRole,
                      })
                    }
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
                    // checked={assignRole?.communityVerificationRole}
                    // onChange={() =>
                    //   handleAdminRole({
                    //     communityVerificationRole:
                    //       !assignRole?.communityVerificationRole,
                    //   })
                    // }
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold ">User Reports</div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to handle user reports
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input
                    type="checkbox"
                    // checked={assignRole?.userReportsRole}
                    // onChange={() =>
                    //   handleAdminRole({
                    //     userReportsRole: !assignRole?.userReportsRole,
                    //   })
                    // }
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
                    // checked={assignRole?.communityReportsRole}
                    // onChange={() =>
                    //   handleAdminRole({
                    //     communityReportsRole: !assignRole?.communityReportsRole,
                    //   })
                    // }
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
                    // checked={assignRole?.suspendUserRole}
                    // onChange={() =>
                    //   handleAdminRole({
                    //     suspendUserRole: !assignRole?.suspendUserRole,
                    //   })
                    // }
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
                    // checked={assignRole?.suspendCommunityRole}
                    // onChange={() =>
                    //   handleAdminRole({
                    //     suspendCommunityRole: !assignRole?.suspendCommunityRole,
                    //   })
                    // }
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
                    // checked={assignRole?.allRoles}
                    // onChange={() =>
                    //   handleAdminRole(
                    //     assignRole?.allRoles
                    //       ? {
                    //         userVerificationRole: true,
                    //           communityVerificationRole: true,
                    //           suspendCommunityRole: true,
                    //           suspendUserRole: true,
                    //           allRoles: true,
                    //           communityReportsRole: true,
                    //           userReportsRole: true,
                    //         }
                    //       : {
                    //           suspendCommunityRole: false,
                    //           suspendUserRole: false,
                    //           allRoles: false,
                    //           communityVerificationRole: false,
                    //           communityReportsRole: false,
                    //           userReportsRole: false,
                    //           userVerificationRole: false,
                    //         }
                    //   )
                    // }
                  />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end pt-[50px] lg:pt-[100px]">
            <div className="flex flex-col md:flex-row items-center gap-[10px]">
              <div className={ar.canecl_btn}>Cancel</div>
              <div className={ar.change_btn}>Change Role</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignRoleContent;
