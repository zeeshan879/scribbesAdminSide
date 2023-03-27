import React, { useState } from "react";
import Image from "next/image";
import loginBanner from "../../Asstes/DashboardImages/loginBanner.png";
import google from "../../Asstes/DashboardImages/google.png";
import fb from "../../Asstes/DashboardImages/fb.png";
import apple from "../../Asstes/DashboardImages/apple.png";
import Head from "next/head";
import Link from "next/link";
import * as yup from "yup";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { adminLogin } from "../../redux/reducers/adminReducer";
import { useDispatch } from "react-redux";
import Router from "next/router";


const Login = () => {
  const [remember, setRember] = useState(false);
  const disptach = useDispatch();

  const showImage = {
    backgroundImage: `url(${loginBanner.src})`,
    backgroundRepeat: "no-repeat",
  };
  const defaultValues = {
    email: "",
    password: "",
  };
  const UserValidateSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required"),
    password: yup.string().required("Please enter your password"),
  });
  const handleSubmit = async (value, { resetForm }) => {
    const formData = new FormData();
    formData.append("email", value.email);
    formData.append("password", value.password);
    const adminData = {
      email: value.email,
      password: value.password,
    };
    const loginRes = await disptach(adminLogin(adminData));
    console.log("ali===", loginRes);
    if (loginRes.payload.status===200) {
      Router.push("/dashboard");
    }
  };

  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/space-mono"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/space-grotesk"
          rel="stylesheet"
        ></link>
        <link href="http://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
      </Head>
      <div className="flex justify-center   md:flex-row md:justify-between  min-h-[100vh] ">
        <div
          className="hidden  bg-scroll md:block w-[100%] w-[878px] mt-[30px]  md:mt-[0px]  h-[450px]  bg-center sm:h-[100vh] relative bg-[100%]"
          style={showImage}
        >
          <div className="absolute text-[32px] lg:text-[44px]  xl:text-[34px] 2xl:text-[64px] font-bold text-white top-[20px] sm:top-[100px] lg:top-[100px]  xl:top-[150px] left-[50px] lg:left-[50px]  xl:left-[80px] font-sans tracking-[-0.085em] leading-[95px]">
            Scribbes
          </div>
          <div
            className="absolute text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[60px] font-bold pr-8 text-white bottom-[100px]  sm:bottom-[88px] flex left-[11%] max-w-[669px] leading-[41px] lg:leading-[51px] xl:leading-[71px] 2xl:leading-[91px]  tracking-[-0.085em]"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            A growing community of writers, thinkers and like-minded people.
          </div>
        </div>
        <Formik
          initialValues={defaultValues}
          validationSchema={UserValidateSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex justify-center w-full px-[10px]   md:w-[700px] xl:w-[950px] 2xl:w-[1050px] pt-[40px]   sm:pt-[50px] lg:pt-[40px] xl:pt-[50px] 2xl:pt-[120px]">
                <div className="w-[350px] xl:w-[400px] 2xl:w-[472px] ">
                  <div className="text-[30px] text-center sm:text-start sm:text-[32px]  xl:text-[32px] 2xl:text-[42px] font-bold text-black font-grotesk">
                  Admin  Login
                  </div>
                  <div className="pt-[15px] xl:pt-[24px] 2xl:pt-[54px]">
                    <div className="text-black font-medium text-[16px] xl:text-[18px] 2xl:text-[20px] font-DM">
                      Email<sup className="text-[#000580]">*</sup>
                    </div>
                    <div className="border-[2px] border-[#BCBCBC] h-[50px] xl:h-[58px] 2xl:h-[63px]  w-full mt-[7px] xl:mt-[4px] 2xl:mt-[7px] rounded-[41px]">
                      <Field
                        placeholder="email@website.com"
                        name="email"
                        className="h-full rounded-[41px] w-[100%] pl-[25px] sm:pl-[35px] border-none outline-none text-[#BCBCBC]"
                      />
                    </div>
                    <div className="text-[red] text-base pt-1">
                      <ErrorMessage name="email" />
                    </div>
                    <div className="text-black font-medium text-[16px] xl:text-[18px] 2xl:text-[20px] mt-[10px] xl:mt-[16px] 2xl:mt-[21px] font-DM">
                      Password<sup className="text-[#000580]">*</sup>
                    </div>
                    <div className="border-[2px] border-[#BCBCBC] h-[50px] xl:h-[58px] 2xl:h-[63px]  w-full mt-[7px] xl:mt-[4px] 2xl:mt-[7px] rounded-[41px]">
                      <Field
                        placeholder="Password"
                        type="Password"
                        name="password"
                        className="h-full rounded-[41px] w-[100%] pl-[25px] sm:pl-[35px] border-none outline-none text-[#BCBCBC]"
                      />
                    </div>
                    <div className="text-[red] text-base pt-1">
                      <ErrorMessage name="Password" />
                    </div>
                    <div className="flex justify-between items-center mt-[31px] xl:mt-[20px] 2xl:mt-[31px]">
                      <div className="flex gap-[11px] items-center text-[16px] font-medium font-DM">
                        <input
                          type="checkbox"
                          class="accent-[#1CAC19] rounded-[6px] h-[20px] w-[20px]"
                        />{" "}
                        Remember me
                      </div>
                      <div className="text-[14px] sm:text-[16px] xl:text-[17px] 2xl:text-[18px] font-medium text-[#1CAC19] cursor-pointer font-DM">
                        Forget Password?
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="h-[50px] xl:h-[58px] 2xl:h-[63px]   w-full mt-[31px] xl:mt-[20px] 2xl:mt-[31px] font-DM rounded-[41px] bg-[#1CAC19] flex justify-center items-center cursor-pointer text-white text-[16px] sm:text-[18px] 2xl:text-[20px] font-bold"
                    >
                      Login
                    </button>
                    <div className="flex justify-between items-center mt-[29px] xl:mt-[20px] 2xl:mt-[29px]">
                      <div className="border-[2px] border-[#BCBCBC] w-[40%]  2xl:w-[205px]"></div>
                      <div className="text-[#BCBCBC] text-[16px]">or</div>
                      <div className="border-[2px] border-[#BCBCBC] w-[40%]  2xl:w-[205px]"></div>
                    </div>
                    <div className="mt-[40px] xl:mt-[30px] 2xl:mt-[57px] flex justify-evenly items-center">
                      <div className="flex justify-center items-center h-[45px] lg:h-[40px] 2xl:h-[60px] w-[45px] lg:w-[40px] 2xl:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={google} />
                      </div>
                      <div className="flex justify-center items-center h-[45px] lg:h-[40px] 2xl:h-[60px] w-[45px] lg:w-[40px] 2xl:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={fb} />
                      </div>
                      <div className="flex justify-center items-center h-[45px] lg:h-[40px] 2xl:h-[60px] w-[45px] lg:w-[40px] 2xl:w-[60px] rounded-[41px] shadow-social cursor-pointer">
                        <Image src={apple} />
                      </div>
                    </div>
 
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
