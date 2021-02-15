import React, { Component } from 'react'
      import './App.css';
import firebase from "./firebase";
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
    const phoneNumber = "+918369696578";
    const appVerifier = window.recaptchaVerifier;
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


  handleClick=()=>{
    let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha')
    let number = "+918369696578"
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e){
      let code  =prompt("enter otp" , '')
      if(code==null) return
      e.confirm(code).then(function(result){
        console.log(result.user, "user");
      })
    })
  }

  render() {
    return (
      <div className="App">

<button onClick={this.handleClick}>click here</button>


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
        
      
    )
  }
}
