export const imagepath = "https://image.tmdb.org/t/p/original"

export interface CarouselMovieType {
    id: number;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    title: string;
    vote_count: number;
}

export interface MovieCardType {
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    original_language: string;
}

export interface CategoryType {
    name: string,
    path: string
}
export const Category : CategoryType[] = [
    {name: "Now Playing", path: "now_playing"},
    {name: "Popular", path: "popular"},
    {name: "Top Rated", path: "top_rated"},
    {name: "Upcoming", path: "upcoming"}
]

export interface MovieDetailType {
    id: number,
    poster_path: string,
    backdrop_path: string,
    original_title: string,
    release_date: string,
    tagline: string,
    overview: string,
    genres: {name:string}[],
    vote_average: number,
    original_language: string
}