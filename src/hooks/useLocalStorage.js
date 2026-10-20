import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [valor, setValor] = useState(() => {

        try {
        const almacenado = localStorage.getItem(key)
        return almacenado !== null ? JSON.parse(almacenado) : initialValue
        } 
        
        catch (error) {
            console.error('Error al leer localStorage:', error)
            return initialValue
        }
    })

    useEffect(() => {
        try {
            if (Array.isArray(valor)){
                if (valor.length > 0) {
                    localStorage.setItem(key, JSON.stringify(valor))
                }
                else 
                    {localStorage.removeItem(key)}}

            else{
                if (valor !== null && valor !== undefined) {
                    localStorage.setItem(key, JSON.stringify(valor))
                }
                else 
                    {localStorage.removeItem(key)}}

        }
        catch (error){ console.error('Error al guardar en localStorage:', error)
        }
    }, [key, valor])

    useEffect(() => {
        const sincronizar = (e) => {
            if (e.key !== key){
                return }
            
            setValor(e.newValue === null ? initialValue : JSON.parse(e.newValue))
        }

        window.addEventListener('storage', sincronizar)
        
        return () => window.removeEventListener('storage', sincronizar)
    }, [key, initialValue])

    return [valor, setValor]
}

export default useLocalStorage