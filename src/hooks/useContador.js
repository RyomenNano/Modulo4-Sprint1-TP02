import { useState } from "react";

function useContador(valorInicial) {
    const [count, setContador] = useState(valorInicial);

    const HandleIncrement = () => {setContador(prev => prev + 1);}
    const HandleDecrement = () => {setContador(prev => prev - 1);}
    const HandleReset = () => {setContador(valorInicial);}
    
    return { count, HandleIncrement, HandleDecrement, HandleReset };
}

export default useContador;