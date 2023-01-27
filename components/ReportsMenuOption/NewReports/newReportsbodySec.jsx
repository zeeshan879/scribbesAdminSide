import React from "react";

import AllReportsTableFilter from "../allReportsFillter"
import AllReportsTable from "../allReportsTable"
import BackArrow from "../../BackArrow";
import AllUsersFilters from "../../AllUsers/allUsersFilters"


const NewReportsBodySec = () => {
  const pageInfo={tile:"New Reports",subtitle:""}
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <div className="flex justify-between pt-[65px] ">
          <div>

          </div>
          <div>
            <AllUsersFilters />
          </div>
        </div>
        <div className=" mt-4 lg:mt-[25px] w-full">
          <AllReportsTable />
        </div>
      </div>
    </>
  );
};

export default NewReportsBodySec;
