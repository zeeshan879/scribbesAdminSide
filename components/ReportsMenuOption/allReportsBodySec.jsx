import React from "react";
import AllReportsCounts from "./allReportsCounts"
import VerificationRequestTabs from "./allReportsTabs"
import AllUsersFilters from "../AllUsers/allUsersFilters"
import AllReportsTable from "./allReportsTable"
import au from "../../Asstes/style/allUser.module.css"


const AllReportsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <AllReportsCounts />
        <div className={au.all_reports_fillters}>
          <div>
            <VerificationRequestTabs />
          </div>
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

export default AllReportsBodySec;
