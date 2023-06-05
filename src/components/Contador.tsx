import { useState } from 'react';

const Contador = () => {

    // De esta forma se declara el tipo de dato que obtendra el useState
    // Sin embargo no es necesario declararlo ya que automaticamente
    // useState lo detecta al pasarle un valor por defector.
    const [valor, setValor] = useState<number>(10);

    // Solamente en esta parte es necesario declarar el tipo de dato que
    // obtendra el parametro de esta funcion ya que de esta forma al
    // llamar la funcion y pasarle un parametro, si no le pasamos el tipo
    // de dato correcto entonces nos marcara el error.
    const Acumular = ( numero: number ) => {
        setValor( valor + numero );
    }

    return (
        <>
            <h3>Contador: <small>{ valor }</small></h3>

            <button
                className="btn btn-primary"
                onClick={ () => Acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ () => Acumular(-1) }
            >
                -1
            </button>
        </>
    )
}

export default Contador;