import React, { useEffect, useState } from "react";
import { MoviesType } from "../models/MoviesTypes";
import axios from "axios";

// type DetailsProps = {
//     movie: MoviesType;
// }


const key = process.env.API_KEY;





const Details = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/{movie_id}?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US`).then(res => {
          setDetails(res.data.results);
          console.log(res.data.results);
        }).catch(err => console.log(err))
    
    },[])
    return (
    <div>
       
    </div>
    )
}

export default Details;