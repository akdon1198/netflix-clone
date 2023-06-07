import { useState } from "react";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const[email, setemail] = useState("")
  const[password, setpassword] = useState("")
  const {loginfun, loginUser, error, errorfun} = useContext(AuthContext)
  let history = useHistory()
  const handleclick = (e) => {
    e.preventDefault()
    let loginUser = {
      email : email,
      password : password
    }
    loginfun(loginUser)
  }
  if(loginUser){
    history.push("/")
  }else{
    errorfun()
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" onChange={(e) => setemail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
          {error ? <p>Please Enter Right Credentials</p> : ""}
          <button className="loginButton" onClick={(e) => handleclick(e)}>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}