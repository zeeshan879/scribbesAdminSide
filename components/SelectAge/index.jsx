import React from 'react'
import cen from "../../Asstes/style/home_centerView.module.css"
import Image from 'next/image'
import profileArrow from "../../Asstes/DashboardImages/profileArrow.png"

const SelectAge = () => {
  return (
<>
<div className={cen.select_age_box}>
Age <Image src={profileArrow} />
</div>


</>
  )
}

export default SelectAge