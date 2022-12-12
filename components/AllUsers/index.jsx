import React from "react";
import au from "../../Asstes/style/allUser.module.css";
import UserCounterInfo from "../userInfo";
import AllUsersTabs from "../AllUsers/allUsersTabs";
import AllUsersFilters from "../AllUsers/allUsersFilters";
import AllUserTable from "../AllUsers/allUserTable";

const AllUsers = () => {
  return (
    <>
      <div className={au.main_container}>
        <UserCounterInfo />
        <div className={au.tabs_filter_box}>
          <div>
            <AllUsersTabs />
          </div>
          <div>
            <AllUsersFilters />
          </div>
        </div>
        <div>
          <AllUserTable />
        </div>
      </div>
    </>
  );
};

export default AllUsers;
