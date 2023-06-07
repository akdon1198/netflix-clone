import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import "./app.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const App = () => {
  const {registerUser, loginUser} = useContext(AuthContext)
  return(
    <Router>
      <Switch>
        <Route exact path="/">{loginUser ? <Home/> : <Redirect to = "/login"/>}</Route>
        <Route path="/register">
        {!registerUser ? <Register/> : <Redirect to = "/login"/>}        
        </Route>
        <Route path="/login">
        {registerUser ? <Login/> : <Redirect to = "/register"/>}
        </Route>
        {
          loginUser && <>          
          <Route path="/movies"><Home type = "movies"/></Route>
          <Route path="/watch"><Watch/></Route>
          </>
        }
      </Switch>
    </Router>
  )
};

export default App;