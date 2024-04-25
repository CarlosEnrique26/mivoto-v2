import React, { useState } from "react";
import { Grid, TextField, Typography, Container, Button, Checkbox, FormControlLabel, Link, makeStyles, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import style from "../Tool/Style";

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
    tittle: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    },
    passRecoveryStyle: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centrar verticalmente el contenido
        justifyContent: "center", // Centrar horizontalmente el contenido
        width: "100%",
        marginTop: "15%",
        marginRight: "10%",
        [theme.breakpoints.up("md")]: {
            width: "100%",
            marginTop: "15%",
            marginRight: "10%",
        }
    }
}));

const RegistrarUsuario = (props) => {
    const classes = useStyles();
    const [newuser, setNewUser] = useState({
        nameUser: '',
        lastname: '',
        typedocument: '',
        dni: '',
        email: '',
        login: '',
        password: '',
    });
    const [passConfirm, setPassConfirm] = useState('');
    const [confirmTerm, setConfirmTerm] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Username validation
        if (!newuser.nameUser.trim()) {
            newErrors.nameUser = "Por favor ingrese su nombre.";
        }

        // Last name validation
        if (!newuser.lastname.trim()) {
            newErrors.lastname = "Por favor ingrese sus apellidos.";
        }

        // Document type validation
        if (!newuser.typedocument) {
            newErrors.typedocument = "Por favor seleccione un tipo de documento.";
        }

        // Document number validation
        if (!newuser.dni.trim()) {
            newErrors.dni = "Por favor ingrese su número de documento.";
        }

        // Email validation
        if (!newuser.email.trim()) {
            newErrors.email = "Por favor ingrese su correo electrónico.";
        } else if (!/\S+@\S+\.\S+/.test(newuser.email.trim())) {
            newErrors.email = "Por favor ingrese un correo electrónico válido.";
        }

        // Username validation
        if (!newuser.login.trim()) {
            newErrors.login = "Por favor ingrese un nombre de usuario.";
        }

        // Password validation
        if (!newuser.password.trim()) {
            newErrors.password = "Por favor ingrese una contraseña.";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(newuser.password.trim())) {
            newErrors.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número.";
        }

        // Password confirmation validation
        if (newuser.password !== passConfirm) {
            newErrors.passConfirm = "Las contraseñas no coinciden.";
        }

        // Terms and conditions validation
        if (!confirmTerm) {
            newErrors.confirmTerm = "Es necesario aceptar los términos y condiciones.";
        }

        // Update errors state
        setErrors(newErrors);

        // Return true if there are no errors, false otherwise
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmChange = (e) => {
        setPassConfirm(e.target.value);
    };

    const handleCheckChange = () => {
        setConfirmTerm(!confirmTerm); // Toggle the value of confirmTerm
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (!confirmTerm) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    confirmTerm: "Es necesario aceptar los términos y condiciones."
                }));
            } else {
                // Your save user logic
                console.log('New user:', newuser);
                props.history.push("/auth/login");
            }
        }
    };

    return (
        <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100%" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} className={classes.seccionDesktop}></Grid>
                <Grid item xs={12} md={8} style={style.grid1} justify-content="flex-end">
                    <form className={classes.passRecoveryStyle} onSubmit={handleSubmit}>
                        <div className={classes.tittle}>
                        <Typography component="h1" variant="h4">
                            Bienvenido,
                        </Typography>
                        <Typography component="h6" variant="h6">
                            Solo toma unos segundos crear su cuenta
                        </Typography>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="nameUser"
                                    value={newuser.nameUser}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese su nombre"
                                    error={errors.nameUser}
                                    helperText={errors.nameUser}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="lastname"
                                    value={newuser.lastname}
                                    onChange={handleChange}
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese sus apellidos"
                                    error={errors.lastname}
                                    helperText={errors.lastname}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Tipo de Documento</InputLabel>
                                    <Select
                                        value={newuser.typedocument}
                                        onChange={handleChange}
                                        name="typedocument"
                                        label="Tipo de Documento"
                                        fullWidth
                                        error={errors.typedocument}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value={"NIF"}>NIF</MenuItem>
                                        <MenuItem value={"CIF"}>CIF</MenuItem>
                                        <MenuItem value={"NIE"}>NIE</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={newuser.dni}
                                    onChange={handleChange}
                                    name="dni"
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese su numero de documento"
                                    error={errors.dni}
                                    helperText={errors.dni}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={newuser.email}
                                    onChange={handleChange}
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese su correo electrónico"
                                    error={errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={newuser.login}
                                    onChange={handleChange}
                                    name="login"
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese un nombre de usuario"
                                    error={errors.login}
                                    helperText={errors.login}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={newuser.password}
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    label="Ingrese su contraseña"
                                    error={errors.password}
                                    helperText={errors.password}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="passConfirm"
                                    value={passConfirm}
                                    onChange={handleConfirmChange}
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    label="Confirme su contraseña"
                                    error={errors.passConfirm}
                                    helperText={errors.passConfirm}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={confirmTerm} onChange={handleCheckChange} />}
                                    label="Aceptar nuestros términos y condiciones"
                                    error={errors.confirmTerm ? true : false}
                                    helperText={errors.confirmTerm}
                                />
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Typography>
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link href="/auth/login">Ingresar</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <Button
                                    type="button"
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    style={style.submit1}
                                >
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegistrarUsuario;
        /*
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
        */