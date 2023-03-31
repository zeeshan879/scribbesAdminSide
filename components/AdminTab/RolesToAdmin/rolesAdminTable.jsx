import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import au from "../../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../../Asstes/DashboardImages/profile2.png";
import supper from "../../../Asstes/DashboardImages/supper.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllAdmins, mangeRole } from "../../../redux/reducers/adminReducer";


const RolesToAdminTable = () => {
  const dispatch = useDispatch();
  const allAdmins = useSelector((state) => state.admin.allAdmins);
  const alldminData = allAdmins.data;
  useEffect(() => {
    dispatch(getAllAdmins());
  }, []);

  return (
    <>
      <div className="table_scrol_contoler">
        <div className={au.allUser_main_box}>
          <Table className="all-user-table" responsive>
            <thead>
              <tr className="h-[60px]">
                <th>
                  <div className="h-[30px] font-DM text-center">Admin Name</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM text-center">Contact</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Rank</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Id</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM">Status</div>
                </th>
                <th>
                  <div className="h-[30px] font-DM"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {alldminData?.map((data, index) => {
                return (
                  <>
                    <tr
                      className={index % 2 != 0 ? au.table_row2 : au.table_row}
                    >
                      <td className="w-[250px] ">
                        <div className={au.table_name}>
                          <label class="container1">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                          </label>
                          <div className={au.table_name_inner}>
                            <div className={au.check_super}>
                              <Image src={supper} />
                            </div>
                            <Image src={profile2} />
                            {data?.userName}
                          </div>
                        </div>
                      </td>
                      <td className="font-DM text-base font-normal ">
                        <div className="pt-[15px] text-center">
                          {data?.email}
                        </div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">
                          {data.rank ? data.rank : "null"}
                        </div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">{data?.id}</div>
                      </td>
                      <td className="font-DM text-base font-normal">
                        <div className="pt-[15px]">
                          {data.status ? data.status : "null"}
                        </div>
                      </td>
                      <td>
                        <div
                          className={au.mange_role_btn}
                     
                        >
                          Manage Role
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default RolesToAdminTable;
