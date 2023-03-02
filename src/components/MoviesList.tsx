import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MoviesType } from "../models/MoviesTypes";
import "./MoviesList.css";
import { getMovies } from "../api/movies";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const resultMovies = await getMovies();
    setMovies(resultMovies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="movieList">
      {movies.map((movie: MoviesType, index) => {
        return <MovieCard key={index} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
