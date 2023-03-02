import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { MoviesType } from "../models/MoviesTypes";
import "./MoviesList.css";

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US&page=1`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
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
