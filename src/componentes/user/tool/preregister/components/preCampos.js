import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, MenuItem, InputLabel, FormControl, Select, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    button: {
        margin: theme.spacing(1),
        width: '100%'
    },
    horizontal: {
        flexDirection: 'row',
    },
    groupalineado: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    alineado: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    cajones: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    largerCheckbox: {
        transform: "scale(1.5)",
    },
    roots: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    formControlSelect: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
        margin: theme.spacing(1),
    },
    // Styles for mobile
    alineadoMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    SelectMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
        margin: theme.spacing(1),
    },
}));

const PreCampos = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        nombreDeCampo: '',
        obligatorio: false,
        relacion: '',
        tipoDeCambio: '',
        campoDeControl: false,
        activo: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <div>
            <Grid container spacing={3} style={{ marginTop: 20 }}>
                <Grid item xs={12} md={6}>
                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Nombre de Campo</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <TextField
                                    name="nombreDeCampo"
                                    value={formData.nombreDeCampo}
                                    onChange={handleInputChange}
                                    style={{ width: '80%' }}
                                    color='primary'
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Nombre de Campo</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <TextField
                                    name="nombreDeCampo"
                                    value={formData.nombreDeCampo}
                                    onChange={handleInputChange}
                                    style={{ width: '100%' }}
                                    color='primary'
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Obligatorio</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="obligatorio"
                                    checked={formData.obligatorio}
                                    onChange={handleInputChange}
                                    className={classes.largerCheckbox}
                                    color="primary"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Obligatorio</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="obligatorio"
                                    checked={formData.obligatorio}
                                    onChange={handleInputChange}
                                    className={classes.largerCheckbox}
                                    color="primary"
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Relación</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                    <InputLabel id="relacion-label">Relación</InputLabel>
                                    <Select
                                        name="relacion"
                                        labelId="relacion-label"
                                        id="relacion"
                                        value={formData.relacion}
                                        onChange={handleInputChange}
                                        label="Relación"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Login">Login</MenuItem>
                                        <MenuItem value="Nombre">Nombre</MenuItem>
                                        <MenuItem value="Documento">Documento</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                        <MenuItem value="Equipo">Equipo</MenuItem>
                                        <MenuItem value="Apellidos">Apellidos</MenuItem>
                                        <MenuItem value="Otras Opciones">Otras Opciones</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Relación</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <FormControl variant="outlined" className={classes.SelectMovile}>
                                    <InputLabel id="relacion-label">Relación</InputLabel>
                                    <Select
                                        name="relacion"
                                        labelId="relacion-label"
                                        id="relacion"
                                        value={formData.relacion}
                                        onChange={handleInputChange}
                                        label="Relación"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Login">Login</MenuItem>
                                        <MenuItem value="Nombre">Nombre</MenuItem>
                                        <MenuItem value="Documento">Documento</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                        <MenuItem value="Equipo">Equipo</MenuItem>
                                        <MenuItem value="Apellidos">Apellidos</MenuItem>
                                        <MenuItem value="Otras Opciones">Otras Opciones</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tipo de Cambio</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                    <InputLabel id="tipoDeCampo-label">Tipo de Cambio</InputLabel>
                                    <Select
                                        name="tipoDeCambio"
                                        labelId="tipoDeCampo-label"
                                        id="tipoDeCampo"
                                        value={formData.tipoDeCambio}
                                        onChange={handleInputChange}
                                        label="Tipo de Cambio"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Numerico">Numerico</MenuItem>
                                        <MenuItem value="Texto">Texto</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Tipo de Cambio</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <FormControl variant="outlined" className={classes.SelectMovile}>
                                    <InputLabel id="tipoDeCampo-label">Tipo de Cambio</InputLabel>
                                    <Select
                                        name="tipoDeCambio"
                                        labelId="tipoDeCampo-label"
                                        id="tipoDeCampo"
                                        value={formData.tipoDeCambio}
                                        onChange={handleInputChange}
                                        label="Tipo de Cambio"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Numerico">Numerico</MenuItem>
                                        <MenuItem value="Texto">Texto</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Campo de control</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="campoDeControl"
                                    checked={formData.campoDeControl}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Campo de Control</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="campoDeControl"
                                    checked={formData.campoDeControl}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Activo</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="activo"
                                    checked={formData.activo}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Activo</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="activo"
                                    checked={formData.activo}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default PreCampos;