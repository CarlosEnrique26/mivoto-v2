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

const PassRecovery = ({ visible ,funcVisible,actionSave}) => {
    const classes = useStyles();
    const [openDialog, setOpenDialig] = useState(false);
    const [email, setOpenEmail] = useState("");

    const handleClose = () =>{
        funcVisible(false);
    }

    const changeInputEmail = (e) =>{ 
        setOpenEmail(e.target.value);
        
    }

    const usercredentialById = () =>{
        getUsersCredentialByEmail(email).then(response => {
            
        })
    }

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
                                        <TextField variant="outlined" 
                                        onChange={changeInputEmail}
                                        fullWidth label="Correo electrónico" margin="normal" />        
                            </Grid>  

                            <Grid item xs={12} md={6} >
                            
                                <Button onClick={usercredentialById} variant="contained" color="primary">
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