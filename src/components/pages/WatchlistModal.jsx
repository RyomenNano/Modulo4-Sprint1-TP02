import React, { useEffect } from 'react'
import ButtonFunction from '../../components/Button'

const WatchlistModal = ({ setOpen, movies, removeMovie, vaciarLista }) => {

  useEffect(() => {

  const manejarTecla = (event) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }

    console.log('Tecla presionada:', event.key)
  }

  window.addEventListener('keydown', manejarTecla)

  return () => {
    window.removeEventListener('keydown', manejarTecla)
  }
}, [setOpen])

  return (
<div className="flex max-h-[90vh] w-[calc(100%-2rem)] max-w-5xl flex-col overflow-hidden rounded-2xl border border-brand-strong/40 bg-surface text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-brand-strong/40 p-3 sm:p-5">
 
        <h2 className="text-lg font-bold tracking-wide sm:text-xl"> My Watchlist</h2>

        <ButtonFunction texto="Cerrar" opcion="alternarModal" setOpen={setOpen} styles="text-foreground-muted hover:text-brand-hover text-xl transition"/>

      </div> 

      <ButtonFunction 
                texto="vaciar" 
                opcion="vaciarLista" 
                vaciarLista={vaciarLista}  
                styles="ml-auto mr-3 mt-3 block rounded-md border border-brand/60 bg-brand-strong/70 px-4 py-2 text-sm text-brand-pale transition duration-200 hover:border-brand-hover hover:bg-brand-hover sm:mr-4 sm:mt-5 sm:px-5"/>
   
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3 sm:space-y-4 sm:p-5">
   
        {movies.length == 0 ?
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <i className="bi bi-film text-5xl text-brand-strong/80 mb-4">
          <p className="text-lg font-semibold text-foreground-soft">
            Tu lista está vacía
          </p>
          <p className="text-sm text-foreground-subtle mt-2">
            Agregá películas para verlas aparecer acá.
          </p>
          </i>
          </div>
        
        
        : ( movies.map((movie) => ( 
            <div key={movie.id} className="watchlist-item-bg flex flex-col items-start gap-3 rounded-xl border border-brand-strong/50 p-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:p-4">
               
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <img src={movie.image} alt={movie.title} className="h-24 w-16 shrink-0 rounded object-cover sm:h-32 sm:w-24"/>
                <p className="break-words font-medium text-foreground-strong">{movie.title}</p>
              </div> 

              <ButtonFunction 
                texto="remove" 
                opcion="removeMovieModal" 
                movie={movie} 
                removeMovie={removeMovie} 
                styles="self-end rounded-lg bg-brand-strong px-4 py-1.5 text-sm text-white transition hover:bg-brand-hover min-[420px]:self-auto"/>
 
            </div>)))  
            } 
 
      </div> 
    </div>
  )
}

export default WatchlistModal