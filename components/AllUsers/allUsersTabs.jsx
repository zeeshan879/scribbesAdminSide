import React from "react";
import { useState } from "react";
import au from "../../Asstes/style/allUser.module.css";

const AllUsersTabs = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={au.tabs_wrper}>
        <div
          className={active === 1 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(1)}
        >
          All Users
        </div>
        <div
          className={active === 2 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(2)}
        >
          Active Users
        </div>
        <div
          className={active === 3 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(3)}
        >
          Blocked Users
        </div>
        <div
          className={active === 4 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(4)}
        >
          Verified
        </div>
        <div
          className={active === 5 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(5)}
        >
          Unverified
        </div>
        <div
          className={active === 6 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(6)}
        >
          Suspended
        </div>
      </div>
    </>
  );
};

export default AllUsersTabs;
