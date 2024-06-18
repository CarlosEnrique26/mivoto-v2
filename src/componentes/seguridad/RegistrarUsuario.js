import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Container,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import style from "../Tool/Style";
import { validateForm } from "../seguridad/validaciones/ValidacionRegistro";
import { SaveUserCredential } from "../../actions/RegistroUsuarioAction";
import { useStateValue } from "../../context/store";

const useStyles = makeStyles((theme) => ({
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
    login: '',
    password: '',
    nameUser: '',
    lastName: '',
    typeDocument: '',
    dni: '',
    email: '',
    logoName: '',
    logoPath: '',
    passConfirm: '',
    IsActive: true,
  });
  const [passConfirm, setPassConfirm] = useState('');
  const [confirmTerm, setConfirmTerm] = useState(false);
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [{sesionUsuario}, dispatch] = useStateValue();

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
    const newErrors = validateForm(newuser, passConfirm, confirmTerm);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!confirmTerm) {
        setErrors(prevErrors => ({
          ...prevErrors,
          confirmTerm: "Es necesario aceptar los términos y condiciones."
        }));
      } else {
        SaveUserCredential(newuser)
          .then(response => {
            console.log('User saved successfully:', response);
            setOpenModal(true); // Open modal on success
          })
          .catch(error => {
            console.error('Error saving user:', error);
            setErrors({ submit: "Error al guardar el usuario." });
          });
      }
    }

    // Print all form data to console
    console.log('Form data:', {
      ...newuser,
      confirmTerm
    });
  };

  const handleClose = () => {
    setOpenModal(false);
    props.history.push("/auth/login");
  };

  return (
    <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className={classes.seccionDesktop}></Grid>
        <Grid item xs={12} md={8} style={style.grid1} justify-content="flex-end">
          <form className={classes.passRecoveryStyle}>
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
                  error={!!errors.nameUser}
                  helperText={errors.nameUser}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="lastName"
                  value={newuser.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  label="Ingrese sus apellidos"
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Tipo de Documento</InputLabel>
                  <Select
                    value={newuser.typeDocument}
                    onChange={handleChange}
                    name="typeDocument"
                    label="Tipo de Documento"
                    fullWidth
                    error={!!errors.typeDocument}
                  >
                    <MenuItem value="">
                      <em>Seleccione</em>
                    </MenuItem>
                    <MenuItem value={"1"}>NIF</MenuItem>
                    <MenuItem value={"2"}>CIF</MenuItem>
                    <MenuItem value={"3"}>NIE</MenuItem>
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
                  error={!!errors.dni}
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
                  error={!!errors.email}
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
                  error={!!errors.login}
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
                  error={!!errors.password}
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
                  error={!!errors.passConfirm}
                  helperText={errors.passConfirm}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" checked={confirmTerm} onChange={handleCheckChange} />}
                  label="Aceptar nuestros términos y condiciones"
                  error={!!errors.confirmTerm}
                />
                {errors.confirmTerm && (
                  <Typography color="error" variant="caption">
                    {errors.confirmTerm}
                  </Typography>
                )}
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
            {errors.submit && (
              <Typography color="error" variant="caption">
                {errors.submit}
              </Typography>
            )}
          </form>
          <Dialog
            open={openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Registro Exitoso"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Será redirigido a la pantalla de login.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrarUsuario;