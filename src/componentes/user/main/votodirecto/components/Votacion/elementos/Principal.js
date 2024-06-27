import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, MenuItem, InputLabel, FormControl, Select, IconButton } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { VotationContext } from '../../../../../../../context/VotationContext';

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

const Principal = () => {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        cantidadUsuarios: '',
        titulo: '',
        peso: false,
        modoVoto: '',
        autentificarVotacion: false,
        envioPreguntas: false,
        votacionSegmentada: false,
        tipoLogin: '',
        opcionMultiple: false,
        fusionarVotacion: false,
        smsVoto: false,
        logoVotacion: null,
    });

    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            const file = files[0];
            setFormData(prevState => ({
                ...prevState,
                [name]: file
            }));
            setImagePreviewUrl(URL.createObjectURL(file));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Cantidad de Usuarios</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="cantidadUsuarios"
                                        value={formData.cantidadUsuarios}
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
                                    <Typography style={{ fontSize: 18 }}>Cantidad de Usuarios</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="cantidadUsuarios"
                                        value={formData.cantidadUsuarios}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Titulo</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="titulo"
                                        value={formData.titulo}
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
                                    <Typography style={{ fontSize: 18 }}>Titulo</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="titulo"
                                        value={formData.titulo}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Peso</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="peso"
                                        checked={formData.peso}
                                        onChange={handleInputChange}
                                        className={classes.largerCheckbox}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Peso</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="peso"
                                        checked={formData.peso}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Modo de Voto</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="modoVoto-label">Modo de Voto</InputLabel>
                                        <Select
                                            name="modoVoto"
                                            labelId="modoVoto-label"
                                            id="modoVoto"
                                            value={formData.modoVoto}
                                            onChange={handleInputChange}
                                            label="Modo de Voto"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Modo de Voto</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
                                            <MenuItem value={20}>ReVoto</MenuItem>
                                            <MenuItem value={30}>Primer Voto</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Modo de Voto</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="modoVoto-label">Modo de Voto</InputLabel>
                                        <Select
                                            name="modoVoto"
                                            labelId="modoVoto-label"
                                            id="modoVoto"
                                            value={formData.modoVoto}
                                            onChange={handleInputChange}
                                            label="Modo de Voto"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Modo de Voto</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
                                            <MenuItem value={20}>ReVoto</MenuItem>
                                            <MenuItem value={30}>Primer Voto</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Autentificar Votación</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="autentificarVotacion"
                                        checked={formData.autentificarVotacion}
                                        onChange={handleInputChange}
                                        className={classes.largerCheckbox}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Autentificar Votación</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="autentificarVotacion"
                                        checked={formData.autentificarVotacion}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Envío de Preguntas</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="envioPreguntas"
                                        checked={formData.envioPreguntas}
                                        onChange={handleInputChange}
                                        color="primary"
                                        className={classes.largerCheckbox}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Envío de Preguntas</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="envioPreguntas"
                                        checked={formData.envioPreguntas}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Votación Segmentada</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="votacionSegmentada"
                                        checked={formData.votacionSegmentada}
                                        onChange={handleInputChange}
                                        color="primary"
                                        className={classes.largerCheckbox}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Votación Segmentada</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="votacionSegmentada"
                                        checked={formData.votacionSegmentada}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tipo de Login</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="tipoLogin-label">Tipo de Login</InputLabel>
                                        <Select
                                            name="tipoLogin"
                                            labelId="tipoLogin-label"
                                            id="tipoLogin"
                                            value={formData.tipoLogin}
                                            onChange={handleInputChange}
                                            label="Tipo de Login"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Usuario y Contraseña</MenuItem>
                                            <MenuItem value={20}>Certificado Digital</MenuItem>
                                            <MenuItem value={30}>Ambos</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Tipo de Login</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="tipoLogin-label">Tipo de Login</InputLabel>
                                        <Select
                                            name="tipoLogin"
                                            labelId="tipoLogin-label"
                                            id="tipoLogin"
                                            value={formData.tipoLogin}
                                            onChange={handleInputChange}
                                            label="Tipo de Login"
                                            style={{ width: '100%' }}
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Usuario y Contraseña</MenuItem>
                                            <MenuItem value={20}>Certificado Digital</MenuItem>
                                            <MenuItem value={30}>Ambos</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción Multiple</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="opcionMultiple"
                                        checked={formData.opcionMultiple}
                                        onChange={handleInputChange}
                                        className={classes.largerCheckbox}
                                        color="primary"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Opción Multiple</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="opcionMultiple"
                                        checked={formData.opcionMultiple}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Fusionar Votación</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="fusionarVotacion"
                                        checked={formData.fusionarVotacion}
                                        onChange={handleInputChange}
                                        color="primary"
                                        className={classes.largerCheckbox}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Fusionar Votación</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="fusionarVotacion"
                                        checked={formData.fusionarVotacion}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>SMS de Voto</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        name="smsVoto"
                                        checked={formData.smsVoto}
                                        onChange={handleInputChange}
                                        color="primary"
                                        className={classes.largerCheckbox}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>SMS de Voto</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="smsVoto"
                                        checked={formData.smsVoto}
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Logo de Votación</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <div className={classes.roots}>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="logoVotacion"
                                            name="logoVotacion"
                                            multiple
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="logoVotacion">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Imagen
                                            </Button>
                                        </label>
                                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
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
                                        <Typography style={{ fontSize: 18 }}>Logo de Votación</Typography>
                                    </div>
                                    <div className={classes.roots}>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="logoVotacion"
                                            name="logoVotacion"
                                            multiple
                                            type="file"
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="logoVotacion">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Imagen
                                            </Button>
                                        </label>
                                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}></Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <div className={classes.roots}>
                                        {imagePreviewUrl && (
                                            <img src={imagePreviewUrl} alt="Logo Preview" className={classes.imagePreview} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.alineadoMovile}>
                                    <div className={classes.element}>
                                        <Typography style={{ fontSize: 18 }}></Typography>
                                    </div>
                                    <div className={classes.roots}>
                                        {imagePreviewUrl && (
                                            <img src={imagePreviewUrl} alt="Logo Preview" className={classes.imagePreview} />
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Principal;