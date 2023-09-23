import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Movies = () => {
  const [movies, setMovies] = useState([]);

  const {type} = useParams();
  console.log(type);

  useEffect(() => {
   getMovies()
  }, []);

  useEffect(() => {
    getMovies()
  },[type]);



  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=de092f78b96911aee81bc02e4e8fb274`
      );

      setMovies(response.data.results);
    } catch (error) {

        console.log(error)

    }
  }
  return (

    <>
   <div className="container mb-2  jumbo-text" style={{marginTop: "100px"}}>
     
  <p className="text-center">{type ? type : "popular"}</p>
  </div>
  <div className="container">
   <div className="row text-white">
   

  {

movies.map((movie)=>(


  <>

    <div className="col-lg-3 col-md-3 col-sm-6">


    <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            style={{ width: "1200px", maxHeight: "800px" }}
            className="img-fluid"
          />
          <Link to = { `/movie/${movie.id}`}>
            <h2 className="text-white text-center mt-4 mb-2">{movie.title}</h2>
          </Link>
    </div>
  </>
)


)

  }

    
   </div>
       
   </div>
        
    </>
  )
};

export default Movies;
