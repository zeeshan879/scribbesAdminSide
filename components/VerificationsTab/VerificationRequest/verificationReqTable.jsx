import React from "react";
import Table from "react-bootstrap/Table";
import au from "../../../Asstes/style/allUser.module.css";
import Image from "next/image";
import profile2 from "../../../Asstes/DashboardImages/profile2.png";
import checkMark from "../../../Asstes/DashboardImages/checkMark.png";
import edit from "../../../Asstes/DashboardImages/edit.png";
import error from "../../../Asstes/DashboardImages/error.png";
import delte from "../../../Asstes/DashboardImages/delte.png";
import q from "../../../Asstes/DashboardImages/q.png";
import preArrow from "../../../Asstes/DashboardImages/preArrow.png";
import nextArrow from "../../../Asstes/DashboardImages/nextArrow.png";
import { useDispatch,useSelector } from "react-redux";

const VerificationReqTable = () => {
  const tableData = [
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      type:"User"
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
      type:"Community"
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"Community"
    },
    {
      name: "John Doe",
      mark: true,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: true,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"

    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"

    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"
  
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"
  
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"
 
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"
 
    },
    {
      name: "John Doe",
      mark: false,
      email: "johndoe@mail.com",
      phone: "+92 300 3399922",
      check: false,
      ip: "66.249.66.24",
      id: "66.249.66.24",
      status: "Active",
      country: "United Sates",
	  type:"User"

    },
  ];
  const allVerificationReq=useSelector((state)=>state.user.allVerificationReq)
  const showAllReq=allVerificationReq?.data
  console.log("allreq",showAllReq)
  return (
    <>
    <div className="table_scrol_contoler">
      <div className={au.allUser_main_box}>
        <Table className="all-user-table">
          <thead>
            <tr className="h-[60px]">
              <th>
                <div className="h-[30px] font-DM">Name</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Contact</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Type</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">IP Address</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Id</div>
              </th>
              <th>
                <div className="h-[30px] font-DM">Request Time</div>
              </th>

              <th>
                <div className="h-[30px] font-DM">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {showAllReq?.map((data,index) => {
              return (
                <>
                  <tr className={index %2 !=0?au.table_row2: au.table_row}>
                    <td className="w-[170px] lg:w-[250px] ">
                      <div className={au.table_name}>
                        
                        <div className={au.table_name_inner}>
                          <div className={au.check_mark}>
                            {data?.mark && <Image src={checkMark} />}
                          </div>
                          <Image src={profile2} />
                          {data?.userName?data?.userName:data.communityName

}
                        </div>
                      </div>
                    </td>
                    <td className="font-DM text-sm lg:text-sm lg:text-base font-normal">
                      <div>{data?.email?data.email: data["Users.email"]}</div>
                      <div>{data?.phoneNo?data.phoneNo:data["Users.phoneNo"]}</div>
                    </td>
                    <td className="font-DM text-sm lg:text-base font-normal">
                      <div className="pt-[10px]">{data?.type}</div>
                    </td>
                    <td className="font-DM text-sm lg:text-base font-normal">
                      <div className="pt-[10px]">{data?.IP?data.IP:"null"}</div>
                    </td>
                    <td className="font-DM text-sm lg:text-base font-normal">
                      <div className="pt-[10px]">{data?.id}</div>
                    </td>
                    <td className="font-DM text-sm lg:text-base font-normal">
                      <div className="pt-[10px]">{data?.createdAt}</div>
                    </td>
            
                    <td>
                      <div className="pt-[10px] flex items-center gap-8">
                        <div className="flex gap-4 items-center">
                          <div className="cursor-pointer">
                            <Image src={edit} />
                          </div>
                          <div className="cursor-pointer">
                            {/* <Image src={delte} /> */}
                          </div>
                        </div>
   
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
      <div className={au.pagination_wrap}>
        <div className="text-[#BCBCBC] font-DM text-sm lg:text-base lg:text-[20px]">Showing 5 to 10 of 50 entries</div>
        <div className={au.paginatio_box}>
          <Image src={preArrow} />
          <div>1</div>
          <div className={au.active_page_count}>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>....</div>
          <div>9</div>
          <div>next</div>
          <Image src={nextArrow} />
        </div>
        <div className="w-[300px]"></div>
      </div>
    </>
  );
};

export default VerificationReqTable;
