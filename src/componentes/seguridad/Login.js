import React, { useState, useEffect } from "react";
import style from "../Tool/Style";
import { Container, Typography, Grid, TextField, Button, Link ,
        FormControlLabel,Checkbox,CardMedia,Box, makeStyles} from "@material-ui/core";
//import { loginUser } from '../../actions/UserAction';
//import { useStateValue } from '../../context/store';
//import { withRouter } from "react-router-dom"; 
//import swal from 'sweetalert';

const useStyles = makeStyles((theme) =>({
    seccionDesktop: {
        display: "flex",
        flexDirection: "column", // Cambiar a dirección de columna en pantallas móviles
        justifyContent: "flex-start", // Alinear al principio en pantallas móviles
        height: "8vh", // Altura reducida en pantallas móviles
        backgroundColor: "#56c111",
        [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "row", // Volver a la dirección de fila en pantallas medianas y grandes
        justifyContent: "center", // Alinear al centro en pantallas medianas y grandes
        height: "100vh", // Altura completa en pantallas medianas y grandes
        },
    },
}));

const Login = (props) => {
    const classes = useStyles();
    const [usuario, setUsuario] = useState({
        Login: '',
        Password: ''
    })

    const SaveValors = e => {
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name] : value
        }));
    }

    const loginUsuarioBoton = e => {
        e.preventDefault();
        
        // Regular expressions for validation
        const usernameRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    
        // Validate username
        if (!usuario.Login.trim()) {
            alert("Por favor ingrese su nombre de usuario.");
            return;
        } else if (!usernameRegex.test(usuario.Login.trim())) {
            alert("El nombre de usuario solo puede contener letras y números.");
            return;
        }
    
        // Validate password
        if (!usuario.Password.trim()) {
            alert("Por favor ingrese su contraseña.");
            return;
        } else if (!passwordRegex.test(usuario.Password.trim())) {
            alert("La contraseña debe tener al menos ocho caracteres, una letra y un número.");
            return;
        }
    
        // If the input is valid, proceed with login
        console.log('Intento de inicio de sesión:', usuario);
        props.history.push("/auth/pagprincipal");
    }
       // console.log('login exitoso', usuario)
      //  props.history.push("/auth/pagprincipal")
    

    const OlvidadoContraseña = e => {
        e.preventDefault();
        console.log('ha olvidado su contraseña', usuario)
        props.history.push("/auth/passrecovery")
    }

    return (
        <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100"}}>
            <Grid container spacing={2 } >
                
                <Grid item xs={12} md={4} className={classes.seccionDesktop}>
                    <Box height={"100%"}>
            
                    </Box> 
                </Grid>

                <Grid item xs={12} md={8}>
                    <div style={{ marginTop : "25%", marginLeft:"10%", marginRight : "20%"}}>
                            {/* <Avatar style={style.avatar} >
                                <LockOutlinedIcon style={style.icon} />
                            </Avatar>*/}
                            <Typography component="h1" variant="h4">
                                MiVoto
                            </Typography> 
                            <label style={{ fontSize: 18 }}>Bienvenido de nuevo</label>
                            <label style={{ fontSize: 18 }}> Inicie sesión en su cuenta </label>
                            <label style={{ fontSize: 18 }}> ¿Sin cuenta? </label>
                                    <Link href="/auth/registrarusuario" style={{ fontSize: 18,marginLeft : 5 }}>
                                        Regístrate ahora
                                    </Link>
                            <form>
                                <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <TextField name="Login" value={usuario.Login} onChange={SaveValors}
                                            variant="outlined" fullWidth label="Ingrese su nombre" margin="normal" /> 
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField name="Password" value={usuario.Password} onChange={SaveValors}
                                            type="password" variant="outlined" fullWidth label="Ingrese su contraseña" margin="normal" />
                                        </Grid>
                                </Grid>

                                <Grid>
                                <FormControlLabel
                                        value="end"
                                        control={<Checkbox color="primary" />}
                                        label="Seguir conectado" 
                                        />
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3} >
                                        <Button type="button" onClick={loginUsuarioBoton} fullWidth variant="contained" color="primary" size="large" style={style.submit}>
                                            Ingresar 
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} md={3} >
                                        <Button type="button" onClick={OlvidadoContraseña} fullWidth   color="primary" size="large" style={style.submit}>
                                                Olvide mi contraseña 
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Login;