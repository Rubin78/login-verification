import React, { Component } from 'react'
      import './App.css';
import firebase from "./firebase";;;;;;;;;;;;
export default class App extends Component {
  

  setUpRecaptcha = () =>{
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      this.onSignInSubmit();
    },
  }
);


  };

  onSignInSubmit = (event) => {
event.preventDefault();
    var phoneNumber = "+918369696578";
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }



  render() {
    return (
      <div className="App">

        <div className="container">

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
  </div>
  </div>
        
      
    )
  }
}
