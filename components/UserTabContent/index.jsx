import React from "react";
import Home from "../../styles/Home.module.css";
import user from "../../Asstes/style/admin_userTabs.module.css";
import Image from "next/image";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import checkMark from "../../Asstes/DashboardImages/checkMark.png";
import profile from "../../Asstes/DashboardImages/profile.png";
import userLink from "../../Asstes/DashboardImages/userLink.png";
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png";
import Header from "../Header";
import UserInnertabs from "../UserTabContent/userInnerTab";
import UserInfoForm from "../UserTabContent/userInfoForm";
import UserReportTab from "../UserTabContent/userReportTab";
import { useSelector, useDispatch } from "react-redux";
import UserCommunityTable from "../UserTabContent/communitiesTable";
import { useState } from "react";
import UserAction from "./userAction";
import UserPostActivity from "../UserTabContent/userPostActivity";
import { handelaUserTab } from "../../redux/reducers/scribbes";
import { userActivity } from "../../Help/userActivityPost";
import Link from "next/link";
import { useRouter } from 'next/router'

const UserInformation = () => {
  const [activeToggle, setActiveToggle] = useState(false);
  const userTab = useSelector((state) => state.allGernalFunction.userTab);
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <>
      {userTab != 5 && (
        <div className={user.header_box}>
          <div className="flex gap-[44px] items-center">
            <div className="cursor-pointer" onClick={() => router.back()}>
              <Image src={backArrow} />
            </div>
            <div>
              <UserInnertabs />
            </div>
          </div>
          <div className={user.header_right}>
            {userTab == 4 ? (
              <div
                className={user.all_activity}
                onClick={() => setActiveToggle(!activeToggle)}
              >
                All Activity
                <Image src={profileArrow} />
                {activeToggle && (
                  <div
                    className={user.active_toogle}
                  >
                    <div className={user.active_toggle_item}>All Activity</div>
                    <Link
                      href={{
                        pathname: "/user-activity",
                        query: { keyword: 'Post' }, // the data
                      }}
                    >
             
                      <div className={user.active_toggle_item}>Posts</div>
                    </Link>
                    <Link
                      href={{
                        pathname: "/user-activity",
                        query: { keyword: 'Comments' }, // the data
                      }}
                    >
                    <div className={user.active_toggle_item}>Comments</div>
                    </Link>
                    <Link
                      href={{
                        pathname: "/user-activity",
                        query: { keyword: 'Actions' }, // the data
                      }}
                    >
                    <div className={user.active_toggle_item}>Actions</div>
                    </Link>
                    <Link
                      href={{
                        pathname: "/user-activity",
                        query: { keyword: 'Searches' }, // the data
                      }}
                    >
                    <div className={user.active_toggle_item}>Searches</div>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className={user.appeal_btn}>User Appeal</div>
            )}
            <Link href="/take-action">
            <div className={user.appeal_btn}>Take Action</div>
            </Link>
            <div className="cursor-pointer">
              <Image src={userLink} />
            </div>
          </div>
        </div>
      )}
      <div>
        {userTab == 1 ? (
          <UserInfoForm />
        ) : userTab == 2 ? (
          <div className={Home.user_report_div}>
            <UserReportTab />
          </div>
        ) : userTab == 3 ? (
          <div className={Home.user_report_div}>
            <UserCommunityTable />
          </div>
        ) : userTab == 4 ? (
          <UserAction />
      
       
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UserInformation;
