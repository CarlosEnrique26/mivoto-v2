import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  Box,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
//import { useHistory, withRouter } from 'react-router-dom';
import { validateLogin } from '../seguridad/validaciones/ValidacionLogin';
import style from "../Tool/Style";
import { loginUser } from "../../actions/LoginAction";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../../context/store";

const useStyles = makeStyles((theme) => ({
  seccionDesktop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "8vh",
    backgroundColor: "#56c111",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "center",
      height: "100vh",
    },
  },
}));

const Login = (props) => {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const classes = useStyles();
  const history = useHistory();
  const [usuario, setUsuario] = useState({
    Login: "",
    Password: "",
  });

  const SaveValors = (e) => {
    const { name, value } = e.target;
    setUsuario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const loginUsuarioBoton = e => {
    e.preventDefault();
    loginUser(usuario, dispatch).then(response => {
      console.log('login exitoso', usuario);
        window.localStorage.setItem('token_seguridad', response.data.token);
        props.history.push("/auth/profileuser");
        })
      }
      
  const OlvidadoContraseña = (e) => {
    e.preventDefault();
    console.log("ha olvidado su contraseña", usuario);
    props.history.push("/auth/passrecovery");
  };

  return (
    <Container component="main" maxWidth={false} style={{ backgroundColor: "", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className={classes.seccionDesktop}>
          <Box height={"100%"}></Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <div style={{ marginTop: "25%", marginLeft: "10%", marginRight: "20%" }}>
            <Typography component="h1" variant="h4">
              MiVoto
            </Typography>
            <label style={{ fontSize: 18 }}>Bienvenido de nuevo</label>
            <label style={{ fontSize: 18 }}>Inicie sesión en su cuenta</label>
            <label style={{ fontSize: 18 }}>¿Sin cuenta?</label>
            <Link href="/auth/registrarusuario" style={{ fontSize: 18, marginLeft: 5 }}>
              Regístrate ahora
            </Link>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="Login"
                    value={usuario.Login}
                    onChange={SaveValors}
                    variant="outlined"
                    fullWidth
                    label="Ingrese su nombre"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    name="Password"
                    value={usuario.Password}
                    onChange={SaveValors}
                    type="password"
                    variant="outlined"
                    fullWidth
                    label="Ingrese su contraseña"
                    margin="normal"
                  />
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
                <Grid item xs={6} md={3}>
                  <Button
                    type="button"
                    onClick={loginUsuarioBoton}
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    style={style.submit}
                  >
                    Ingresar
                  </Button>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Button
                    type="button"
                    onClick={OlvidadoContraseña}
                    fullWidth
                    color="primary"
                    size="large"
                    style={style.submit}
                  >
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
};

export default withRouter(Login);