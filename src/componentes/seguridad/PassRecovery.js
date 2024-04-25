import { Button, Container,Grid,Box, TextField,
    Typography,Dialog,DialogTitle,
    DialogContent,DialogActions, Link, makeStyles } from "@material-ui/core";
import React,{useState} from "react";
import style from "../Tool/Style";
import  { getUsersCredentialByEmail } from "../../actions/UserAction";

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
    passRecoveryStyle: {
        display: "flex",
        marginTop: 20,
        [theme.breakpoints.up("md")]: {
        display: "flex",
        marginTop : "25%",
        marginLeft:"10%", 
        marginRight : "20%"
        },
    }
}));

const PassRecovery = ({ visible, funcVisible }) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const passrecoveryBoton = (e) => {
        e.preventDefault();
        // Validar el formato del correo electrónico
        if (!validateEmail(email)) {
            setErrorMessage("Por favor ingrese un correo electrónico válido.");
            return;
        }
        // Llamar a la función para recuperar la contraseña
        usercredentialById();
    };

    const usercredentialById = () => {
        getUsersCredentialByEmail(email)
            .then((response) => {
                // Manejar la respuesta de la recuperación de la contraseña
                console.log(response);
                // Mostrar mensaje de éxito o error según la respuesta
                if (response.success) {
                    setErrorMessage("Se ha enviado una nueva contraseña a su correo electrónico.");
                } else {
                    setErrorMessage("No se pudo recuperar la contraseña. Por favor, inténtelo de nuevo más tarde.");
                }
            })
            .catch((error) => {
                // Manejar errores de la solicitud
                console.error("Error:", error);
                setErrorMessage("Ocurrió un error al intentar recuperar la contraseña. Por favor, inténtelo de nuevo más tarde.");
            });
    };

    const validateEmail = (email) => {
        // Validar el formato del correo electrónico usando una expresión regular
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };


    return(

        <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100"}}>
            <Grid container spacing={2 } >
                <Grid item xs={12} md={4} className={classes.seccionDesktop}>
                    <Box height={"100%"}>
            
                    </Box> 
                </Grid>
                    <Grid item xs={12} md={8} style={style.grid}  justify="flex-end">
                    <form className={classes.passRecoveryStyle}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} >
                                <Typography component="h5" variant="h5">
                                    Si ha olvidado su contraseña, ingrese el correo electrónico con el que accede el área de clientes y pulse el botón Recuperar.
                                    En breve le remitiremos su nueva contraseña de acceso al correo informado.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12} >
                                    <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Correo electrónico"
                                    value={email}
                                    onChange={handleChangeEmail}
                                    error={!!errorMessage}
                                    helperText={errorMessage}
                                />        
                            </Grid>  

                            <Grid item xs={12} md={6} >
                            
                                <Button type="button" onClick={passrecoveryBoton} variant="contained" color="primary">
                                    Recuperar contraseña
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                    <Link href="/auth/login" style={{ fontSize: 18,marginLeft : 5 }}>
                                    Iniciar sesión con una cuenta existente
                                    </Link> 
                            </Grid> 
                        </Grid>
                    </form>
                    </Grid>

                    </Grid>
    </Container>
    
    
    )
}

export default PassRecovery;