import React from "react";

import RolesToAdminTableFilter from "./roleToAdminFilter"
import RolesToAdminTable from "./rolesAdminTable"
import BackArrow from "../../BackArrow";


const RolesToAdminBodySec = () => {
  const pageInfo={tile:"Roles to Admin",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className="flex justify-between pt-5 lg:pt-[65px] ">
          <div>

          </div>
          <div>
            <RolesToAdminTableFilter />
          </div>
        </div>
        <div className="mt-[0px] lg:mt-[25px] w-full">
          <RolesToAdminTable />
        </div>
      </div>
    </>
  );
};

export default RolesToAdminBodySec;
