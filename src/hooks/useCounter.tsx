import { useState } from 'react';

const useCounter = ( inicial: number = 10 ) => {

    const [valor, setValor] = useState(inicial);

    const Acumular = ( numero: number ) => {
        setValor( valor + numero );
    }

    return {
        valor,
        Acumular
    }

}

export default useCounter;