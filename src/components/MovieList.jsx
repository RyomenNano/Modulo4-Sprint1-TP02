import MovieCard from './MovieCard'
import ButtonFuction from '../components/Button'


const MovieList = ({ movies, movieToggle, busqueda, peliculasAlmacenadas, paginacion }) => {

  const {paginaActual, paginaAnterior, paginaSiguiente} = paginacion

  const peliculasFiltradas = peliculasAlmacenadas
    .filter((movie) =>
      movie.title.toLowerCase().includes(busqueda.toLowerCase())
    )
    .sort((a, b) => Number(b.nuevo) - Number(a.nuevo))

  const peliculasPorPagina = 20

  const totalPaginas = Math.ceil(peliculasFiltradas.length / peliculasPorPagina)

  const indiceInicio = (paginaActual - 1) * peliculasPorPagina

  const peliculasPagina = peliculasFiltradas.slice(indiceInicio, indiceInicio + peliculasPorPagina)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {peliculasFiltradas.length > 0 ? (

            peliculasPagina.map((movie) => (
              <MovieCard
                key={movie.id}
                movieToggle={movieToggle}
                movie={movie}
                movies={movies}
              />
            ))

          ) : (

            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <i className="bi bi-search text-5xl text-brand-strong/80 mb-4"></i>

              <p className="text-lg font-semibold text-foreground-soft">
                No se encontraron películas
              </p>

              <p className="text-sm text-foreground-subtle mt-2">
                Probá con otro título.
              </p>
            </div>

          )}

        </div>

        {peliculasFiltradas.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-8">

            <ButtonFuction
              texto="Anterior"
              opcion="paginaAnterior"
              paginaAnterior={paginaAnterior}
              disabled={paginaActual === 1}
              styles="px-6 py-2.5 rounded-xl border border-rose-500/50 bg-white/5 text-stone-200 font-semibold backdrop-blur-sm hover:bg-rose-500/15 hover:border-rose-400 hover:text-white transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            />

            <span className="text-stone-200">
              Página {paginaActual} de {totalPaginas}
            </span>

            <ButtonFuction
              texto="Siguiente"
              opcion="paginaSiguiente"
              paginaSiguiente={paginaSiguiente}
              disabled={paginaActual >= totalPaginas}
              styles="px-6 py-2.5 rounded-xl border border-rose-500/50 bg-white/5 text-stone-200 font-semibold backdrop-blur-sm hover:bg-rose-500/15 hover:border-rose-400 hover:text-white transition duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            />

          </div>
        )}

      </div>
    </div>
  )
}

export default MovieList