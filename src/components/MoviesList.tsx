import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MoviesType } from "../models/MoviesTypes";
import "./MoviesList.css";
import { getMovies } from "../api/movies";
import { getMoviesByCategories } from "../api/movies";




export const MoviesList = ({categoryId}:{ categoryId: number | null}) => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const resultMovies = await getMovies();
    setMovies(resultMovies);
  };

  const getMoviesByGenres = async (id: number) => {
    const resultMoviesBycategory = await getMoviesByCategories(id);
    setMovies(resultMoviesBycategory);
  };

  useEffect(() => {
    getAllMovies();
    if(categoryId) getMoviesByGenres(categoryId);
  }, [categoryId]);


  return (
    <div className="movieList">
      {movies.map((movie: MoviesType, id) => {
        return <MovieCard key={id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
