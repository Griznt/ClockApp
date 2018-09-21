import React, { Component } from "react";
import "./../../css/main-frame.css";
import MainFrame from "./main-frame";
import { checkTime } from "../../utils";

class MainFrameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: null,
      h: null,
      m: null,
      s: null
    };
    this.startTime = this.startTime.bind(this);
    this.timerId = null;
  }

  componentDidMount() {
    this.startTime();
  }

  startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    this.setState({
      timestamp: h + ":" + m + ":" + s,
      h,
      m,
      s
    });
    this.timerId = setTimeout(this.startTime, 500);
  }

  componentWillUnmount() {
    if (this.timerId) clearTimeout(this.timerId);
  }

  render() {
    return (
      <MainFrame
        timestamp={this.state.timestamp}
        hour={this.state.h}
        minute={this.state.m}
        second={this.state.s}
      />
    );
  }
}

export default MainFrameContainer;
