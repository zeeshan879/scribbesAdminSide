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

  const [read, setRead] = useState(false);

  console.log("user_id", user_id);
  const ApiCall = async (userId) => {
    if (userId) {
      const res = await dispatch(getCurrentUserData(user_id));
      setActionUser(res?.payload?.data);
      return res.payload;
    }
  };
  useEffect(() => {
    ApiCall(user_id);
  }, [user_id]);
  useEffect(() => {
    const currentUserData = allUsers?.data?.filter(
      (data) => data?.id == user_id
    )[0];
    setRestrict(currentUserData);
  }, []);

  const handleUserAction = async (obj) => {
    const res = await dispatch(restricUser({ data: obj, userId: user_id }));
    if (res.payload) {
      ApiCall(user_id);
    }
  };

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
                  {console.log("actionUser?.reading", actionUser?.reading)}
                  <input
                    type="checkbox"
                    checked={actionUser?.reading}
                    onChange={() =>
                      handleUserAction({ reading: !actionUser?.reading })
                    }
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
                  <input
                    type="checkbox"
                    checked={actionUser?.posting}
                    onChange={() =>
                      handleUserAction({ posting: !actionUser?.posting })
                    }
                  />
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
                  <input
                    type="checkbox"
                    checked={actionUser?.communityCreation}
                    onChange={() =>
                      handleUserAction({
                        communityCreation: !actionUser?.communityCreation,
                      })
                    }
                  />
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
                  <input
                    type="checkbox"
                    checked={actionUser?.joinCommunity}
                    onChange={() =>
                      handleUserAction({
                        joinCommunity: !actionUser?.joinCommunity,
                      })
                    }
                  />
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
