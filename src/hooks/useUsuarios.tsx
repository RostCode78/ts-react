import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const useUsuarios = () => {

    // Definir los valores de useState
    const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect( () => {
        CargarUsuarios();
    }, []);

    const CargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        console.log(resp.data);

        if ( resp.data.data.length !== 0 ) {
            setUsuarios( resp.data.data );
        } else {
            alert('No hay mas registros');
            paginaRef.current --;
        }

    }

    const paginaSiguiente = () => {
        if ( usuarios.length !== 0 ) {
            paginaRef.current ++;
            CargarUsuarios();
        }
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            CargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}

export default useUsuarios;