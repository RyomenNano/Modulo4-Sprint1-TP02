import { useState, useEffect } from "react";

function useLocalStorage(watchlist, initialValue) {
    const [valor, setValor] = useState(() => {
        try {
        const almacenado = localStorage.getItem(watchlist)
        return almacenado !== null
            ? JSON.parse(almacenado)
            : initialValue
        } 
        
        catch (error) {
            console.error('Error al leer localStorage:', error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
        if (valor.length > 0) {
            localStorage.setItem(watchlist, JSON.stringify(valor))
            
        } else {
            localStorage.removeItem(watchlist)
        }
        } catch (error) {
        console.error('Error al guardar en localStorage:', error)
        }
    }, [watchlist, valor])

    useEffect(() => {
        const sincronizar = (e) => {
            if (e.key !== watchlist) return
            setValor(e.newValue === null ? initialValue : JSON.parse(e.newValue))
        }

        window.addEventListener('storage', sincronizar)
        
        return () => window.removeEventListener('storage', sincronizar)
    }, [watchlist, initialValue])

    return [valor, setValor]
}

export default useLocalStorage