import React, { useEffect } from "react";
import ta from "../../Asstes/style/user_take_action.module.css";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import Image from "next/image";
import { useRouter } from "next/router";
import UserSuspendModal from "./userSuspendModal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  restricUser,
  getCurrentUserData,
} from "../../redux/reducers/userReducer";
const TakeActionConten = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const currentUser = useSelector((state) => state.admin.currentUser);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [actionUser, setActionUser] = useState();
  const [suportState, setSupportState] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user_id = router.query.id;
  const [restrcit, setRestrict] = useState();

  console.log("actionUser===>", actionUser);
  const [read, setRead] = useState(false);

  useEffect(() => {
    async () => {
      const res = await dispatch(getCurrentUserData(user_id));
      console.log("res===========>",res)
      setActionUser(res);
    };
  }, []);
  useEffect(() => {
    const currentUserData = allUsers?.data?.filter(
      (data) => data?.id == user_id
    )[0];
    setRestrict(currentUserData);
  }, []);
  const handleReadOnly = () => {
    if (read == false) {
      setRead(true);
    } else {
      setRead(false);
    }
    const readData = {
      reading: read,
    };
    dispatch(restricUser({ data: readData, userId: user_id }));
  };
  console.log("read======>", read);

  const handleVerifyModal = () => {
    setSupportState(true);
    setActive2(!active2);
  };
  const handleSuspendModal = () => {
    setSupportState(false);
    setActive(!active);
  };
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
                  <input
                    type="checkbox"
                    checked={read}
                    onChange={() => handleReadOnly()}
                  />
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
            <div
              className={ta.Verify_btn}
              onClick={() => handleVerifyModal(false)}
            >
              Verify
            </div>
          </div>
          <div className={ta.action_items}>
            <div>
              <div className={ta.action_heading}>Suspend User</div>
              <div className={ta.action_text}>
                Suspend User for a limited time or permanently.
              </div>
            </div>
            <div
              className={ta.suspend_btn}
              onClick={() => handleSuspendModal(true)}
            >
              Suspend User
            </div>
          </div>
        </div>
      </div>
      <UserSuspendModal
        state={active}
        state2={suportState}
        onClick={() => handleSuspendModal()}
      />
      <UserSuspendModal
        state={active2}
        state2={suportState}
        onClick={() => handleVerifyModal()}
      />
    </>
  );
};

export default TakeActionConten;
