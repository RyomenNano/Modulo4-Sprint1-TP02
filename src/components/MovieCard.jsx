import React from 'react' 
import ButtonFunction from '../components/Button'
 
const MovieCard = ({setMovies, movie, movies}) => { 
return ( 
  <>   
         <div className="relative bg-[radial-gradient(circle_at_center,_#3f3f46,_#18181b_75%)] rounded-xl p-4 flex flex-col items-center"> 
            <img src={movie.image} className="rounded-lg w-full h-[320px] object-cover"/> 
 
            <div className="text-center mt-auto"> 
                <h3 className="text-stone-100 font-semibold">{movie.title}</h3> 
                <p className="text-stone-400 text-sm">{movie.year}</p> 
                <p className="text-stone-300 text-sm">{movie.description}</p> 

              <ButtonFunction texto={movies.some(m => m.id === movie.id) ? '✓ En mi lista' : 'Agregar'} opcion="movieToggle" setMovies={setMovies} movie={movie} styles="mt-4 text-white px-4 py-2 rounded-full font-medium bg-[radial-gradient(circle_at_center,_#be123c,_#881337_75%)] hover:bg-[radial-gradient(circle_at_center,_#f43f5e,_#be123c_75%)] transition"/>
              {movie.nuevo ? 
              <div className="absolute left-1/2 -translate-x-1/2 z-10 text-xs text-rose-300 font-semibold">
                <p className="">
                  Nuevo
                </p>
              </div> 
              : null}

              </div> 
          </div> 

  </> 
) 
} 
 
export default MovieCard