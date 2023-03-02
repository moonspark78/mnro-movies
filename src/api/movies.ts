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
