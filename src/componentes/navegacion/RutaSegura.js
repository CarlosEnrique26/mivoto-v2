import React from "react";
import { useStateValue } from "../../context/store";
import {Route} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function RutaSegura({ component: Component, ...rest}) {
    const [{ sesionUsuario }, dispatch] = useStateValue();

    return (
        <Route
            {...rest}
            render = { (props) =>
                sesionUsuario ? (
                    sesionUsuario.autenticado == true ? (
                        <Component {...props} {...rest} />
                    )
                    : <Redirect to="/auth/login"/>
                ): <Redirect to="/auth/login"/>
            }
        />
    );
}

export default RutaSegura;