import { CategoriesType } from "./CategoriesType";

export interface MoviesType {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    vote_average:number;
    origin_country:string[];
    poster_path:string;
    genre_ids:CategoriesType;
}