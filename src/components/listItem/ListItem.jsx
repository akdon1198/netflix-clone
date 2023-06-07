import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ListItem({ index , item, title}) {
  const [isHovered, setIsHovered] = useState(false);
  if(item.vote_average >= 5){
    item.vote_average = 5
  }else{
    item.vote_average = 0
  }
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <NavLink to = {{pathname : "/watch", movie : trailer}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              {item.vote_average == 5 ? 
              <ThumbUpAltOutlined className="icongreen"/> : <ThumbDownOutlined className = "icon"/>
              }
              {
                item.vote_average == 0 ?
                <ThumbDownOutlined className="iconred" /> : <ThumbDownOutlined className = "icon"/>
              }
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>{item.release_date.slice(0, 4)}</span>
            </div>
            <div className="desc">
              {
                item.overview.slice(0, 40)
              }
            </div>
            <div className="genre">{title}</div>
          </div>
        </>
      )}
    </div>
      </NavLink>
  );
}