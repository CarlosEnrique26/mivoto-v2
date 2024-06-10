import React, { useState } from "react";
import { IconButton, Toolbar, Typography, makeStyles, Button, Avatar, Drawer } from '@material-ui/core';
import { MenuIzquierda } from "./menuIzquierda";
import { MenuDerecha } from "./menuDerecha";
import { withRouter } from "react-router-dom"
import { useStateValue } from "../../../context/store";

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
        localStorage.remove('token_seguridad');
        props.history.push("/auth/login")
    }

    const abrirMenuDerechaAction = () => {
        setAbrirMenuDerecha(true);
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
                    <Button color="inherit" >
                        Salir
                    </Button>
                    <Button color="inherit">
                        
                        {sesionUsuario ? sesionUsuario.usuario.nameUser: ''}
                    </Button>
                    <Avatar>

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