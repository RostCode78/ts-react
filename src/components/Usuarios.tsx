import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

    const [ usuario, setUsuario ] = useState<Usuario[]>([]);
    const [ page_actual, setPageActual ] = useState(1);

    useEffect(() => {

        // Llamado al API
        reqResApi.get<ReqResListado>(`/users?page=${page_actual}`)
            .then( resp => {
                setUsuario( resp.data.data );
                setPageActual( resp.data.page );
            })
            .catch( console.log )

    }, [page_actual]);

    const renderItem = ( { id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar } 
                        alt={ first_name } 
                        style={{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{ first_name }{ last_name }</td>
                <td>{ email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { usuario.map( renderItem )}
                </tbody>
            </table>

            <button
                className='btn btn-primary'
                onClick={ () => {
                    setPageActual( page_actual + 1 );
                }}
            >
                Siguiente
            </button>
        </>
    )
}

export default Usuarios;