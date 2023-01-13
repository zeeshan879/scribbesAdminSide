import React from "react";
import pc from "../../../Asstes/style/popular_country.module.css";
import activeFlag from "../../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../../Asstes/DashboardImages/profileArrow.png";
import tablepicho from "../../../Asstes/DashboardImages/tablepicho.png";
import Image from "next/image";
import Table from "react-bootstrap/Table";
const PopularPostByCountry = () => {
  const popular_table=[
    {
      name:"How to get started with NFT’s?"
    },
    {
      name:"How to get started with NFT’s?"
    },
    {
      name:"How to get started with NFT’s?"
    },

    {
      name:"How to get started with NFT’s?"
    },
  ]
  return (
    <>
      <div className={pc.main_container}>
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-grotesk font-bold text-[20px]">
            Popular Posts by Country
          </div>
          <div className="flex gap-3 cursor-pointer items-center">
            <div>
              {" "}
              <Image src={activeFlag} />
            </div>
            <div>
              {" "}
              <Image src={profileArrow} />
            </div>
          </div>
        </div>
        <div className="pt-[30px]">
          <Table className="all-user-table" responsive>
            <thead>
              <tr>
                <th>
                  <div className="font-DM pl-6 text">Post</div>
                </th>
                <th>
                  <div className="font-DM">Name</div>
                </th>
                <th>
                  <div className="font-DM">Date Upload</div>
                </th>
                <th>
                  <div className="font-DM">Likes</div>
                </th>
                <th>
                  <div className="font-DM">Status</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM">Comments</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                popular_table.map((data)=>{
                  return(
                    <>
                                  <tr className="h-[147px]">
                <td className="max-w-[200px]">
                  <div className="pl-4 pt-[12px] max-w-[200px]">
                    <Image src={tablepicho} />
                  </div>
                </td>
                <td>
                  <div className="max-w-[150px] text-base pt-[45px] font-DM">
           {data?.name}
                  </div>
                </td>
                <td>
                  <div className="max-w-[150px] pt-[55px] font-DM">
                    10-02-2022
                  </div>
                </td>
                <td>
                  <div className="max-w-[150px] pt-[55px] font-DM">1588899</div>
                </td>
                <td>
                  <div className="max-w-[150px] pt-[55px] font-DM">1588899</div>
                </td>
                <td>
                  {" "}
                  <div className="max-w-[150px] pt-[55px] font-DM">1588899</div>
                </td>
              </tr>
                    </>
                  )
                })
              }

            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PopularPostByCountry;
