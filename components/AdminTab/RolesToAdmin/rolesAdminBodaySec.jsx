import React from "react";

import RolesToAdminTableFilter from "./roleToAdminFilter"
import RolesToAdminTable from "./rolesAdminTable"
import BackArrow from "../../BackArrow";


const RolesToAdminBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Roles to Admin" />
        <div className="flex justify-between pt-[65px] ">
          <div>

          </div>
          <div>
            <RolesToAdminTableFilter />
          </div>
        </div>
        <div className="mt-[25px] w-full">
          <RolesToAdminTable />
        </div>
      </div>
    </>
  );
};

export default RolesToAdminBodySec;
