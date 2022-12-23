import React from "react";
import AllReportsCounts from "./allReportsCounts"
import VerificationRequestTabs from "./allReportsTabs"
import AllReportsTableFilter from "./allReportsFillter"
import AllReportsTable from "./allReportsTable"


const AllReportsBodySec = () => {
  return (
    <>
      <div className="body_container">
        <AllReportsCounts />
        <div className="flex justify-between pt-[65px] ">
          <div>
            <VerificationRequestTabs />
          </div>
          <div>
            <AllReportsTableFilter />
          </div>
        </div>
        <div className="mt-[25px] w-full">
          <AllReportsTable />
        </div>
      </div>
    </>
  );
};

export default AllReportsBodySec;
