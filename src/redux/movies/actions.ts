import {getMovies} from '../../api/movies';
import {AppThunk} from '../store/types';
import {Movie} from './types';

export const getDefaultMovies = (movies: Movie[]) =>
  <const>{
    type: 'GET_DEFAULT_MOVIES',
    movies,
  };
export const getMoviesHasError = (status: boolean) =>
  <const>{
    type: 'GET_MOVIES_HAS_ERROR',
    status,
  };
export const getSearchedMovies = (searchValue: string) =>
  <const>{
    type: 'GET_SEARCHED_MOVIES',
    searchValue,
  };

export const movieLoading = (status: boolean) =>
  <const>{
    type: 'MOVIE_IS_LOADING',
    status,
  };

export const fetchDefaultMovies =
  (searchValue: string): AppThunk =>
  async dispatch => {
    dispatch(movieLoading(true));
    try {
      const response = await getMovies(searchValue);
      dispatch(getDefaultMovies(response));
    } catch (error: any) {
      console.log('error get default movies', error);
    }
    dispatch(movieLoading(false));
  };
