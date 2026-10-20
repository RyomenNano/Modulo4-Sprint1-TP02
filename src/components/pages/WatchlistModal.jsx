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
<div className="bg-surface text-foreground rounded-2xl w-[90%] max-w-5xl shadow-2xl border border-brand-strong/40"> 
      <div className="flex justify-between items-center p-5 border-b border-brand-strong/40"> 
 
        <h2 className="font-bold text-xl tracking-wide"> My Watchlist</h2> 

        <ButtonFunction texto="Cerrar" opcion="alternarModal" setOpen={setOpen} styles="text-foreground-muted hover:text-brand-hover text-xl transition"/>

      </div> 

      <ButtonFunction 
                texto="vaciar" 
                opcion="vaciarLista" 
                vaciarLista={vaciarLista}  
                styles="float-right mt-5 mr-4 mb-2 bg-brand-strong/70 border border-brand/60 px-5 py-2 rounded-md text-sm text-brand-pale hover:bg-brand-hover hover:border-brand-hover transition duration-200"/>
   
      <div className="p-5 space-y-4 h-[750px] overflow-y-auto"> 
   
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
            <div key={movie.id} className="watchlist-item-bg flex items-center justify-between p-4 rounded-xl border border-brand-strong/50"> 
               
              <div className="flex items-center gap-4"> 
                <img src={movie.image} alt={movie.title} className="w-24 h-32 object-cover rounded"/> 
                <p className="font-medium text-foreground-strong">{movie.title}</p> 
              </div> 

              <ButtonFunction 
                texto="remove" 
                opcion="removeMovieModal" 
                movie={movie} 
                removeMovie={removeMovie} 
                styles="bg-brand-strong px-4 py-1.5 rounded-lg text-sm text-white hover:bg-brand-hover transition"/>
 
            </div>)))  
            } 
 
      </div> 
    </div>
  )
}

export default WatchlistModal