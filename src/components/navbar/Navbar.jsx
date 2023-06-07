import { ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import { Badge, Avatar} from "@material-ui/core";
import { useContext } from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const {logoutfun} = useContext(AuthContext)
  let history = useHistory()
  const handleclick = () => {
    logoutfun()
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <NavLink to = "/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
            </NavLink>

          <NavLink to = "/" className="link">
          <span>Homepage</span>
          </NavLink>
          <NavLink to = "/movies" className="link">
          <span>Movies</span>
          </NavLink>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
         

  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />

          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span onClick={handleclick}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;