import React from "react";

const Minute = props => {
  return props.minutes.map(minute => {
    return (
      <div
        className={`minute${minute.active ? " active" : ""}`}
        key={minute.i}
      />
    );
  });
};

export default Minute;
