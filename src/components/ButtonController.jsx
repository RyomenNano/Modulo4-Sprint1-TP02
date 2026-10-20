import React from 'react'

const ButtonController = (opcion, movie,  setOpen, movieToggle, removeMovie, vaciarLista, paginaSiguiente, paginaAnterior) => {

    switch (opcion) {

        case 'removeMovieModal':
            removeMovie(movie.id)
            break

        case 'movieToggle':
            movieToggle(movie)
            break
        
        case 'alternarModal':
            setOpen(prev => !prev);
            break
        
        case 'vaciarLista':
            if (window.confirm('¿Querés vaciar toda la lista?')) {
                vaciarLista()
            }
            break

        case 'paginaAnterior':
            paginaAnterior()
            console.log('paginaAnterior')
            break

        case 'paginaSiguiente':
            paginaSiguiente()
            console.log('paginaSiguiente')
            break

        default:
            console.log('Función no encontrada')
    }
}
export default ButtonController
