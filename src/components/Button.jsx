import React from 'react'
import ButtonController  from '../components/ButtonController'

const ButtonFunction = ({ texto, opcion, movie, removeMovie, setOpen, styles, setMovies }) => {
  return (
    <>
        <button className={styles}
        onClick={() => {
            return ButtonController(opcion, movie, setOpen, setMovies, removeMovie)
        }} 
        >
          {texto}
        </button>
    </>
  )
}

export default ButtonFunction