import React from "react";

import AssignRoleContent from "./assignRoleContent"
import BackArrow from "../../BackArrow";


const AssignRoleBodySec = () => {
  const pageInfo={tile:"Assign Roles",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
     
        <div className="mt-[25px] w-full">
          <AssignRoleContent />
        </div>
      </div>
    </>
  );
};

export default AssignRoleBodySec;
