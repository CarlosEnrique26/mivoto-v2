import React, { useEffect, useState } from "react";
import style from "../Tool/Style";
import { Container, TextField, Typography, Grid, Button, Avatar, Card } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useStateValue } from "../../context/store";


const ProfileUser = (props) => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const [usuario, setUsuario] = useState({
        nombres: '',
        apellidos: '',
        username:'',
        email:'',
        password:'',
        ConfirmarPassword:''
    });

    const [passwordConfirmar, setNewConfirmar] = useState("");

    const SaveValors = e => {
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name] : value
        }));
    }
    
    useEffect (() => {
        setUsuario(sesionUsuario.usuario);
        setUsuario((...anterior) => ({
            ...anterior,
            fotoUrl: sesionUsuario.usuario.imagenPerfil,
            imagenPerfil : null
        }));
    }, []);
    
    const ProfileUserBoton = e => {
        e.preventDefault();
        console.log('login exitoso', usuario)
        props.history.push("/auth/login");
    }
    
    const changeNewConfirmar = (e) => {
        const { value } = e.target;
        setNewConfirmar(value);
    }

    return (
        <Container maxWidth={false} justify="center" style={style.barSup}>
            <Container maxWidth="md" justify="center">
                <Grid style={style.barContainProfileUser}>
                <div style={style.avatarcontainer}>
                    <Avatar justify="center" style={{width:"150px", height: "150px", alignItems:"center", margin:"10px"}}>
                        <LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ margin:"10px"}}>
                        Perfil de Usuario
                    </Typography>
                </div>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombres" value={usuario.nombres} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese sus nombres"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="apellidos" value={usuario.apellidos} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese sus apellidos"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="username" value={usuario.username} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese su username"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" value={usuario.email} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese email"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={usuario.password} onChange={SaveValors} type="password" variant="outlined" fullWidth label="Ingrese password"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="ConfirmarPassword" value={passwordConfirmar} onChange={changeNewConfirmar} type="password" variant="outlined" fullWidth label="Confirme password"/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md="6">
                            <Button type="submit" onClick={ProfileUserBoton} fullWidth variant="contained" size="large" color="primary" style={style.submit}>
                                Guardar Datos
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                </Grid>
            </Container>
        </Container>
    );
}

export default ProfileUser;