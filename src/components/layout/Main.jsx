import React from 'react'
import MovieList from '../MovieList'
import WatchlistModal from '../pages/WatchlistModal'

const Main = ({ open, setOpen, movies, setMovies, removeMovie }) => {
  return (
    <>
    <main className="bg-gradient-to-b from-zinc-900 via-neutral-950 to-black">
        <div className='flex items-center justify-center'>
            <MovieList setMovies={setMovies} movies={movies} />
            <div className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <WatchlistModal setOpen={setOpen} setMovies={setMovies} removeMovie={removeMovie} movies={movies} />
            </div>
        </div>
    </main>
    </>
  )
}

export default Main
