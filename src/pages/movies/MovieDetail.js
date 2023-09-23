import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {

  const [movieDetail, setMovieDetail] = useState()
  const {id} = useParams()
useEffect(()=>{

  getData()
},[])
  const getData = async ()=>{

    try{

      const response = await axios.get( `https://api.themoviedb.org/3/movie/${id}?api_key=de092f78b96911aee81bc02e4e8fb274`)
 console.log(response.data)
 setMovieDetail(response.data)
    }

    catch(error){

 console.log(error)
    }
  }
  return (
    <>
     <div className="container text-white ">

      <div className="top-img text-white text-center" style={{marginTop: "150px"}}>

          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`}
            alt=""
            style={{ width: "800px", maxHeight: "600px" }}
            className="img-fluid"
          />
          <h2 className="mt-4 mb-3">{ movieDetail ? movieDetail.title: ""}</h2>
      </div>

      <div className="row mt-4">

        <div className="col-6">

          <h5>Revenue: {movieDetail? movieDetail.revenue : ""}</h5>
        </div>
        <div className="col-6 text-end">

          <h5>Date: {movieDetail ? movieDetail.release_date: ""}</h5>
        </div>
      </div>
      <div className="description mt-4 text-start">
        <p>{movieDetail? movieDetail.overview: ""}</p>
      </div>
     </div>
    </>
  );
};

export default MovieDetail;
