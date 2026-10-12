import React from 'react'

const ButtonController = (opcion, movie,  setOpen, setMovies, removeMovie, vaciarLista) => {

    switch (opcion) {

        case 'removeMovieModal':
                removeMovie(movie.id)
            break

        case 'movieToggle':
            setMovies(prev => {
                const exists = prev.some(m => m.id === movie.id)
                if (exists) {
                    return prev.filter(m => m.id !== movie.id)
                }
                return [...prev, movie]
            })
            break
        
        case 'alternarModal':
            setOpen(prev => !prev);
            break
        
        case 'vaciarLista':
            if (window.confirm('¿Querés vaciar toda la lista?')) {
                vaciarLista()
            }
            break

        default:
            console.log('Función no encontrada')
    }
}
export default ButtonController
