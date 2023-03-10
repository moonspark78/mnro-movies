import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { MoviesType } from "../models/MoviesTypes";
import { getDetails } from "../api/movies";

export const Details = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState<MoviesType>();

  const getAllDetails = async (id:string | undefined) => {
    const resultDeatils = await getDetails(id); 
    setMovie(resultDeatils);
  };

  useEffect(() => {
    getAllDetails(id)
  }, []);

    if(!movie) return null;

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div className="details">
        <div className="partLeft">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="partRight">
          <h1 className="titleDetail">{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className="rating">
            <p>{movie.vote_average}</p>
          </div>
          <p>Release Date : {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};
