import React from 'react'
import MovieList from '../MovieList'
import WatchlistModal from '../pages/WatchlistModal'

const Main = ({ open, setOpen, movies, movieToggle, removeMovie, vaciarLista, busqueda, setBusqueda, peliculasAlmacenadas }) => {
  return (
    <>
    <main className="bg-gradient-to-b from-zinc-900 via-neutral-950 to-black min-h-screen">
        <div>
          <input 
            type="text" 
            placeholder="Buscar películas" 
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)} 
            className="w-full max-w-xl mx-auto block px-4 py-3 bg-zinc-800 border border-zinc-600 text-stone-100 placeholder:text-zinc-400 rounded-l outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all duration-200 shadow-md"
          />
        </div>
        <div className='flex items-center justify-center'>
            <MovieList
            movies={movies} 
            movieToggle={movieToggle} 
            busqueda={busqueda} 
            peliculasAlmacenadas={peliculasAlmacenadas} /> 

            { open ?
            <div className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity`}>
              <WatchlistModal
                setOpen={setOpen} 
                removeMovie={removeMovie} 
                vaciarLista={vaciarLista}
                movies={movies} />
            </div>
            
            : null
            }
        </div>
    </main>
    </>
  )
}

export default Main
