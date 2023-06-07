import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

const Home = ({type}) => {
    const random = Math.floor(Math.random() * 90) + 1
    const[allmovie, setallmovie] = useState([])
    let allmovies = []
    const {genre} = useContext(AuthContext)
    let tempfiltermovie = []
    let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};   
    useEffect( async () => {
      try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${random}`);
        setallmovie(res.data.results)
      }catch(err){
        console.log(err);
      }
    },[])
    if(allmovie.length != 0){
      allmovie.map((item) => {
          let unikey1 = item.genre_ids[0];
          let unikey2 = item.genre_ids[1];
          let unikey3 = item.genre_ids[2];
          let check = true
          if(tempfiltermovie[genreids[unikey1]]){
            let newarr = tempfiltermovie[genreids[unikey1]]
            tempfiltermovie[genreids[unikey1]] = [...newarr, item]
            check = false
          }
          if(tempfiltermovie[genreids[unikey2]]){
            let newarr = tempfiltermovie[genreids[unikey2]]
            tempfiltermovie[genreids[unikey2]] = [...newarr, item]
            check = false
          }
          if(tempfiltermovie[genreids[unikey3]]){
            let newarr = tempfiltermovie[genreids[unikey3]]
            tempfiltermovie[genreids[unikey3]] = [...newarr, item]
            check = false
          }
          if(check){
            tempfiltermovie[genreids[unikey1]] = [item]
            tempfiltermovie[genreids[unikey2]] = [item]
            tempfiltermovie[genreids[unikey3]] = [item]
          }
        })
      }
      let filtermovie = []
      let i = 0, j = 0
      if(genre == "Genre"){
        for(let key in tempfiltermovie){
          let obj = {
            key : key,
            arr : tempfiltermovie[key]
          }
            allmovies[j] = obj
            j++
        }
      }
      for(let key in tempfiltermovie){
        let obj = {
          key : key,
          arr : tempfiltermovie[key]
        }
        if(key == genre){
          filtermovie[i] = obj
          i++
        }
      }
  return (
    <div className="home">
      <Navbar />
      <Featured type = {type}/>
      {genre == "Genre" ? allmovies.map((val) => (
        <List movie = {val.arr} title = {val.key}/>
      )):
        filtermovie.map((val) => (
          <List movie = {val.arr} title = {val.key}/>
        ))
      }
    </div>
  );
};

export default Home;