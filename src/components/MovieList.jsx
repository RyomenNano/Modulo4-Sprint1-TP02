import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, setMovies, busqueda, peliculasAlmacenadas}) => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className="max-w-7xl mx-auto px-6 py-10"> 
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {peliculasAlmacenadas.filter((movie) => movie.title.toLowerCase().includes(busqueda.toLowerCase())).sort((a, b) => Number(b.nuevo) - Number(a.nuevo)).map((movie) => (<MovieCard key={movie.id} setMovies={setMovies} movie={movie} movies={movies}/>))}
          
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieList
