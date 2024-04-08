import React, { useState } from "react";
import { Avatar, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography, makeStyles} from "@material-ui/core";
import style from "../Tool/Style"
import { LockOutlined } from "@material-ui/icons";
//import swal from 'sweetalert';
//import { Link as RouterLink } from 'react-router-dom';
//import { saveUser } from '../../actions/UserAction';

const useStyles = makeStyles((theme) =>({
    seccionDesktop: {
        display: "flex",
        flexDirection: "column", // Cambiar a dirección de columna en pantallas móviles
        justifyContent: "flex-start", // Alinear al principio en pantallas móviles
        height: "6vh", // Altura reducida en pantallas móviles
        backgroundColor: "#56c111",
        [theme.breakpoints.up("md")]: {
        display: "flex",
        backgroundColor: "#56c111",
        height: "100vh",
        },
    },
    passRecoveryStyle: {
        
        },   [theme.breakpoints.up("md")]: {
        width:"100%",
        marginTop : "15%",
        marginRight:"10%"
    }
}));


const RegistrarUsuario = (props) => {
    const classes = useStyles();
    const [newuser, setNewUser] = useState({
        login: '',
        password: '',
        typeUserid: '',
        nameUser: '',
        lastname: '',
        dni: '',
        enterpriseid: '',
        typedocument: '',
        email : ''
    }); 

    const [ confirmTerm, setConfirmTerm ] = useState(false);
    const [passConfirm, setNewConfirm] = useState("");

    const setValuesForUser = (ev) => {
        const { name, value } = ev.target;
        setNewUser(last => ({
            ...last,
            [name]: value
        }))
    }

    const changeNewConfirm = (e) => {
        const { value } = e.target;
        setNewConfirm(value);
    }
    
    const handlerCheck = (e) =>{
        const { checked } = e.target;
        setConfirmTerm(checked); 
    }

    const saveNewUser = (e) => {
        e.preventDefault();  
        /*if(confirmTerm){
            if (passConfirm === newuser.password) {
                saveUser(newuser).then(response => {
                    if (response.isSuccess) {
                        swal({
                            title: "Correcto",
                            text: "Usuario registrado correctamente, en breves momentos recibirá un mensaje de confirmación ",
                            icon: "success", 
                        })
                        .then((willDelete) => {
                            if (willDelete) {
                                props.history.push("/auth/login"); 
                            }  
                        });
                    } else {
                        swal("Incorrecto!", response.message, "warning"); 
                    } 
                });
            } else {
                swal("Incorrecto!", " Comprueba el usuario y/o contraseña " , "warning"); 
            } 
        }else{
            swal("Advertencia!", " Es necesario que acepte los términos y condiciones " , "warning"); 
        }
    */
    console.log('usuario',newuser)
    props.history.push("/auth/login");
    }
    
    return(
        <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100"}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}  className={classes.seccionDesktop}></Grid>
                <Grid item xs={12} md={8} style={style.grid1}  justify-content="flex-end">
                <form className={classes.passRecoveryStyle}>
                    <Typography component="h1" variant="h4">
                        Bienvenido,
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Solo toma unos segundos crear su cuenta
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                                <TextField name="nameUser" 
                                value={newuser.nameUser} 
                                onChange={setValuesForUser} 
                                variant="outlined"  
                                fullWidth 
                                label="Ingrese su nombre" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField name="lastname" 
                                value={newuser.lastname}
                                onChange={setValuesForUser}   
                                variant="outlined" 
                                fullWidth label="Ingrese sus apellidos" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Tipo de Documento</InputLabel>
                                    <Select
                                        value={newuser.typedocument} onChange={setValuesForUser}
                                        name="typedocument"
                                        label="Tipo de Documento"
                                        fullWidth
                                    >
                                        <MenuItem value="0">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value={"NIF"}>NIF</MenuItem>
                                        <MenuItem value={"CIF"}>CIF</MenuItem>
                                        <MenuItem value={"NIE"}>NIE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={newuser.dni} onChange={setValuesForUser} name="dni" variant="outlined" fullWidth label="Ingrese su numero de documento" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={newuser.email} onChange={setValuesForUser} name="email" variant="outlined" fullWidth label="Ingrese su correo electrónico" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={newuser.login} onChange={setValuesForUser} name="login" variant="outlined" fullWidth label="Ingrese un nombre de usuario" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField value={newuser.password} onChange={setValuesForUser} name="password" type="password" variant="outlined" fullWidth label="Ingrese su contraseña" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField name="confirmpassword" value={passConfirm} onChange={changeNewConfirm} type="password" variant="outlined" fullWidth label="Confirme su contraseña" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormControlLabel
                                        value={confirmTerm}
                                        control={<Checkbox color="primary" />} 
                                        onChange={handlerCheck}
                                        />
                                <label style={{ fontSize: 18 }}>
                                    Aceptar nuestros
                                </label>
                                <Link href="#" onClick={""} style={{ fontSize: 18,marginLeft : 5 }}>
                                    términos y condiciones
                                </Link>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                    <label style={{ fontSize: 18 }}>
                                        ¿Ya tienes una cuenta? 
                                    </label>
                                    <Link href="/auth/login" style={{ fontSize: 18,marginLeft : 5 }}>
                                            Ingresar
                                    </Link>
                            </Grid>

                            <Grid item xs={12} md={2} >
                                <Button type="submit" onClick={saveNewUser}  variant="contained" color="primary" size="large" style={style.submit1}>
                                        Crear cuenta
                                </Button>
                            </Grid>
                    </Grid>
                </form>
                </Grid>
            </Grid>
        </Container>
    )
};

export default RegistrarUsuario;