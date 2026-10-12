import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import Contador from './pruebas/Contador'
import {peliculasAlmacenadas} from './data/movies'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [open, setOpen] = useState(false) // Variable para controlar si el menú lateral está abierto o cerrado

  const [movies, setMovies] = useLocalStorage('watchlist', []) // Variable para almacenar la lista de películas en el almacenamiento local

  const [busqueda, setBusqueda] = useState('') 
  console.log(busqueda);

  const removeMovie = (id) => {
    const updated = movies.filter(movie => movie.id !== id)
    setMovies(updated)
  }

  const vaciarLista = () => {
    setMovies([])
  }

  useEffect(() => {
  document.title = movies.length > 0
    ? `Mi lista (${movies.length}) | Movies`
    : 'Movies'
}, [movies])

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header 
          setOpen={setOpen}
          movies={movies} />
        <Main 
          open={open} 
          setOpen={setOpen} 
          movies={movies} 
          setMovies={setMovies} 
          removeMovie={removeMovie}
          vaciarLista={vaciarLista} 
          busqueda={busqueda}
          peliculasAlmacenadas={peliculasAlmacenadas}
          setBusqueda={setBusqueda} />
        <Footer />
      </div>
      <div>
        <Contador />
      </div>
    </>
  )
}



export default App
