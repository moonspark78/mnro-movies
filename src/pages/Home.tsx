import React from "react";
import { Categories } from "../components/Categories";
import MoviesList from "../components/MoviesList";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Categories title="Categories" />
      <MoviesList />
    </>
  );
};
