import '../../css/register.css'
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
 function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handSumbit = async (e) => {
        e.preventDefault();
        try {
          let baseurl  = await fetch('http://localhost:5000/user/register',{
            method:"POSt",
            headers:{
              'Accept':'application/json',
              'Content-type':'application/json'    
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          });
          let datajson = await baseurl.json();
          // window.location.href = './login'
          console.log(datajson)
        } catch (error) {
            console.log("err",error)
        }
    }

  return (
    <div>
        
          <a style={{padding:"2px",margin:"0vh 3vh"}} href="/login">Login</a>
          <a style={{padding:"2px",margin:"0vh 3vh"}} href="/">dashboard</a>
          
      <div className="container">
        <div className="screen">
          <div class="screen__content">
        <h1>Register</h1>
            <form className="login" onSubmit={handSumbit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  value={username}
                  placeholder="User name / Email"
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="email"
                  className="login__input"
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  value={password}
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
                <a>  <FaLinkedinIn />{" "}</a>
                <a>
                  {" "}
                  <FaFacebookF />
                </a>
                <a >
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

export default Register