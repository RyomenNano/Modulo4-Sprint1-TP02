import React from 'react'

const ButtonController = (opcion, movie,  setOpen, setMovies, removeMovie ) => {

    switch (opcion) {

        case 'removeMovie':
                removeMovie(movie.id)
            break

        case 'guardarPelicula':
            setMovies(prev => {const exists = prev.find(m => m.id == movie.id) 
              if (exists) return prev 
              return [...prev, movie]});
              break
        
        case 'alternarModal':
            setOpen(prev => !prev);
            break

        default:
            console.log('Función no encontrada')
    }
}
export default ButtonController
