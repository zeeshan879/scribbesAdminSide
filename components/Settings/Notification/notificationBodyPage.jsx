import React from "react";
import BackArrow from "../../BackArrow";

import NotificationActionForm from "./notificationActionForm"

const NotificationBodySec = () => {
  const pageInfo={tile:"Notifications",subtitle:""}
  return (
    <>
      <div className="body_container">
<BackArrow pageName={pageInfo} />
     <NotificationActionForm/>
      </div>
    </>
  );
};

export default NotificationBodySec;
