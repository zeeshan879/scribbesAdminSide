import React from "react";
import ps from "../../../Asstes/style/privecy_safety.module.css";

const PrivcyContent = () => {
  return (
    <>
      <div className={ps.main_wrapper}>
        <div className="px-[24px]">
          <div className="text-[20px] font-grotesk font-bold">
            Two-factor authentification
          </div>
          <div className="max-w-[800px] text-base font-DM text-[#BCBCBC] leading-[20px]">
            Help protect your account from unauthorized access by requiring a
            second authentication method in addition to your Scribbes password.
            You can choose a text message, authentication app, or security key.
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <div className="text-[20px] font-Dm font-normal">
                Text message
              </div>
              <div className="max-w-[850px] text-base font-DM text-[#BCBCBC] leading-[20px]">
                Use your mobile phone to receive a text message with an
                authentication code to enter when you log in to Scribbes
              </div>
            </div>
            <div>
              <label class="container2">
                <input type="checkbox" />
                <span class="checkmark2"></span>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <div className="text-[20px] font-Dm font-normal">Email</div>
              <div className="max-w-[850px] text-base font-DM text-[#BCBCBC] leading-[20px]">
                Use your email to receive a text message with an authentication
                code to enter when you log in to Scribbes
              </div>
            </div>
            <div>
              <label class="container2">
                <input type="checkbox" checked />
                <span class="checkmark2"></span>
              </label>
            </div>
          </div>
        </div>
        <div className={ps.form_seprator}></div>
        <div className="px-[24px]">
          <div className="text-[20px] font-grotesk font-bold">
            Your Activity
          </div>
          <div className="max-w-[800px] text-base font-DM text-[#BCBCBC] leading-[20px]">
            Who can see your post?
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <div className="text-[20px] font-Dm font-normal">Admins only</div>
            </div>
            <div>
              <label class="container2">
                <input type="checkbox" />
                <span class="checkmark2"></span>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div>
              <div className="text-[20px] font-Dm font-normal">Users only</div>
            </div>
            <div>
              <label class="container2">
                <input type="checkbox" />
                <span class="checkmark2"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivcyContent;
