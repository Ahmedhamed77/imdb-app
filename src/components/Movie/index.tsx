import React from 'react'
import { MovieContainer, PosterMovie, PosterTitle, PosterType, PosterYear } from './style'

export interface MovieProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
export const Movie:React.FC<MovieProps> = ({Title, Year, Type, Poster}) => {
    return (
        <MovieContainer>
            <PosterMovie src={Poster}/>
            <PosterTitle>{Title}</PosterTitle>
            <PosterYear>{Year}</PosterYear>
            <PosterType>{Type}</PosterType>
        </MovieContainer>
    )
}
