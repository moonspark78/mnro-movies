import { Categories } from "../components/Categories";
import { MoviesList } from "../components/MoviesList";
import { Navbar } from "../components/Navbar";
import { useState } from "react";

export const Home = () => {
	const [categorie, setCategories] = useState<number | null>(null);

	const handleClick = async (id: number) => {
		setCategories(id);
	};
	return (
		<>
			<Navbar />
			<Categories title="Categories" handleClick={handleClick} />
			<MoviesList categoryId={categorie} />
		</>
	);
};
