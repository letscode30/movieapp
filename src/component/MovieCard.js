import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
  console.log(movie);
  console.log(index);
  return (
    <>
      <div className="carousel-inner">
        <div
          className={index === 0 ? "carousel-item active" : "carousel-item"}
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            style={{ width: "1200px", maxHeight: "800px" }}
            className="img-fluid"
          />
          <Link to={`/movie/${movie.id}`}>
            <h2 className="text-white text-center mt-4 mb-2">{movie.title}</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
