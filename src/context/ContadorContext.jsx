import {createContext} from "react";
import useContador from "../hooks/useContador";
import { useContext } from "react";

const ContadorContext = createContext();

export function ContadorProvider({children}) {
    const valor = useContador(0);
    return(
        <ContadorContext.Provider value={valor}>
            {children}
        </ContadorContext.Provider>
    )
}

export function useContadorContext() {
    const contexto = useContext(ContadorContext);

    if (!contexto) {
        throw new Error("useContadorContext debe ser usado dentro de un ContadorProvider");
    }
    return contexto;
}