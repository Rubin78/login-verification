(this.webpackJsonpsetupthre=this.webpackJsonpsetupthre||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),o=n(15),r=n.n(o),i=(n(24),n(16)),s=n(17),u=n(19),l=n(18),h=(n(25),n(12));n(28);h.a.initializeApp({apiKey:"AIzaSyCPzRnaARKqxbz7v2rWT2UkPVg2Tu1pzO8",authDomain:"phone-login-2db6e.firebaseapp.com",projectId:"phone-login-2db6e",storageBucket:"phone-login-2db6e.appspot.com",messagingSenderId:"683632220759",appId:"1:683632220759:web:e58cc6ba32dc476c8a2112"});var b=h.a,p=n(7),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).handleClick=function(e){e.preventDefault();var t=c.state.phoneNumber,n="+91".concat(t);console.log(n);var a=new b.auth.RecaptchaVerifier("recaptcha"),o=n;b.auth().signInWithPhoneNumber(o,a).then((function(e){var t=prompt("enter otp","");null!=t&&e.confirm(t).then((function(e){console.log(e.user,"user"),document.querySelector("label").textContent=e.user.phoneNumber+"Number Verified"})).catch((function(e){console.log(e)}))}))},c.state={phoneNumber:null},c}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.phoneNumber;return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row justify-content-center align-item-center form-text",children:[Object(p.jsx)("div",{className:"col-sm-6 text-left",children:Object(p.jsx)("h2",{children:"Phone Login"})}),Object(p.jsxs)("form",{onSubmit:this.handleClick,children:[Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"tel",pattern:"[789][0-9]{9}",value:t,onChange:function(t){e.setState({phoneNumber:t.target.value})}}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"button-content",children:Object(p.jsx)("input",{type:"submit",value:"Click here"})}),Object(p.jsx)("div",{id:"recaptcha"})]})]})})}}]),n}(c.Component),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.d665d451.chunk.js.map