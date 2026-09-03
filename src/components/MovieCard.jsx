import React from 'react' 
import ButtonFunction from '../components/Button'
 
const MovieCard = ({movies, setMovies, peliculasAlmacenadas}) => { 
  console.log(movies);
return ( 
  <> 
    <div className="max-w-7xl mx-auto px-6 py-10"> 
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> 
 
        {peliculasAlmacenadas.map((movie) => ( 
         
         <div key={movie.id} className="bg-[radial-gradient(circle_at_center,_#3f3f46,_#18181b_75%)] rounded-xl p-4 flex flex-col items-center"> 
            <img src={movie.image} className="rounded-lg w-full h-[320px] object-cover"/> 
 
            <div className="text-center mt-auto"> 
                <h3 className="text-stone-100 font-semibold">{movie.title}</h3> 
                <p className="text-stone-400 text-sm">{movie.year}</p> 
                <p className="text-stone-300 text-sm">{movie.description}</p> 

              <ButtonFunction texto="Añadir" opcion="guardarPelicula" setMovies={setMovies} movie={movie} styles="mt-4 text-white px-4 py-2 rounded-full font-medium bg-[radial-gradient(circle_at_center,_#be123c,_#881337_75%)] hover:bg-[radial-gradient(circle_at_center,_#f43f5e,_#be123c_75%)] transition"/>
               
              </div> 
          </div> 
        ))} 
 
      </div> 
    </div> 
  </> 
) 
} 
 
export default MovieCard