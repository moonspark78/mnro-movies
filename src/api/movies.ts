import axios from "axios";

export const api_key = process.env.REACT_APP_API_KEY;

export const getMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getDetails = (id:string | undefined) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};


export const getMoviesByCategories = (id:number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    )
    .then((response) => response.data.results)
    .catch((error) => console.log(error));
};

