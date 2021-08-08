import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../api/movies';
import { Movie } from '../../components/Movie';
import { fetchDefaultMovies } from '../../redux/movies/actions';
import { Store } from '../../redux/store/types';
import { ScreenContainer } from './styles';

export const MainScreen = () => {
     const dispatch = useDispatch();
     const {movies,MovieIsLoading} = useSelector((store: Store) => store.movies);
     const [searchValue,setSearchValue] = useState<string>('starwars');
    useEffect(() => {
        dispatch(fetchDefaultMovies(searchValue));
    }, []);
    return (
    
            <ScreenContainer>
                {movies?.map((movie,index) => {
                    return(
                      <Movie key={index} {...movie} />
                    )
                })}
            </ScreenContainer>
    )
}
