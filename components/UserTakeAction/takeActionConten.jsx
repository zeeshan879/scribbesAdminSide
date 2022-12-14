import React from "react";
import ta from "../../Asstes/style/user_take_action.module.css";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import Image from "next/image";
import { useRouter } from "next/router";
import UserSuspendModal from "./userSuspendModal"
import {useState} from "react";
const TakeActionConten = () => {
  const router = useRouter();
  const [active,setActive]=useState(false)
  const handleSuspendModal=()=>{
	setActive(!active)
  }
  return (
    <>
      <div className={ta.main_wraper}>
        <div className={ta.header_wraper}>
          <div className="cursor-pointer" onClick={() => router.back()}>
            <Image src={backArrow} />
          </div>
          Take Action
        </div>
        <div className={ta.content_container}>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>Read only</div>
              <div className={ta.action_text}>
                Resrict user from posting, commenting, editing or sharing post
                etc.
              </div>
            </div>
            <div className="flex gap-[44px] items-center">
              <div className={ta.action_text}>5 days, 3h, 5min</div>
              <div className="pt-[12px]">
                <label class="switch1">
                  <input type="checkbox" />
                  <span class="slider1 round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>Restrict from posting</div>
              <div className={ta.action_text}>
                Resrict user from posting anything.
              </div>
            </div>
            <div className="flex gap-[44px] items-center">
              <div className={ta.action_text}></div>
              <div className="pt-[12px]">
                <label class="switch1">
                  <input type="checkbox" />
                  <span class="slider1 round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>
                Restrict from group creation
              </div>
              <div className={ta.action_text}>
                Resrict user from creating any group.
              </div>
            </div>
            <div className="flex gap-[44px] items-center">
              <div className={ta.action_text}>5 days, 3h, 5min</div>
              <div className="pt-[12px]">
                <label class="switch1">
                  <input type="checkbox" />
                  <span class="slider1 round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>
                Restrict from joining groups
              </div>
              <div className={ta.action_text}>
                Resrict user from joining other groups.
              </div>
            </div>
            <div className="flex gap-[44px] items-center">
              <div className={ta.action_text}>5 days, 3h, 5min</div>
              <div className="pt-[12px]">
                <label class="switch1">
                  <input type="checkbox" />
                  <span class="slider1 round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>Verify/Unverify</div>
              <div className={ta.action_text}>
                User will be removed from verified user as well as thier
                verification badge will be removed from thier profile.
              </div>
            </div>
			<div className={ta.Verify_btn}>Verify</div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>Suspend User</div>
              <div className={ta.action_text}>
                Suspend User for a limited time or permanently.
              </div>
            </div>
            <div className={ta.suspend_btn} onClick={()=>handleSuspendModal()}>Suspend User</div>
          </div>
        </div>
      </div>
	  <UserSuspendModal state={active} onClick={handleSuspendModal} />
    </>
  );
};

export default TakeActionConten;
