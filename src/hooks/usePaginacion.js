import { useState } from "react"

function usePaginacion(busqueda) {

    const [paginacion, setPaginacion] = 
    useState({ busqueda, pagina: 1})

    const paginaActual = paginacion.busqueda === busqueda ? paginacion.pagina : 1

    const paginaAnterior = () => {
        setPaginacion({ busqueda, pagina: Math.max(1, paginaActual - 1)
        })
    }

    const paginaSiguiente = () => { setPaginacion({ busqueda, pagina: paginaActual + 1
        })
    }

    return { paginaActual, paginaAnterior, paginaSiguiente
    }
}

export default usePaginacion