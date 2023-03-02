import React from "react";
import { Link } from "react-router-dom";
import { MoviesType } from "../models/MoviesTypes";
import "./MovieCard.css";

type MovieCardProps = {
  movie: MoviesType;
};

const getPosterURL = (posterpath: any) => {
  return `https://image.tmdb.org/t/p/w220_and_h330_face${posterpath}`;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const img = getPosterURL(movie.poster_path);
  return (
    <div className="movieCard">
      <h3>{movie.title}</h3>
      <Link to={`/details/${movie.id}`}>
        <img src={img} alt={movie.title} />
      </Link>
    </div>
  );
};

export default MovieCard;
