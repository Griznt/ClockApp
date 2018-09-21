import React from "react";
import Second from "./second";
import { SECONDS_COUNT } from "../../const";
import { checkTime, generateArray } from "../../utils";

class SecondsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: generateArray(SECONDS_COUNT)
    };

    this.renderSecondsArray = this.renderSecondsArray.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.second !== nextProps.second;
  }

  renderSecondsArray() {
    return this.state.seconds.slice().map(second => {
      return {
        i: second,
        active: this.props.second === checkTime(second)
      };
    });
  }

  render() {
    return <Second seconds={this.renderSecondsArray()} />;
  }
}

export default SecondsContainer;
