import React from "react";
import Timestamp from "../timestamp/timestamp";
import SecondsContainer from "../seconds/seconds-container";
import MinutesContainer from "../minutes/minutes-container";
import HoursContainer from "../hours/hours-container";

const MainFrame = props => {
  return (
    <div className="clock">
      <div className="time">
        <Timestamp timestamp={props.timestamp} />
      </div>
      <div className="hours">
        <HoursContainer hour={props.hour} />
      </div>
      <div className="minutes">
        <MinutesContainer minute={props.minute} />
      </div>
      <div className="seconds">
        <SecondsContainer second={props.second} />
      </div>
    </div>
  );
};

export default MainFrame;
