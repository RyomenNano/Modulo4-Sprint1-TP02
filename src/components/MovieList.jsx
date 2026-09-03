import React from 'react'
import MovieCard from './MovieCard'
import {peliculasAlmacenadas} from '../consts/movies'

const MovieList = ({setMovies, movies}) => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <MovieCard movies={movies} setMovies={setMovies} peliculasAlmacenadas={peliculasAlmacenadas}/>
    </div>
    </>
  )
}

export default MovieList
