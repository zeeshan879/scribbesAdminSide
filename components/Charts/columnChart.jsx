import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const ColumnChart = () => {
  const [state, setState] = useState({
    series: [{
        name: 'Male',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66,90,80,50]
      }, {
        name: 'Female',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66,90,80,50]
      }, 
],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        grid: {
            show: true,
            borderColor: '#F5F5F5',
            strokeDashArray: 5,
        
          },

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            
          },
        },
        colors: ["#1CAC19",'#000580'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 0,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
        },
        yaxis: {
          title: {
            text: 'Age'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
    
    
  });
  return (
    <>
      {typeof window !== "undefined" && (
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height={300}
        />
      )}
    </>
  );
};

export default ColumnChart;
