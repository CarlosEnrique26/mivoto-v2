import {
    Button,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    Checkbox,
    MenuItem,
    InputLabel,
    FormControl,
    Select,
    IconButton,
} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
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
        width: '100%',
    },
    grupobutton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '70%',
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
        width: '100%',
    },
    alineado: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%',
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
        transform: 'scale(1.5)',
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
        width: '80%',
        margin: theme.spacing(1),
    },
    // Styles for mobile
    alineadoMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%',
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

const PrePrincipal = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        registroUnico: false,
        nombre: '',
        cargarCensoCSV: '',
        cargarOtrasOpcionesCSV: false,
        logoSuperior: '',
        url: '',
        envioCredencialesAlRegistrarse: '',
        vincularConVotacion: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const handleButtonClick = (action) => {
        // Implementar las funciones específicas para cada botón
        console.log(`Action: ${action}`);
    };

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <div>
            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                    <div className={classes.groupalineado}>
                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Registro único</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="registroUnico"
                                        checked={formData.registroUnico}
                                        onChange={handleInputChange}
                                        className={classes.largerCheckbox}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Registro único</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="registroUnico"
                                        checked={formData.registroUnico}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Nombre</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Nombre</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Cargar censo csv</Typography>
                                </div>
                                <div className={classes.grupobutton}>
                                    <div className={classes.roots}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarPlantilla')}
                                        >
                                            Descargar Plantilla
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarFicheroFinal')}
                                        >
                                            Descargar Fichero Final
                                        </Button>
                                        <input
                                            accept=".csv"
                                            className={classes.input}
                                            id="cargarCensoCSV"
                                            name="cargarCensoCSV"
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="cargarCensoCSV">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Censo
                                            </Button>
                                        </label>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarCenso')}
                                        >
                                            Descargar Censo
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('eliminarCenso')}
                                        >
                                            Eliminar Censo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.alineadoMovile}>
                                    <div className={classes.element}>
                                        <Typography style={{ fontSize: 18 }}>Cargar censo csv</Typography>
                                    </div>
                                    <div className={classes.roots}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarPlantilla')}
                                        >
                                            Descargar Plantilla
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarFicheroFinal')}
                                        >
                                            Descargar Fichero Final
                                        </Button>
                                        <input
                                            accept=".csv"
                                            className={classes.input}
                                            id="cargarCensoCSV"
                                            name="cargarCensoCSV"
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="cargarCensoCSV">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Censo
                                            </Button>
                                        </label>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('descargarCenso')}
                                        >
                                            Descargar Censo
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            component="span"
                                            onClick={() => handleButtonClick('eliminarCenso')}
                                        >
                                            Eliminar Censo
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Cargar otras opciones csv</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="cargarOtrasOpcionesCSV"
                                        checked={formData.cargarOtrasOpcionesCSV}
                                        onChange={handleInputChange}
                                        className={classes.largerCheckbox}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Cargar otras opciones csv</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="cargarOtrasOpcionesCSV"
                                        checked={formData.cargarOtrasOpcionesCSV}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Logo superior</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <div className={classes.roots}>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="logoSuperior"
                                            name="logoSuperior"
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="logoSuperior">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Imagen
                                            </Button>
                                        </label>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="icon-button-file"
                                            type="file"
                                        />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.alineadoMovile}>
                                    <div className={classes.element}>
                                        <Typography style={{ fontSize: 18 }}>Logo superior</Typography>
                                    </div>
                                    <div className={classes.roots}>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="logoSuperior"
                                            name="logoSuperior"
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="logoSuperior">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Imagen
                                            </Button>
                                        </label>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="icon-button-file"
                                            type="file"
                                        />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera />
                                            </IconButton>
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>URL</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="url"
                                        value={formData.url}
                                        onChange={handleInputChange}
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>URL</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="url"
                                        value={formData.url}
                                        onChange={handleInputChange}
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Envío credenciales al registrarse</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="envioCredencialesAlRegistrarse-label">Envío credenciales al registrarse</InputLabel>
                                        <Select
                                            name="envioCredencialesAlRegistrarse"
                                            labelId="envioCredencialesAlRegistrarse-label"
                                            id="envioCredencialesAlRegistrarse"
                                            value={formData.envioCredencialesAlRegistrarse}
                                            onChange={handleInputChange}
                                            label="Envío credenciales al registrarse"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ambos</MenuItem>
                                            <MenuItem value={20}>Correos</MenuItem>
                                            <MenuItem value={30}>SMS</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Envío credenciales al registrarse</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="envioCredencialesAlRegistrarse-label">Envío credenciales al registrarse</InputLabel>
                                        <Select
                                            name="envioCredencialesAlRegistrarse"
                                            labelId="envioCredencialesAlRegistrarse-label"
                                            id="envioCredencialesAlRegistrarse"
                                            value={formData.envioCredencialesAlRegistrarse}
                                            onChange={handleInputChange}
                                            label="Envío credenciales al registrarse"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ambos</MenuItem>
                                            <MenuItem value={20}>Correos</MenuItem>
                                            <MenuItem value={30}>SMS</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Vincular con votación</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="vincularConVotacion-label">Vincular con votación</InputLabel>
                                        <Select
                                            name="vincularConVotacion"
                                            labelId="vincularConVotacion-label"
                                            id="vincularConVotacion"
                                            value={formData.vincularConVotacion}
                                            onChange={handleInputChange}
                                            label="Vincular con votación"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Prueba 1</MenuItem>
                                            <MenuItem value={20}>Prueba 2</MenuItem>
                                            <MenuItem value={30}>Prueba 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Vincular con votación</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="vincularConVotacion-label">Vincular con votación</InputLabel>
                                        <Select
                                            name="vincularConVotacion"
                                            labelId="vincularConVotacion-label"
                                            id="vincularConVotacion"
                                            value={formData.vincularConVotacion}
                                            onChange={handleInputChange}
                                            label="Vincular con votación"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Prueba 1</MenuItem>
                                            <MenuItem value={20}>Prueba 2</MenuItem>
                                            <MenuItem value={30}>Prueba 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default PrePrincipal;