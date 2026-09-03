import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

function App() {

  const [open, setOpen] = useState(false) // Variable para controlar si el menú lateral está abierto o cerrado

  const [movies, setMovies] = useState(() => {
    try {
      const stored = localStorage.getItem("watchlist")
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error("Error reading watchlist from localStorage:", error)
      return []
    }
  }) // Lista de películas en watchlist

  const removeMovie = (id) => {
    const updated = movies.filter(movie => movie.id !== id)
    setMovies(updated)
  }

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(movies))
  }, [movies]) // Guardar la lista de películas en el almacenamiento local cada vez que cambie

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header setOpen={setOpen} />
        <Main setOpen={setOpen} open={open} movies={movies} setMovies={setMovies} removeMovie={removeMovie} />
        <Footer />
      </div>
    </>
  )
}

export default App
