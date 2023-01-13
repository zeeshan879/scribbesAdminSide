import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RangeProgressChart = (props) => {
	console.log("prps==>data",props.data.gender)
//  const percentage = 73;
  return (
    <>
      <CircularProgressbar
        value={props.data?.percentage}
        text={`${props.data.gender}`}
        s
        styles={buildStyles({
          textColor: "black",
          pathColor: "#1CAC19",
          textSize: "16px",
          trailColor: "#000580",
        })}
      />
    </>
  );
};

export default RangeProgressChart;
