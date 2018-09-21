import React from "react";
import Hour from "./hour";
import { HOURS_COUNT } from "../../const";
import { generateArray } from "../../utils";

class HoursContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: generateArray(HOURS_COUNT)
    };

    this.renderHoursArray = this.renderHoursArray.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.hour !== nextProps.hour;
  }

  renderHoursArray() {
    return this.state.hours.slice().map(hour => {
      return {
        i: hour,
        active: this.props.hour === hour
      };
    });
  }

  render() {
    return <Hour hours={this.renderHoursArray()} />;
  }
}

export default HoursContainer;
