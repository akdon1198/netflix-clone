import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import "./featured.scss";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { NavLink } from "react-router-dom";

export default function Featured({ type }) {
  const[featuredmovie, setfeaturedmovie] = useState([])
  const random = Math.floor(Math.random() * 90) + 1
  useEffect( async () => {
    try{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${random}`);
      setfeaturedmovie(res.data.results[0])
    }catch(err){
      console.log(err);
    }
  }, [])
  const {genrefun} = useContext(AuthContext)
  const handleonchange = (e) => {
    genrefun(e.target.value)
  }
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => handleonchange(e)}>
            <option >Genre</option>
            <option>Comedy</option>
            <option >Adventure</option>
            <option >Crime</option>
            <option >Fantasy</option>
            <option >Historical</option>
            <option >Horror</option>
            <option >Romance</option>
            <option >Sci-fi</option>
            <option >Thriller</option>
            <option >Western</option>
            <option >Animation</option>
            <option >Drama</option>
            <option >Documentary</option>
          </select>
        </div>
      )}
      <img
        src= {`https://image.tmdb.org/t/p/original${featuredmovie.backdrop_path}`}
        alt=""
      />
      <div className="info">
        <h1>{featuredmovie.original_title}</h1>
        <span className="desc">
         {featuredmovie.overview}
        </span>
        <div className="buttons">
          <button className="play">
            <NavLink to = {{pathname : "/watch"}} className = "link">
            <PlayArrow />
            </NavLink>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}