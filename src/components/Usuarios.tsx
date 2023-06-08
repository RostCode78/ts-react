import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

    const [ usuario, setUsuario ] = useState<Usuario[]>([]);

    useEffect(() => {

        // Llamado al API
        reqResApi.get<ReqResListado>('/users')
            .then( resp => {
                setUsuario( resp.data.data )
            })
            .catch( console.log )

    }, []);

    const renderItem = (usuario: Usuario) => {
        return (
            <tr>
                <td>Avatar</td>
                <td>Nombre</td>
                <td>Email</td>
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
        </>
    )
}

export default Usuarios;