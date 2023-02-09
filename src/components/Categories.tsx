import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesType } from "../models/CategoriesType";
import './Categories.css'


type Categoriesprops = {
    title : string,
}

export const Categories = ({title}: Categoriesprops) => {
    const [genre, setgenre] = useState([]);
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=a53249c1f434a6defe03d88903ea45ac&language=en-US")
        .then(response => {
            setgenre(response.data.genres);
            console.log(`response`, response.data.genres);
        }).catch(error => console.log(error));
    }, [])
    
    return(
        <div className='movies-genre'>
        <h1>{title}</h1>
      <div className='categorie'>
        {genre.map((item:CategoriesType) => (
            <div className="genre" key={item.id}>
                <p>{item.name}</p>
            </div>
            
        ) )}
    </div>
  </div>
    )
}



