import React from "react";
import us from "../../Asstes/style/user_activity.module.css";
import backArrow from "../../Asstes/DashboardImages/backArrow.png";
import profile2 from "../../Asstes/DashboardImages/profile2.png";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/router";

const userActivity = [
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    type: "Post",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "shared a post.",
    time: "2:15 Pm",
    type: "Post",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "posted a picture.",
    time: "2:15 Pm",
    type: "Post",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    des: "Having fun in Dubai :)",
    type: "Post",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    type: "Post",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    type: "Comment",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    type: "Comment",
  },
  {
    icon: profile2,
    date: "15 Oct 2022",
    name: "John Doe ",
    action: "changed his profile picture.",
    time: "2:15 Pm",
    type: "Comment",
  },
];
const UserPostActivity = () => {
  const router = useRouter();
  
  const data = router.query;


  return (
    <>
      <div className={us.main_container}>
        <div className={us.back_action}>
          <div className="cursor-pointer" onClick={() => router.back()}>
            <Image src={backArrow} />
          </div>
          {data.keyword}
        </div>
        <div className={us.activity_content}>
          <div className={us.select_all}>
            <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
              <label class="container1">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div> Select All</div>
            </div>
            <div>
              <RiDeleteBin6Line className={us.delt_icon} />
            </div>
          </div>
          <div className={us.activity_post}>
            <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
              <label class="container1">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div> 15 Oct 2022</div>
            </div>
            <div className={us.activity_innerbox}>
              <div className="flex gap-5 items-center">
                <Image src={profile2} />
                <div className="flex items-center gap-3">
                  <div className="font-DM text-base font-bold">
                    John Doe{" "}
                    <span className="font-normal">
                      changed his profile picture
                    </span>
                  </div>
                  <span className="font-normal text-[#BCBCBC]">2:15 Pm</span>
                </div>
              </div>
              <div>
                <RiDeleteBin6Line className={us.delt_icon} />
              </div>
            </div>
          </div>
          <div className={us.activity_grp_post}>
            <div className={us.activity_post_g}>
              <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
                <label class="container1">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <div> 14 Oct 2022</div>
              </div>
              <div className={us.activity_innerbox}>
                <div className="flex gap-5 items-center">
                  <Image src={profile2} />
                  <div className="flex items-center gap-3">
                    <div className="font-DM text-base font-bold">
                      John Doe{" "}
                      <span className="font-normal">shared a post.</span>
                    </div>
                    <span className="font-normal text-[#BCBCBC]">2:15 Pm</span>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className={us.delt_icon} />
                </div>
              </div>
            </div>
            <div className={us.activity_post_g2}>
              <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
                <label class="container1">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className={us.activity_innerbox_g2}>
                <div className="flex gap-5 items-center">
                  <Image src={profile2} />
                  <div className="flex items-center gap-3">
                    <div className="font-DM text-base font-bold">
                      John Doe{" "}
                      <span className="font-normal">posted a picture.</span>.
                    </div>
                    <span className="font-normal text-[#BCBCBC]">2:15 Pm</span>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className={us.delt_icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={us.activity_post}>
            <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
              <label class="container1">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div> 13 Oct 2022</div>
            </div>
            <div className={us.activity_innerbox}>
              <div className="flex gap-5 items-center">
                <Image src={profile2} />
                <div className="flex items-center gap-3">
                  <div className="font-DM text-base font-bold">
                    John Doe{" "}
                    <span className="font-normal">
                      changed his profile picture.
                    </span>
                  </div>
                  <span className="font-normal text-[#BCBCBC]">2:15 Pm</span>
                </div>
              </div>
              <div>
                <RiDeleteBin6Line className={us.delt_icon} />
              </div>
            </div>
          </div>
          <div className={us.activity_post}>
            <div className="flex gap-[20px] text-[20px] font-bold font-DM items-center">
              <label class="container1">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div> Select All</div>
            </div>
            <div className={us.activity_innerbox}>
              <div className="flex gap-5 items-center">
                <Image src={profile2} />
                <div>
                  <div className="flex items-center gap-3">
                    <div className="font-DM text-base font-bold">
                      John Doe{" "}
                      <span className="font-normal">updated his status.</span>
                    </div>
                    <span className="font-normal text-[#BCBCBC]">2:15 Pm</span>
                  </div>
                  <div className="text-base text-[#BCBCBC] font-DM font-normal">
                    Having fun in Dubai :)
                  </div>
                </div>
              </div>
              <div>
                <RiDeleteBin6Line className={us.delt_icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPostActivity;
