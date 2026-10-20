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
    <div className="flex min-w-0 flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">

        <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">

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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4">

            <ButtonFuction
              texto="Anterior"
              opcion="paginaAnterior"
              paginaAnterior={paginaAnterior}
              disabled={paginaActual === 1}
              styles="rounded-xl border border-rose-500/50 bg-white/5 px-4 py-2.5 text-sm font-semibold text-stone-200 backdrop-blur-sm transition duration-300 hover:border-rose-400 hover:bg-rose-500/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:px-6 sm:text-base"
            />

            <span className="px-1 text-sm text-stone-200 sm:text-base">
              Página {paginaActual} de {totalPaginas}
            </span>

            <ButtonFuction
              texto="Siguiente"
              opcion="paginaSiguiente"
              paginaSiguiente={paginaSiguiente}
              disabled={paginaActual >= totalPaginas}
              styles="rounded-xl border border-rose-500/50 bg-white/5 px-4 py-2.5 text-sm font-semibold text-stone-200 backdrop-blur-sm transition duration-300 hover:border-rose-400 hover:bg-rose-500/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:px-6 sm:text-base"
            />

          </div>
        )}

      </div>
    </div>
  )
}

export default MovieList