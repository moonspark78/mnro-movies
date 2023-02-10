import { CategoriesType } from "./CategoriesType";

export interface MoviesType {
    id: number;
    name: string;
    overview: string;
    backdrop_path: string;
    vote_average:number;
    origin_country:string[];
    poster_path:string;
    genres:CategoriesType;
}