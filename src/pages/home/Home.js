import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import MovieCard from '../../component/MovieCard';

const Home = () => {

 const  [ movies, setMovies] = useState([]);

 useEffect(()=>{
   
    const getAllMovies = async()=>{

      try{

          const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=de092f78b96911aee81bc02e4e8fb274");
          console.log(response.data.results)
          setMovies(response.data.results)
      }

  catch(error){

  console.log(error)
  }
       
    }
    getAllMovies()

 },[])


console.log(movies)


  return(
  
  <>

 <div className="container jumbo-text text-center ">

   Popular
  </div>

  <div className="container shadow-lg text-center">
 <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  {
   movies.map((movie, index) => (
  <MovieCard key={movie.id} movie={movie} index={index} />
   
    ))
}
   
 </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon myicon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon myicon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





  </>
  );
};

export default Home;
