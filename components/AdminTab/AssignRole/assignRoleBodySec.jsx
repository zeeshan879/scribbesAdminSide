import React from "react";

import AssignRoleContent from "./assignRoleContent"
import BackArrow from "../../BackArrow";


const AssignRoleBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="Assign Roles" />
     
        <div className="mt-[25px] w-full">
          <AssignRoleContent />
        </div>
      </div>
    </>
  );
};

export default AssignRoleBodySec;
