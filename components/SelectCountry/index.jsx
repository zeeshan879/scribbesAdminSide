import React from 'react'
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png"
import activeFlag from "../../Asstes/DashboardImages/activeFlag.png"
import Image from 'next/image'


const SelectCountry = () => {
  return (
 <div>
    <div className='flex cursor-pointer items-center gap-[11px]'>
        <Image src={activeFlag} />
        <Image src={profileArrow} />
    </div>
 </div>
  )
}

export default SelectCountry