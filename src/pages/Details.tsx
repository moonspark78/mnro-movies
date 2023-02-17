import React, { useEffect, useState } from "react";
import { MoviesType } from "../models/MoviesTypes";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Details.css'

const key = process.env.API_KEY;

const Details = () => {

    let { id } = useParams();
    console.log(id);
    
    const [posterPath, setPosterPath] = useState();
    const [title, setTitle] = useState();
    const [overview, setOverview] = useState();
    const [rate, setRating] = useState();
    const [date, setDate] = useState();


    useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/${id}?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US`).then(res => {
          setPosterPath(res.data.poster_path)
          setTitle(res.data.title);
          setOverview(res.data.overview);
          setRating(res.data.vote_average);
          setDate(res.data.release_date);
          setPosterPath(res.data.poster_path)
        }).catch(err => console.log(err))
    },[])

    return (
    <div>
       <Link to ="/"><button>Back</button></Link>
  
        <div className="details">
          <div className="partLeft">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`} alt="" />
          </div> 
        <div className="partRight">
          <h1 className="titleDetail">{title}</h1>
          <p>{overview}</p>
            <div className="rating">
              <p>{rate}</p>
            </div>
          <p>Release Date : {date}</p>
        </div>
      </div>
    </div>
    )
}

export default Details;