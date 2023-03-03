import { useEffect, useState } from "react";
import { getCategories } from "../api/categories";
import { CategoriesType } from "../models/CategoriesType";
import "./Categories.css";

type Categoriesprops = {
  title: string;
  handleClick: (id: number) => void;
};

export const Categories = ({ title, handleClick}: Categoriesprops) => {
  
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const resultCategories = await getCategories();
    setCategories(resultCategories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);


  return (
    <div className="movies-genre">
      <h1>{title}</h1>
      <div className="categorie">
        {categories.map((item: CategoriesType) => (
          <div className="genre" key={item.id}>
            <button onClick={() =>handleClick(item.id)}><p>{item.name}</p></button>
          </div>
        ))}
      </div>
    </div>
  );
};
