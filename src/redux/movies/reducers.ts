import {Reducer} from 'redux';
import {MoviesReducer, MoviesAction} from './types';

const initialState: MoviesReducer = {
  movies: [],
  MovieIsLoading: false,
};

export const movies: Reducer<MoviesReducer, MoviesAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'GET_DEFAULT_MOVIES':
      return {
        ...state,
        movies: action.movies,
      };
    case 'MOVIE_IS_LOADING':
      return {
        ...state,
        MovieIsLoading: action.status,
      };
    default:
      return state;
  }
};
