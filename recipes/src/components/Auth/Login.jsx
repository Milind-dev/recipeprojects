import React from "react";
import '../../css/login.css'

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Logins() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const handlelogin = async (e) => {
  e.preventDefault();
  let baseurl = "http://localhost:5000/user/login";
  let loginfetch = await fetch(baseurl,{
    method:"POST",
    headers:{
      'Accept':'application/json',
      'Content-type':'application/json'    
    },
    body:JSON.stringify({
      email:email,
      password:password
    })
  })
  let logindata =await loginfetch.json();
  console.log("status",logindata)
  if(logindata.status === 200){
    window.location.href = './Localfile'
  }
  else{
    setEmail("");
    setPassword("")
  }

}
  
  return (
    <div>
      <a  style={{padding:"2px",margin:"0vh 3vh"}} href="/register">Register</a>
      <a  style={{padding:"2px",margin:"0vh 3vh"}} href="/">dashboard</a>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handlelogin}>
              <h1>Login</h1>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="email"
                  value={email}
                  className="login__input"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  className="login__input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a>
                  {" "}
                  <FaLinkedinIn />{" "}
                </a>
                <a>
                  {" "}
                  <FaFacebookF />
                </a>
                <a>
                  {" "}
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
