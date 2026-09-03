import React from 'react'
import ButtonFuction from '../../components/Button'

const Header = ({ setOpen }) => {
  return (
    <>
      <header className="flex justify-between items-center px-10 py-5 bg-zinc-950 text-stone-100 border-b border-rose-950 shadow-lg">
      
      <div className="flex items-center gap-3">

        <div className=" h-10 rounded-lg bg-rose-700 flex items-center justify-center shadow-md">
          <span className="text-xl tracking-tight "> Logo maquiavelico</span>
        </div>
      
      <h1 className="text-3xl font-extrabold tracking-tight">Movies</h1>
      <p className="text-xs text-stone-400">YOUR WATCHLIST</p>
      </div>
      
      <ButtonFuction texto="Watchlist" opcion="alternarModal" setOpen={setOpen} styles="px-6 py-2.5 rounded-xl border border-rose-500/50 bg-white/5 text-stone-200 font-semibold backdrop-blur-sm hover:bg-rose-500/15 hover:border-rose-400 hover:text-white transition duration-300"/>

  </header>
</>
  )
}

export default Header