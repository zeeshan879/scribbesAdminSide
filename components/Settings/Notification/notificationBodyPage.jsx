import React from "react";
import BackArrow from "../../BackArrow";

import NotificationActionForm from "./notificationActionForm"

const NotificationBodySec = () => {
  return (
    <>
      <div className="body_container">
<BackArrow pageName="Notifications" />
     <NotificationActionForm/>
      </div>
    </>
  );
};

export default NotificationBodySec;
