
import { Categories } from "../components/Categories";
import MoviesList from "../components/MoviesList";
import { Navbar } from "../components/Navbar";
import { getMoviesByCategories } from "../api/movies";
import { useState } from "react";


export const Home = () => {
  const [genres, setGenres] = useState<number | null>(null);

  const handleClick = async (id: number) => {
    console.log(id)
    setGenres(id);
}
  return (
    <>
      <Navbar />
      <Categories title="Categories"  handleClick={handleClick}/>
      <MoviesList categoryId={genres}/>
    </>
  );
};
