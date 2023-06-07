import { ArrowBackOutlined } from "@material-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation()
  const movie = location.movie
  return (
    <div className="watch">
      <NavLink to = "/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </NavLink>
      <video
        className="video"
        autoPlay
        progress
        controls
        src= {movie}
      />
    </div>
  );
}