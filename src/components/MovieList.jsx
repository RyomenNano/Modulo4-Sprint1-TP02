import React from 'react'
import MovieCard from './MovieCard'
import {peliculasAlmacenadas} from '../consts/movies'

const MovieList = ({setMovies, busqueda}) => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className="max-w-7xl mx-auto px-6 py-10"> 
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {peliculasAlmacenadas.filter((movie) => movie.title.toLowerCase().includes(busqueda.toLowerCase())).map((movie) => (<MovieCard setMovies={setMovies} movie={movie}/>))}
          
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieList
