import React from "react";
import Minute from "./minute";
import { MINUTES_COUNT } from "../../const";
import { checkTime, generateArray } from "../../utils";

class MinutesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: generateArray(MINUTES_COUNT)
    };

    this.renderMinutesArray = this.renderMinutesArray.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.minute !== nextProps.minute;
  }

  renderMinutesArray() {
    return this.state.minutes.map(minute => {
      return {
        i: minute,
        active: this.props.minute === checkTime(minute)
      };
    });
  }

  render() {
    return <Minute minutes={this.renderMinutesArray()} />;
  }
}

export default MinutesContainer;
