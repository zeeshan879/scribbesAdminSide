import React from "react";
import ar from "../../../Asstes/style/assign_role.module.css";
import Image from "next/image";
import profile from "../../../Asstes/DashboardImages/profile.png";
const AssignRoleContent = () => {
  const handleAdminRole = (id) => {
    const role = {
      userVerificationRole: true,
    };
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to assign role!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, assign it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Assign!',
          'User verification role has been assign.',
          'success'
        ).then(()=>{
          dispatch(mangeRole({ userId: id, data: role }));
        })
      }
    })

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
                  <input type="checkbox" />
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
                  <input type="checkbox" />
                  <span class="checkmarkAssigneRole"></span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-grotesk font-bold ">
                  User Reports
                </div>
                <div className="text-base font-DM font-normal pt-[10px]">
                  Assign Admin to handle user reports
                </div>
              </div>
              <div>
                <label class="assigneRole">
                  <input type="checkbox" />
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
                  <input type="checkbox" />
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
                  <input type="checkbox" />
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
                  <input type="checkbox" checked />
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
                  <input type="checkbox" />
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
