import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, movieToggle, busqueda, peliculasAlmacenadas}) => {

  const peliculasFiltradas = peliculasAlmacenadas.filter((movie)=> movie.title.toLowerCase().includes(busqueda.toLowerCase())).sort((a, b) => Number(b.nuevo) - Number(a.nuevo))
          

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className="max-w-7xl mx-auto px-6 py-10"> 
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {
          peliculasFiltradas.length > 0 ? peliculasFiltradas.map((movie) => 
          (<MovieCard key={movie.id} movieToggle={movieToggle} movie={movie} movies={movies}/>))
  
          :
          
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <i className="bi bi-search text-5xl text-rose-900/80 mb-4">
            <p className="text-lg font-semibold text-stone-300">
              No se encontraron películas
            </p>
            <p className="text-sm text-stone-500 mt-2">
              Probá con otro título.
            </p>
            </i>
          </div>
          }
          
        </div> 
      </div>
    </div>
    </>
  )
}

export default MovieList
