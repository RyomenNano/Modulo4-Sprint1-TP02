import React from 'react'
import MovieList from '../MovieList'
import WatchlistModal from '../pages/WatchlistModal'

const Main = ({ movies, panel, movieToggle, removeMovie, vaciarLista, busqueda, setBusqueda, peliculasAlmacenadas, paginacion }) => {
  const {open, setOpen} = panel
  return (
    <>
    <main className="min-h-screen min-w-0 bg-gradient-to-b from-zinc-900 via-neutral-950 to-black">
        <div>
          <input 
            type="text" 
            placeholder="Buscar películas" 
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)} 
            className="mx-auto mt-4 block w-[calc(100%-2rem)] max-w-xl rounded-lg border border-border-input bg-surface-input px-4 py-3 text-foreground placeholder:text-placeholder shadow-md outline-none transition-all duration-200 focus:border-brand-hover focus:ring-2 focus:ring-brand-hover/20 sm:mt-6"
          />
        </div>
        <div className='flex min-w-0 items-center justify-center'>
            <MovieList
            movies={movies} 
            movieToggle={movieToggle} 
            busqueda={busqueda} 
            peliculasAlmacenadas={peliculasAlmacenadas}
            paginacion={paginacion} /> 

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
