import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [valor, setValor] = useState(() => {
        try {
        const almacenado = localStorage.getItem(key)
        return almacenado !== null
            ? JSON.parse(almacenado)
            : initialValue
        } catch (error) {
        console.error('Error al leer localStorage:', error)
        return initialValue
        }
    })

    useEffect(() => {
        try {
        if (valor.length > 0) {
            localStorage.setItem(key, JSON.stringify(valor))
            
        } else {
            localStorage.removeItem(key)
        }
        } catch (error) {
        console.error('Error al guardar en localStorage:', error)
        }
    }, [key, valor])

    return [valor, setValor]
}

export default useLocalStorage