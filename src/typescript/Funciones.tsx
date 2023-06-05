const Funciones = () => {

    const Sumar = ( a:number, b:number ): number => {
        return a + b
    }
    
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: { Sumar(70, 8) }</span>
        </>
    )
}

export default Funciones;