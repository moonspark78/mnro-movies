import React, { useEffect, useState } from "react";
import { MoviesType } from "../models/MoviesTypes";
import './MovieCard.css'

type MovieCardProps = {
    movie: MoviesType;
}

const getPosterURL = (posterpath : any) =>{
    return `https://image.tmdb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({movie} : MovieCardProps) => {
    const img = getPosterURL(movie.poster_path)
    return(
        <div className="movieCard">
            <h3>{movie.name}</h3>
            <a href="#"><img src={img} alt={movie.name}/></a>

        </div>
        )
}

export default MovieCard;