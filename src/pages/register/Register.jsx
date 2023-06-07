import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./register.scss";
import { AuthContext } from "../../AuthContext";
import { useContext } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tempemail, settempemail] = useState("")
  console.log(email);
  const {registerfun} = useContext(AuthContext)
  const handleStart = () => {
    setEmail(tempemail);
  };
  const handleFinish = () => {
    let registerUser = {
      email : email,
      password : password
    }
    registerfun(registerUser)
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">
            <NavLink to = "/login">
            Sign In
            </NavLink>
            </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" onChange={(e) => settempemail(e.target.value)}/>
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}