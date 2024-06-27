import React, { useState } from "react";
import { IconButton, Toolbar, Typography, makeStyles, Button, Avatar, Drawer } from '@material-ui/core';
import { MenuIzquierda } from "./menuIzquierda";
import { MenuDerecha } from "./menuDerecha";
//import { withRouter } from "react-router-dom";
import { withRouter, useHistory } from "react-router-dom";
import { useStateValue } from "../../../context/store";
import { LockOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>({
    seccionDesktop : {
        display: "none",
        [theme.breakpoints.up("md")] : {
            display : "flex"
        }
    },
    seccionMobile : {
        display : "flex",
        [theme.breakpoints.up("md")] : {
            display: "none"
        }
    },
    grow : {
        flexGrow : 1
    },
    avatarSize : {
        width : 40,
        height : 40
    },
    list : {
        width : 250
    },
    listItemText : {
        fontSize : "14px",
        fontWeight : 600,
        paddingLeft : "15px",
        color : "#212121"
    }
}))

export const BarSesion = (props) => {
    const classes = useStyles();
    const [{sesionUsuario}, dispatch] = useStateValue();
    const [abrirMenuIzquierda, setAbrirMenuIzquierda] = useState(false);
    const [abrirMenuDerecha, setAbrirMenuDerecha] = useState(false);
    const history = useHistory();

    const cerrarMenuIzquierda = () => {
        setAbrirMenuIzquierda(false);
    }

    const abrirMenuIzquierdaAction = () => {
        setAbrirMenuIzquierda(true)
    }

    const cerrarMenuDerecha = () => {
        setAbrirMenuDerecha(false);
    }

    const salirSesionApp = () => {
        console.log('salir sesion')
        localStorage.removeItem('token_seguridad');

        dispatch ({
            type : "SALIR SESION",
            nuevoUsuario : null,
            autenticado : false
        })

        //props.history.push("/auth/login")
        history.push("/auth/login");
    }

    const abrirMenuDerechaAction = () => {
        setAbrirMenuDerecha(true);
    }

    const iniciarSesionApp = () => {
        //props.history.push("/auth/profileuser")
        history.push("/auth/profileuser");
    }

    return (
        <React.Fragment>
            <Drawer
                open = {abrirMenuIzquierda}
                onClose={cerrarMenuIzquierda}
                anchor="left"
            >
                <div className={classes.list} onKeyDown={cerrarMenuIzquierda} onClick={cerrarMenuIzquierda}>
                    <MenuIzquierda classes={classes}/>
                </div>
            </Drawer>

            <Drawer
                open = {abrirMenuDerecha}
                onClose={cerrarMenuDerecha}
                anchor="right"
            >
                <div 
                    role="button"
                    onKeyDown={cerrarMenuDerecha}
                    onClick={cerrarMenuDerecha}
                    >
                    <MenuDerecha 
                        classes={classes} 
                        salirSesion={salirSesionApp}
                        iniciarSesion={salirSesionApp}
                        usuario={sesionUsuario.Usuario}
                        />
                </div>
            </Drawer>

            <Toolbar>
                <IconButton color="inherit" onClick={abrirMenuIzquierdaAction}>
                    <i className='material-icons'>menu</i>
                </IconButton>
                <Typography variant='h6'>Mi Voto</Typography>
                <div className={classes.grow}></div>

                <div className={classes.seccionDesktop} >
                    <Button color="inherit" onClick={salirSesionApp}>
                        Salir
                    </Button>
                    <Button color="inherit" onClick={iniciarSesionApp}>
                        
                        {sesionUsuario?.usuario?.nameUser || "INICIAR SESION"}
                    </Button>
                    <Avatar>
                        {/* Puedes mostrar la inicial del usuario u otra imagen */}
                        {sesionUsuario?.usuario?.nameUser?.charAt(0) || <LockOutlined />}
                    </Avatar>
                </div>
                <div className={classes.seccionMobile}>
                    <IconButton color="inherit" onClick={abrirMenuDerechaAction}>
                        <i className="material-icons">more_vert</i>
                    </IconButton>
                </div>
            </Toolbar>
        </React.Fragment>
    );
};

export default withRouter (BarSesion);