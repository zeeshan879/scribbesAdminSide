import React from "react";
import nf from "../../../Asstes/style/notification_form.module.css";

const NotificationActionForm = () => {
  return (
    <>
      <div className={nf.main_container}>
        <div className={nf.noti_box}>
          <div className="text-[20px] font-grotesk font-bold">Push Notifications</div>
          <div className="pt-[12px]">
            <label class="switch1">
              <input type="checkbox" checked />
              <span class="slider1 round"></span>
            </label>
          </div>
        </div>
        <div className={nf.noti_box2}>
        <div>
		<div className="text-[20px] font-DM font-normal">Comments</div>
		<div className="text-base font-normal font-DM text-[#BCBCBC]">Allow people to comment on your post and replies to comments.</div>
		</div>
          <div className="pt-[12px]">
            <label class="switch1">
              <input type="checkbox" checked />
              <span class="slider1 round"></span>
            </label>
          </div>
        </div>
        <div className={nf.noti_box3}>
        <div>
		<div className="text-[20px] font-DM font-normal">Reminders</div>
		<div className="text-base font-normal font-DM text-[#BCBCBC]">These are notifications to remined you of updates you might have missed.</div>
		</div>
          <div className="pt-[12px]">
            <label class="switch1">
              <input type="checkbox" />
              <span class="slider1 round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationActionForm;
