import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../api/movies';
import { fetchDefaultMovies } from '../../redux/movies/actions';
import { Store } from '../../redux/store/types';

export const MainScreen = () => {
     const dispatch = useDispatch();
     const {movies,MovieIsLoading} = useSelector((store: Store) => store.movies);
     const [searchValue,setSearchValue] = useState<string>('starwars');
    useEffect(() => {
        dispatch(fetchDefaultMovies(searchValue));
    }, []);
    return (
        <div>
            <h1>Hello</h1>
            <div>
                {movies?.map((movie,index) => {
                    return(
                        <div key={index}>
                            <h1>{movie.Title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
