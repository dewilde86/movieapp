export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: IGenre[];
}

export interface IMovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface IMovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface IMovieDto {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export interface ITvDto {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export interface IMovieVideoDto {
  id: number;
  results: IMovieVideo[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieVideo {
  site: string;
  key: string;
}