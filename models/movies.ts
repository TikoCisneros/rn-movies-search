export interface ApiResult {
  page: number;
  results: Item[];
  total_pages: number;
  total_results: number;
}

export interface Item {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  name: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  first_air_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
