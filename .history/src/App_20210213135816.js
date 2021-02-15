import React, { Component } from 'react'
      import './App.css';

export default class App extends Component {
  

  setUpRecaptcha = () =>{
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "sign-in-button",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  }
);


  }

  render() {
    return (
      <div className="App">

        <div className="container">

<div className="row justify-content-center align-item-center">

<div className="col-sm-6 text-left">
  <h2>Phone Login</h2>
  </div>
<form>
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
