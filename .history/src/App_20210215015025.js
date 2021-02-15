import React, { Component, label } from "react";
import "./App.css";
import firebase from "./firebase";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: null,
    };
  }

  //   setUpRecaptcha = () =>{
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //   "sign-in-button",
  //   {
  //     size: "invisible",
  //     callback: (response) => {
  //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  //       this.onSignInSubmit();
  //     },
  //   }
  // );

  //   };

  //   onSignInSubmit = (event) => {
  // event.preventDefault();
  //     const phoneNumber = "+918369696578";
  //     const appVerifier = window.recaptchaVerifier;
  //     firebase
  //       .auth()
  //       .signInWithPhoneNumber(phoneNumber, appVerifier)
  //       .then((confirmationResult) => {
  // SMS sent. Prompt user to type the code from the message, then sign the
  // user in with confirmationResult.confirm(code).
  // window.confirmationResult = confirmationResult;
  // ...
  // })
  // .catch((error) => {
  // Error; SMS not sent
  // ...
  //     });
  // }

  handleClick = (e) => {
    e.preventDefault();
    const { phoneNumber } = this.state;
    const phoneNumber_countryCode = `+91${phoneNumber}`;
    console.log(phoneNumber_countryCode);
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = phoneNumber_countryCode;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        let code = prompt("enter otp", "");
        if (code == null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user, "user");
            document.querySelector("label").textContent =
              result.user.phoneNumber + "Number Verified";
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  render() {
    const { phoneNumber } = this.state;
    return (
      <div className="">
        <form onSubmit={this.handleClick}>
          <div id="recaptcha"></div>
          <br />
          <label for="phone">Enter your phone number: </label>
          <input
            type="tel"
            pattern="[789][0-9]{9}"
            value={phoneNumber}
            onChange={(e) => {
              this.setState({
                phoneNumber: e.target.value,
              });
            }}
          />
          <br />
          <input type="submit" value="Click here" />
        </form>
        {/* <div className="container">

<div className="row justify-content-center align-item-center">

<div className="col-sm-6 text-left">
  <h2>Phone Login</h2>
  </div>
<form onSubmit={this.onSignInSubmit}>
  <div className="form-group">
    <label for ="exampleInputEmail1">phone number</label>
    <input type="number" className="form-control" />
    </div>

    <button type="submit" className="btn btn-primary">submit</button>
    </form>
  </div>
  </div> */}
      </div>
    );
  }
}
