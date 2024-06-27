import React, { useEffect, useState } from "react";
import style from "../Tool/Style";
import { Container, TextField, Typography, Grid, Button, Avatar, Card } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useStateValue } from "../../context/store";


const ProfileUser = (props) => {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const [usuario, setUsuario] = useState({
        id: "",
        login: "",
        password: "",
        nameUser: "",
        lastName: "",
        typeDocument: "",
        dni: "",
        email: "",
        logoName: "",
        logoPath: "",
        isActive: true,
        profileId: ""
    });

    const [passwordConfirmar, setNewConfirmar] = useState("");

    const SaveValors = e => {
        const {name, value} = e.target;
        setUsuario(anterior => ({
            ...anterior,
            [name] : value
        }));
    }

    useEffect(() => {
        if (sesionUsuario) {
            setUsuario({
                ...usuario,
                nameUser: sesionUsuario.nameUser || '',
                lastName: sesionUsuario.lastName || '',
                login: sesionUsuario.login || '',
                email: sesionUsuario.email || '',
                password: '',
            });
        }
    }, [sesionUsuario]);

    /*
    useEffect (() => {
        setUsuario(sesionUsuario.usuario);
        setUsuario((...anterior) => ({
            ...anterior,
            fotoUrl: sesionUsuario.usuario.imagenPerfil,
            imagenPerfil : null
        }));
    }, []);
    */
    const ProfileUserBoton = e => {
        e.preventDefault();
        console.log('Datos del usuario guardados', usuario);
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
                            <TextField name="nameUser" value={usuario.nombres} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese sus nombres"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="lastName" value={usuario.lastName} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese sus apellidos"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="login" value={usuario.login} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese su username"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="email" value={usuario.email} onChange={SaveValors} variant="outlined" fullWidth label="Ingrese email"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={usuario.password} onChange={SaveValors} type="password" variant="outlined" fullWidth label="Ingrese password"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField name="password" value={passwordConfirmar} onChange={changeNewConfirmar} type="password" variant="outlined" fullWidth label="Confirme password"/>
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