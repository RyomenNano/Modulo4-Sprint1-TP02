import React from 'react'
import ButtonFuction from '../../components/Button'

const Header = ({ movies, panel }) => {
  const { setOpen } = panel
  
  return (
    <>
      <header className="flex flex-col gap-4 px-4 py-4 bg-surface text-stone-100 border-b border-rose-950 shadow-lg sm:flex-row sm:justify-between sm:items-center sm:px-10 sm:py-5">
      
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:gap-3">

        <div className="h-10 rounded-lg bg-rose-700 flex items-center justify-center shadow-md">
          <span className="text-base tracking-tight sm:text-xl"> Logo maquiavelico</span>
        </div>
    
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Movies</h1>
      <p className="text-xs text-stone-400">YOUR WATCHLIST</p>
      </div>
      
      <ButtonFuction texto={movies.length > 0 ? `Watchlist: ("${movies.length}")` : "Watchlist"} opcion="alternarModal" setOpen={setOpen} styles="self-center px-5 py-2.5 rounded-xl border border-rose-500/50 bg-white/5 text-stone-200 font-semibold backdrop-blur-sm hover:bg-rose-500/15 hover:border-rose-400 hover:text-white transition duration-300 sm:self-auto sm:px-6"/>

  </header>
</>
  )
}

export default Header