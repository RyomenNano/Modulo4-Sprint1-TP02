import React from 'react' 
import ButtonFunction from '../components/Button'
 
const MovieCard = ({movieToggle, movie, movies}) => { 
return ( 
  <>   
         <div className="relative movie-card-bg rounded-xl p-4 flex flex-col items-center"> 
            <img src={movie.image} alt={`poster de ${movie.title}`} className="rounded-lg w-full h-[320px] object-cover"/> 
 
            <div className="text-center mt-auto"> 
                <h3 className="text-foreground font-semibold">{movie.title}</h3> 
                <p className="text-foreground-muted text-sm">{movie.year}</p> 

              <ButtonFunction texto={movies.some(m => m.id === movie.id) ? '✓ En mi lista' : '+ Agregar'} opcion="movieToggle" movieToggle={movieToggle} movie={movie} styles="mt-4 text-white px-4 py-2 rounded-full font-medium bg-brand-gradient hover:bg-brand-gradient-hover transition"/>
              {movie.nuevo && 
              <div className="absolute left-1/2 -translate-x-1/2 z-10 text-xs text-brand-highlight font-semibold">
                <p className="">
                  Nuevo
                </p>
              </div>}

              </div> 
          </div> 

  </> 
) 
} 
 
export default MovieCard