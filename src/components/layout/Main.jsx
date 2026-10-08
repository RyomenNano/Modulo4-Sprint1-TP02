import React from 'react'
import MovieList from '../MovieList'
import WatchlistModal from '../pages/WatchlistModal'

const Main = ({ open, setOpen, movies, setMovies, removeMovie, vaciarLista, busqueda, setBusqueda }) => {
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
            setMovies={setMovies} 
            busqueda={busqueda} />
            <div 
              className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity 
              ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <WatchlistModal
                setOpen={setOpen} 
                setMovies={setMovies} 
                removeMovie={removeMovie} 
                vaciarLista={vaciarLista}
                movies={movies} />
            </div>
        </div>
    </main>
    </>
  )
}

export default Main
