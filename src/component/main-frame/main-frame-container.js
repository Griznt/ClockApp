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
      s: null,
      name: null,
      imgUrl: null,
    };
    this.startTime = this.startTime.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
    this.timerId = null;
  }
  componentDidMount() {
    this.startTime();
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
    };
    const _onError = (err) => {
      console.log("error", err);
    };
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError);
    });
  }
  signIn() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log("Full Name: " + profile.getName());
      console.log("Given Name: " + profile.getGivenName());
      console.log("Family Name: " + profile.getFamilyName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail());

      // токен
      const id_token = googleUser.getAuthResponse().id_token;
      console.log("ID Token: " + id_token);
      this.setState({
        name: profile.getName(),
        imgUrl: profile.getImageUrl(),
      });
    });
  }
  signOut() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
      this.setState({
        name: null,
        imgUrl: null,
      });
    });
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
      s,
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
        signIn={this.signIn}
        name={this.state.name}
        imgUrl={this.state.imgUrl}
      />
    );
  }
}

export default MainFrameContainer;
