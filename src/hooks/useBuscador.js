import {useState} from "react"

function useBuscador(){
    const [busqueda, setBusqueda] = useState('');

    return {busqueda, setBusqueda}
}

export default useBuscador