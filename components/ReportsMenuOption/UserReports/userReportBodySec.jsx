import React from "react";

import AllReportsTableFilter from "../allReportsFillter";
import AllReportsTable from "../allReportsTable";
import BackArrow from "../../BackArrow";
import AllUsersFilters from "../../AllUsers/allUsersFilters"

const UserReportsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <BackArrow pageName="User Reports" />
        <div className="flex justify-between pt-[65px] ">
          <div></div>
          <div>
            <AllUsersFilters />
          </div>
        </div>
        <div className="mt-[15px] lg:mt-[25px] w-full">
          <AllReportsTable />
		  
        </div>
      </div>
    </>
  );
};

export default UserReportsBodySec;
