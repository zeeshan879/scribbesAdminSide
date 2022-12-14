import React from "react";
import at from "../../Asstes/style/admin_tab.module.css";
import Home from "../../styles/Home.module.css";
import BackArrow from "../BackArrow";
import AdminsTable from "./adminsTable";
import HistoryOfAdminAction from "./adminHistory";

const Admin = () => {
  return (
    <>
      <div className={Home.body_container}>
        <BackArrow pageName="Super Admins" />
        <div className={at.content_box}>
          <AdminsTable />
       
            <HistoryOfAdminAction />
        
        </div>
      </div>
    </>
  );
};

export default Admin;
