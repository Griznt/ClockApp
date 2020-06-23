import React from "react";
import Timestamp from "../timestamp/timestamp";
import SecondsContainer from "../seconds/seconds-container";
import MinutesContainer from "../minutes/minutes-container";
import HoursContainer from "../hours/hours-container";
import User from "../user";

const MainFrame = ({
  timestamp,
  hour,
  minute,
  second,
  signIn,
  signOut,
  name,
  imgUrl,
}) => {
  return (
    <div className="clock">
      <div className="time">
        <Timestamp timestamp={timestamp} />
      </div>
      <div className="hours">
        <HoursContainer hour={hour} />
      </div>
      <div className="minutes">
        <MinutesContainer minute={minute} />
      </div>
      <div className="seconds">
        <SecondsContainer second={second} />
      </div>
      <div>
        {!name && <button onClick={signIn}>Log in</button>}
        {!!name && <button onClick={signOut}>Log out</button>}
        {!!name && <User name={name} imgUrl={imgUrl} />}
      </div>
    </div>
  );
};

export default MainFrame;
