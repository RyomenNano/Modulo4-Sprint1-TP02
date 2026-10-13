import React from 'react'
import ButtonController  from '../components/ButtonController'

const ButtonFunction = ({ texto, opcion, movie, removeMovie, vaciarLista, setOpen, movieToggle, styles }) => {
  return (
    <>
        <button className={styles}
        onClick={() => {
            return ButtonController(opcion, movie, setOpen, movieToggle, removeMovie, vaciarLista)
        }} 
        >
          {texto}
        </button>
    </>
  )
}

export default ButtonFunction