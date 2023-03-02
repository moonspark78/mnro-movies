import axios from "axios";

export const api_key = process.env.REACT_APP_API_KEY;

export const getCategories = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
    )
    .then((response) => response.data.genres)
    .catch((error) => console.log(error));
};
