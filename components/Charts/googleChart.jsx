import React from "react";
import Chart from "react-google-charts";

const GoogleChart = () => {
  const geoData = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["RU", 1000],
  ];
  const options = {
    legend: "none",
    backgroundColor: "#f8f8f8",
     colorAxis: { colors: ["#2982CC", "#A5D6FF", "#000580"] },
  };

  return (
    <>
      <Chart
        width="100%"
        height="100%"
        chartType="GeoChart"
        data={geoData}
        options={options}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
};

export default GoogleChart;
