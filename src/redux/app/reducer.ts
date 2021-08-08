import {combineReducers} from 'redux';
import {movies} from '../movies/reducers';
export const appReducers = combineReducers({movies});
