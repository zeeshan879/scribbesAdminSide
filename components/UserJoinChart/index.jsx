import React from 'react'
import {useState} from 'react'
import cen from "../../Asstes/style/home_centerView.module.css"
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Userjoinchart = () => {
  const [state,setState]=useState({
    series: [{
      name: "STOCK ABC",
      data: [30,40,35,50,49,60,70,91,125,0,10,200,300]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: [30,40,35,50,49,60,70,91,125,0,10,300],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    },
  
  
  }
  )

 
  return (
<>
<div className={cen.joined_chart_box}>

   {(typeof window !== 'undefined') &&
  <Chart options={state.options} series={state.series} type="area" height={350} />}
</div>


</>
  )
}

export default Userjoinchart