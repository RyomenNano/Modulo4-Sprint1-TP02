import './App.css'
import {peliculasAlmacenadas} from './data/movies'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'
import useMyList from './hooks/useMyList'
import usePanel from './hooks/usePanel'
import useBuscador from './hooks/useBuscador'
import useContTitle from './hooks/useContTitle'
import usePaginacion from './hooks/usePaginacion'
import Contador from './pruebas/Contador'

function App() {

  const {movies, movieToggle, removeMovie, vaciarLista} = useMyList()

  const {busqueda, setBusqueda} = useBuscador()

  const paginacion = usePaginacion(busqueda)

  const panel = usePanel(movies)

  useContTitle(movies, "Movies")

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header 
          movies={movies}
          panel={panel} />
        <Main 
          panel={panel} 
          movies={movies} 
          movieToggle={movieToggle} 
          removeMovie={removeMovie}
          vaciarLista={vaciarLista} 
          busqueda={busqueda}
          peliculasAlmacenadas={peliculasAlmacenadas}
          setBusqueda={setBusqueda}
          paginacion={paginacion} />
        <Footer />
      </div>
      <div>
        <Contador />
      </div>
    </>
  )
}

export default App
 