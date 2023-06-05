interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number
}

const ObjetosLiterales = () => {

    const Persona: Persona = {
        nombreCompleto: 'Jhonattan',
        edad: 26,
        direccion: {
            pais: 'Mexico',
            casaNo: 6038
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(Persona, null, 2)}
                </pre>
            </code>
        </>
    )
}

export default ObjetosLiterales;