import React from "react";
import pc from "../../../../Asstes/style/popular_country.module.css";
import activeFlag from "../../../../Asstes/DashboardImages/activeFlag.png";
import profileArrow from "../../../../Asstes/DashboardImages/profileArrow.png";
import tablepicho from "../../../../Asstes/DashboardImages/tablepicho.png";
import Image from "next/image";
import Table from "react-bootstrap/Table";
const PopularPostVideos = () => {
  const popular_table=[
    {
      name:"How to get started with NFT’s?"
    },

  ]
  return (
    <>
      <div className={pc.main_container}>
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-grotesk font-bold text-[20px]">
		  Most Popular Posts
          </div>
  
        </div>
        <div className="table_scrol_contoler">
          <div className="min-w-[700px]">
          <Table className="all-user-table" responsive>
            <thead>
              <tr>
                <th>
                  <div className="font-DM pl-6 text-sm lg:text-base">Post</div>
                </th>
                <th>
                  <div className="font-DM text-sm lg:text-base">Name</div>
                </th>
                <th>
                  <div className="font-DM text-sm lg:text-base">Date Upload</div>
                </th>
                <th>
                  <div className="font-DM text-sm lg:text-base">Likes</div>
                </th>
                <th>
                  <div className="font-DM text-sm lg:text-base">Status</div>
                </th>
                <th>
                  <div className="h-[25px] 2xl:h-[30px] font-DM text-sm lg:text-base">Comments</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {popular_table.map((data) => {
                return (
                  <>
                    <tr className="h-[147px]">
                      <td className="max-w-[200px]">
                        <div className="pl-4 pt-[12px] max-w-[200px]">
                          <Image src={tablepicho} />
                        </div>
                      </td>
                      <td>
                        <div className="max-w-[150px] text-sm lg:text-base pt-[45px] font-DM">
                          {data?.name}
                        </div>
                      </td>
                      <td>
                        <div className="max-w-[150px] pt-[55px] text-sm lg:text-base font-DM">
                          10-02-2022
                        </div>
                      </td>
                      <td>
                        <div className="max-w-[150px] text-sm lg:text-base pt-[55px] font-DM">
                          1588899
                        </div>
                      </td>
                      <td>
                        <div className="max-w-[150px] text-sm lg:text-base pt-[55px] font-DM">
                          1588899
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="max-w-[150px] text-sm lg:text-base pt-[55px] font-DM">
                          1588899
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
        <div className="flex justify-center pt-[5px] lg:pt-[30px]">
          <div className="cursor-pointer font-DM underline text-black">
            See all
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPostVideos;
