import React from "react";
import { useState } from "react";
import au from "../../Asstes/style/allUser.module.css";

const AllCommunitiesTabs = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className={au.tabs_wrper}>
        <div
          className={active === 1 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(1)}
        >
         All Communities
        </div>
        <div
          className={active === 2 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(2)}
        >
   Verified
        </div>
        <div
          className={active === 3 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(3)}
        >
Unverified
        </div>
        <div
          className={active === 4 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(4)}
        >
Scribbes Communities
        </div>
        <div
          className={active === 5 ? au.active_tabs_item : au.tabs_item}
          onClick={() => setActive(5)}
        >
 Blocked
        </div>

      </div>
    </>
  );
};

export default AllCommunitiesTabs;
