import useLocalStorage from "./useLocalStorage"

function useMyList(){

    const [movies, setMovies] = useLocalStorage('watchlist', []) 

    const removeMovie = (id) => {
        const updated = movies.filter(movie => movie.id !== id)
        setMovies(updated)
    }

    const vaciarLista = () => {
        setMovies([])
    }

    const movieToggle = (movie) => {
        setMovies(prev => {
            const exists = prev.some(m => m.id === movie.id)
            if (exists) {
                return prev.filter(m => m.id !== movie.id)
            }
            return [...prev, movie]
        })
    }
    return {movies, movieToggle, removeMovie, vaciarLista}
}

export default useMyList