import React from 'react'
import ButtonFunction from '../../components/Button'

const WatchlistModal = ({ setOpen, movies, removeMovie }) => {

  return (
<div className="bg-zinc-950 text-stone-100 rounded-2xl w-[90%] max-w-5xl shadow-2xl border border-rose-900/40"> 
      <div className="flex justify-between items-center p-5 border-b border-rose-900/40"> 
 
        <h2 className="font-bold text-xl tracking-wide"> My Watchlist</h2> 

        <ButtonFunction texto="X" opcion="alternarModal" setOpen={setOpen} styles="text-stone-400 hover:text-rose-400 text-xl transition"/>

      </div> 
   
      <div className="p-5 space-y-4 h-[750px] overflow-y-auto"> 
   
        {movies.length > 0 ? ( movies.map((movie) => ( 
            <div key={movie.id} className="flex items-center justify-between bg-[radial-gradient(circle_at_center,_#3f3035,_#18181b_75%)] p-4 rounded-xl border border-rose-900/50"> 
               
              <div className="flex items-center gap-4"> 
                <img src={movie.image} alt={movie.title} className="w-24 h-32 object-cover rounded"/> 
                <p className="font-medium text-stone-200">{movie.title}</p> 
              </div> 

              <ButtonFunction texto="remove" opcion="removeMovie" movie={movie} removeMovie={removeMovie} styles="bg-rose-800 px-4 py-1.5 rounded-lg text-sm text-white hover:bg-rose-600 transition"/>
 
            </div>)))  
            :  
            ( <p className="text-center text-stone-500"> 
              No hay películas 
              </p>)} 
 
      </div> 
    </div>
  )
}

export default WatchlistModal