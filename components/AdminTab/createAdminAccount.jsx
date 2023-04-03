import React, { useState, useRef } from "react";
import ca from "../../Asstes/style/create_admin_account.module.css";
import cen from "../../Asstes/style/home_centerView.module.css";
import BackArrow from "../BackArrow";
import ReactFlagsSelect from "react-flags-select";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { addAdmin } from "../../redux/reducers/adminReducer";
import { useDispatch, useSelector } from "react-redux";
const CreateAdminAccount = () => {
  const pageInfo = { tile: "Add Admin", subtitle: "" };
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    country: "",
    gender: "",
    adminType: "",
   
  };
  const UserValidateSchema = yup.object().shape({
    firstName: yup.string().required("This field is require*!"),
    lastName: yup.string().required("This field is require*!"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("This field is required*!"),
      userName: yup.string().required("This field is require*!"),
    password: yup.string().required("This field is require*!"),
    country: yup.string().required("This field is require*!"),
    gender: yup.string().required("This field is require*!").nullable(),
    adminType: yup.string().required("This field is require*!").nullable(),

  });
  const handleSubmit = (value, { resetForm }) => {
    dispatch(addAdmin(value));
    resetForm({ value: "" });
  };
  console.log("selected====>", selected);
  return (
    <>
      <div className="body_container">
        <BackArrow pageName={pageInfo} />
        <Formik
          initialValues={defaultValues}
          validationSchema={UserValidateSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className={ca.create_account_body}>
                <div className="max-w-[474px]">
                  <div className={ca.heading}>Create Admin Account</div>
                  <div className={ca.main_ip_wrapwer}>
                    <div>
                      <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                        First Name*
                      </div>
                      <div className={ca.small_ip}>
                        <Field
                          placeholder="John"
                          name="firstName"
                          className={ca.ip_ele}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="firstName" />
                      </div>
                    </div>
                    <div>
                      <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                        Last Name*
                      </div>
                      <div className={ca.small_ip}>
                        <Field
                          placeholder="Doe"
                          name="lastName"
                          className={ca.ip_ele}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="lastName" />
                      </div>
                    </div>
                  </div>
                  <div className={ca.larg_ele_box}>
                    <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                      Email Address*
                    </div>
                    <div className={ca.email_box}>
                      <Field
                        placeholder="email@website"
                        name="email"
                        type="email"
                        className={ca.ip_ele}
                      />
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className={ca.larg_ele_box}>
                    <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                      Username*
                    </div>
                    <div className={ca.email_box}>
                      <Field
                        placeholder="John Doe"
                        name="userName"
                        className={ca.ip_ele}
                      />
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="userName" />
                    </div>
                  </div>
                  <div className={ca.larg_ele_box}>
                    <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                      Password*
                    </div>
                    <div className={ca.email_box}>
                      <Field
                        placeholder="12345678"
                        type="password"
                        name="password"
                        className={ca.ip_ele}
                      />
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <div className={ca.main_ip_country}>
                    <div>
                      <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                        Country*
                      </div>
                      <div className={ca.slect_country}>
                        <ReactFlagsSelect
                          selected={selected}
                          selectButtonClassName="menu-flags-button"
                          onSelect={(code) => {
                            setSelected(code), setFieldValue("country", code);
                          }}
                          className={ca.country_opt}
                          optionsSize={17}
                          fullWidth={true}
                          selectedSize={17}
                          showSecondaryOptionLabel={true}
                          showOptionLabel={true}
                          showSecondarySelectedLabel={true}
                          showSelectedLabel={true}
                        />
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="country" />
                      </div>
                    </div>
                    <div>
                      <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                        Gender*
                      </div>
                      <div className={ca.gender_box}>
                        <Field
                          placeholder="12345678"
                          as="select"
                          name="gender"
                          className={ca.ip_ele}
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </Field>
                      </div>
                      <div className="text-danger">
                        <ErrorMessage name="gender" />
                      </div>
                    </div>
                  </div>
                  <div className={ca.larg_ele_box}>
                    <div className="font-DM font-medium text-[18px] 2xl:text-[20px]">
                      Admin type*
                    </div>
                    <div className={ca.select_admin_type}>
                      <Field
                        placeholder="12345678"
                        as="select"
                        name="adminType"
                        className={ca.ip_ele}
                      >
                        <option className="py-[20px]">Supper Admin</option>

                        <option className="pt-[20px]">Admin</option>
                      </Field>
                    </div>
                    <div className="text-danger">
                      <ErrorMessage name="adminType" />
                    </div>
                  </div>
                  <button type="submit" className={ca.create_acount}>
                    Creat Account
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateAdminAccount;
