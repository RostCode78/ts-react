import useCounter from "../hooks/useCounter";

const ContadorConHook = () => {

    const { valor, Acumular } = useCounter(100);

    return (
        <>
            <h3>Contador Con Hook: <small>{ valor }</small></h3>

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

export default ContadorConHook;