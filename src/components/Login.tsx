import { useReducer, useEffect } from "react";

interface AuthReducer {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthReducer = {
    validando: true,
    token: null,
    username: "",
    nombre: ""
}

type LoginActionPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginActionPayload }

const authReducer = ( state: AuthReducer, action: AuthAction ): AuthReducer => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: "",
                nombre: ""
            }

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ROST78',
                username,
                nombre
            }
        default:
            return state;
    }
    
}

const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect( () => {
        setTimeout( () => {
            dispatch({ type: 'logout' });
        }, 1500)
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: "Jhonattan",
                username: "RostCode"
            }
        })
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    if ( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                ? <div className="alert alert-success">Autenticado como: { nombre }</div>
                : <div className="alert alert-danger">No Autenticado...</div>
            }

            {
                ( token )
                ? (
                    <button 
                        className="btn btn-danger"
                        onClick={ logout }
                    >
                        Logout
                    </button>
                )
                : (
                    <button 
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login
                    </button>
                )
            }

        </>
    )
}

export default Login;