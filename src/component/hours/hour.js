import React from "react";

const Hour = props => {
  return props.hours.map(hour => {
    return (
      <div className={`hour${hour.active ? " active" : ""}`} key={hour.i} />
    );
  });
};
export default Hour;
