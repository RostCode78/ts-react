import { useReducer } from "react";

const initialState = {}

const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h3>Login</h3>

            <div className="alert alert-info">
                Validando...
            </div>

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