import {
  getDefaultMovies,
  getSearchedMovies,
  movieLoading,
  getMoviesHasError,
} from './actions';

export interface MoviesReducer {
  movies: Movie[];
  MovieIsLoading: boolean;
}

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type MoviesAction =
  | ReturnType<typeof getDefaultMovies>
  | ReturnType<typeof movieLoading>
  | ReturnType<typeof getMoviesHasError>
  | ReturnType<typeof getSearchedMovies>;
