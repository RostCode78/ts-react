const TiposBasicos = () => {

    const nombre: string = 'Jhonattan';
    const Edad: number = 26;
    const EstaActivo: boolean = true;

    const Poderes: string[] = []; // 'Velocidad', 'Volar', 'Respirar en el agua'

    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre }, { Edad }, { (EstaActivo) ? 'Activo' : 'No Activo' }
            <br/>
            { Poderes.join(', ')}
        </>
    )
}

export default TiposBasicos;