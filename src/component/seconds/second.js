import React from "react";

const Second = props => {
  return props.seconds.map(second => {
    return (
      <div
        className={`second${second.active ? " active" : ""}`}
        key={second.i}
      />
    );
  });
};

export default Second;
