import axios from 'axios'
import { log } from 'console'
import React, { useEffect, useState } from 'react'
import { Categories } from '../models/CategoriesType';
import { MoviesType } from '../models/MoviesTypes';
import {Router, Route, Routes, Link} from 'react-router-dom'
// import "./Details.css"



interface DetailsProps {
    movie: MoviesType
}

export function Details({ movie }: DetailsProps) {
   
    return (
        <div className='details'>
            <img src={movie.backdrop_path} className="movie-box-img" alt={movie.name} />
            <div className="movie-box-content">
                <p className="movie-name">{movie.name}</p>
                <p>{movie.overview}</p>

            </div>

            <button className='btnHome'>Home</button>
        </div>
    );
}
