import React from 'react'
import ButtonController  from '../components/ButtonController'

const ButtonFunction = ({ texto, opcion, movie, removeMovie, vaciarLista, setOpen, movieToggle, styles, paginaSiguiente, paginaAnterior, disabled = false }) => {
  return (
    <>
        <button className={styles}
        disabled={disabled}
        onClick={() => {
            return ButtonController(opcion, movie, setOpen, movieToggle, removeMovie, vaciarLista, paginaSiguiente, paginaAnterior)
        }}>
          {texto}
        </button>
    </>
  )
}

export default ButtonFunction