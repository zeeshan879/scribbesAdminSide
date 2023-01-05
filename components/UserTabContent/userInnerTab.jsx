import React from "react";
import Home from "../../styles/Home.module.css";
import user from "../../Asstes/style/admin_userTabs.module.css";
import Image from "next/image";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import { useState } from "react";
import {handelaUserTab} from "../../redux/reducers/scribbes"
import { useSelector,useDispatch } from "react-redux";

const UserInnertabs = () => {
  const [acvtive, setActive] = useState(1);
  const dispatch=useDispatch()
  const userTab =useSelector((state)=>state.allGernalFunction.userTab)

  return (
    <>
   <div className={user.tabs_scrol_controler}>
   <div className={user.inner_tabs}>
        <div
          className={userTab == 1 ? user.active_tabs_items : user.tabs_items}
          onClick={() => dispatch(handelaUserTab(1))}
        >
          User Infromation
        </div>
        <div
          className={userTab == 2 ? user.active_tabs_items : user.tabs_items}
          onClick={() => dispatch(handelaUserTab(2))}
        >
          Reports
        </div>
        <div
          className={userTab == 3 ? user.active_tabs_items : user.tabs_items}
          onClick={() => dispatch(handelaUserTab(3))}
        >
          Communities
        </div>
        <div
          className={userTab == 4 ? user.active_tabs_items : user.tabs_items}
          onClick={() => dispatch(handelaUserTab(4))}
        >
          Actions
        </div>
      </div>
   </div>
    </>
  );
};

export default UserInnertabs;
