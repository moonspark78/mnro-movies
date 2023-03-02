import axios from "axios";

export const api_key = process.env.REACT_APP_API_KEY;

export const getDetails = (id:string | undefined) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
