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

type AuthAction = { type: 'logout' };

const authReducer = ( state: AuthReducer, action: AuthAction ): AuthReducer => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: "",
                nombre: ""
            }
        default:
            return state;
    }
    
}

const Login = () => {

    const [{ validando }, dispatch] = useReducer(authReducer, initialState);

    useEffect( () => {
        setTimeout( () => {
            dispatch({ type: 'logout' });
        }, 1500)
    }, []);

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

            <div className="alert alert-danger">
                No Autenticado...
            </div>

            <div className="alert alert-success">
                Autenticado...
            </div>

            <button className="btn btn-primary">
                Login
            </button>

            <button className="btn btn-danger">
                Logout
            </button>
        </>
    )
}

export default Login;