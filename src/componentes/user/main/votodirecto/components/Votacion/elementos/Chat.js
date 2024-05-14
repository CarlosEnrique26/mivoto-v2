import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, Input} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../../Tool/Style";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import JoditEditor from 'jodit-react';
//import Autocomplete from '@material-ui/lab/Autocomplete';

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 450
        },
        espacios: {
            [theme.breakpoints.up("md")]: {
                marginTop: "10%"
            }
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center', // Horizontally center the buttons
            alignItems: 'center', // Stack buttons vertically by default
            flexDirection: 'column', // Stack buttons vertically by default
            width: '100%', // Make buttons occupy full width
        },
        button: {
            margin: theme.spacing(1), // Add some margin between the buttons
            width: '100%'
        },
        horizontal: {
            flexDirection: 'row',
        },
        groupalineado: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'center', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        alineado: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        checked: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '20%'
        },
        element: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2),
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2),
            width: '100%',
        },
        cajon1: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '33%',
        },
        cajon2: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '33%',
        },
        largerCheckbox: {
            transform: "scale(1.5)", // Adjust the scale factor as needed for the desired size
        },
        roots: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
         // pantalla moviles
        alineadoMovile: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        elementMovile: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%',
        },
        checkedMovile: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'start', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '20%'
        },
    }));

    const Chat = ({ id }) => {
        const classes = useStyles();
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
        const editor = React.useRef(null);
        const [content, setContent] = useState('');
    
        const config = {
            readonly: false
        };
    
        const [formData, setFormData] = useState({
            modoVoto: '',
            logo: null,
            titulo: '',
            activo: false,
            colorCabecera: '',
            documentacion: '',
            fondoTexto: '',
            fondoTextoLetra: '',
            fondoTextoAdmin: '',
            fondoTextoAdminLetra: '',
            fondoTextoUsuarios: '',
            fondoTextoUsuariosLetra: '',
            etiquetaOpcion: '',
            urlChat: '',
            preguntas: '',
            informacion: '',
            etiquetaParticipantes: {
                nombre: false,
                apellido: false,
                dni: false,
                equipo: false
            },
            logoAdmin: null,
            logoParticipantes: null
        });
    
        const [formErrors, setFormErrors] = useState({
            titulo: ''
        });
    
        const handleChange = (event) => {
            const { name, value, type, checked } = event.target;
    
            if (type === 'checkbox') {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: checked
                }));
            } else {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: value
                }));
            }
        };
    
        const handleFileChange = (event) => {
            const { name, files } = event.target;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: files[0]
            }));
        };
    
        const handleSave = () => {
            if (!validateTitle()) {
                console.log('Validación fallida.');
                return;
            }
    
            console.log('Datos del formulario:', formData);
        };
    
        const validateTitle = () => {
            let errorMsg = '';
            if (!formData.titulo.trim()) {
                errorMsg = 'El título es requerido.';
            } else if (formData.titulo.length < 5) {
                errorMsg = 'El título debe tener al menos 5 caracteres.';
            } else if (formData.titulo.length > 15) {
                errorMsg = 'El título no puede tener más de 15 caracteres.';
            }
    
            setFormErrors(prevErrors => ({
                ...prevErrors,
                titulo: errorMsg
            }));
    
            return errorMsg === '';
        };

    return (
        <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            <TextField
                                                style={{width:'80%'}}
                                                color='primary'
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                name="titulo"
                                                value={formData.titulo}
                                                onChange={handleChange}
                                                error={!!formErrors.titulo}
                                                helperText={formErrors.titulo}
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                name="titulo"
                                                value={formData.titulo}
                                                onChange={handleChange}
                                                error={!!formErrors.titulo}
                                                helperText={formErrors.titulo}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Activo</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.activo}
                                                    onChange={handleChange}
                                                    name="activo"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Activo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.activo}
                                                    onChange={handleChange}
                                                    name="activo"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                            <div className={classes.alineado}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Logo</Typography>
                                                </div>
                                                <div className={classes.alineado}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logo"
                                                            name="logo"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logo">
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
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Logo</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logo"
                                                            name="logo"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logo">
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color de cabecera</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            <Input
                                                type='color'
                                                style={{width:'80%'}}
                                                color='primary'
                                                id="colorCabecera"
                                                name="colorCabecera"
                                                value={formData.colorCabecera}
                                                onChange={handleChange}
                                            /> 
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Color de cabecera</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="colorCabecera"
                                                name="colorCabecera"
                                                value={formData.colorCabecera}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Documentacion</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            <TextField
                                                style={{width:'80%'}}
                                                color='primary'
                                                id="documentacion"
                                                label=""
                                                variant="outlined"
                                                name="documentacion"
                                                value={formData.documentacion}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Documentacion</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            <TextField
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="documentacion"
                                                label=""
                                                variant="outlined"
                                                name="documentacion"
                                                value={formData.documentacion}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fondo y Texto</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="fondoTexto"
                                                    name="fondoTexto"
                                                    value={formData.fondoTexto}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className={classes.cajon2}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="fondoTextoLetra"
                                                    name="fondoTextoLetra"
                                                    value={formData.fondoTextoLetra}
                                                    onChange={handleChange}
                                                />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Fondo y Texto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTexto"
                                                name="fondoTexto"
                                                value={formData.fondoTexto}
                                                onChange={handleChange}
                                            />    
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTextoLetra"
                                                name="fondoTextoLetra"
                                                value={formData.fondoTextoLetra}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fondo y Texto Admin</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <Input
                                                type='color'
                                                style={{width:'95%'}}
                                                color='primary'
                                                id="fondoTextoAdmin"
                                                name="fondoTextoAdmin"
                                                value={formData.fondoTextoAdmin}
                                                onChange={handleChange}
                                            />
                                                
                                            </div>
                                            <div className={classes.cajon2}>
                                            <Input
                                                type='color'
                                                style={{width:'95%'}}
                                                color='primary'
                                                id="fondoTextoAdminLetra"
                                                name="fondoTextoAdminLetra"
                                                value={formData.fondoTextoAdminLetra}
                                                onChange={handleChange}
                                            />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Fondo y Texto Admin</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTextoAdmin"
                                                name="fondoTextoAdmin"
                                                value={formData.fondoTextoAdmin}
                                                onChange={handleChange}
                                            />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTextoAdminLetra"
                                                name="fondoTextoAdminLetra"
                                                value={formData.fondoTextoAdminLetra}
                                                onChange={handleChange}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fondo y Texto Usuarios</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="fondoTextoUsuarios"
                                                    name="fondoTextoUsuarios"
                                                    value={formData.fondoTextoUsuarios}
                                                    onChange={handleChange}
                                                />
                                                
                                            </div>
                                            <div className={classes.cajon2}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="fondoTextoUsuariosLetra"
                                                    name="fondoTextoUsuariosLetra"
                                                    value={formData.fondoTextoUsuariosLetra}
                                                    onChange={handleChange}
                                                />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Fondo y Texto Usuarios</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Input
                                                    type='color'
                                                    style={{width:'100%'}}
                                                    color='primary'
                                                    id="fondoTextoUsuarios"
                                                    name="fondoTextoUsuarios"
                                                    value={formData.fondoTextoUsuarios}
                                                    onChange={handleChange}
                                                />
                                                
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Input
                                                    type='color'
                                                    style={{width:'100%'}}
                                                    color='primary'
                                                    id="fondoTextoUsuariosLetra"
                                                    name="fondoTextoUsuariosLetra"
                                                    value={formData.fondoTextoUsuariosLetra}
                                                    onChange={handleChange}
                                                />
                                        
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Etiqueta de Opcion</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Etiqueta de Opcion</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Etiqueta de Participantes</Typography>
                                            </div>
                                            <div className={classes.checked}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.nombre}
                                                    onChange={handleChange}
                                                    name="nombre"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Nombre</Typography>
                                            </div>
                                            <div className={classes.checked}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.apellido}
                                                    onChange={handleChange}
                                                    name="apellido"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Apellido</Typography>
                                            </div>
                                            <div className={classes.checked}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.dni}
                                                    onChange={handleChange}
                                                    name="dni"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>DNI</Typography>
                                            </div>
                                            <div className={classes.checked}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.equipo}
                                                    onChange={handleChange}
                                                    name="equipo"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Equipo</Typography>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Etiqueta de Participantes</Typography>
                                            </div>
                                            <div className={classes.checkedMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.nombre}
                                                    onChange={handleChange}
                                                    name="nombre"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Nombre</Typography>
                                            </div>
                                            <div className={classes.checkedMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.apellido}
                                                    onChange={handleChange}
                                                    name="apellido"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Apellido</Typography>
                                            </div>
                                            <div className={classes.checkedMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.dni}
                                                    onChange={handleChange}
                                                    name="dni"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>DNI</Typography>
                                            </div>
                                            <div className={classes.checkedMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    checked={formData.etiquetaParticipantes.equipo}
                                                    onChange={handleChange}
                                                    name="equipo"
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                                <Typography>Equipo</Typography>
                                            </div>
                                        </>
                                        )}

                                            {isDesktop ? (
                                            <div className={classes.alineado}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Logo Admin</Typography>
                                                </div>
                                                <div className={classes.alineado}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logoAdmin"
                                                            name="logoAdmin"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logoAdmin">
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
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Logo Admin</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logoAdmin"
                                                            name="logoAdmin"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logoAdmin">
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
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Logo Participantes</Typography>
                                                </div>
                                                <div className={classes.alineado}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logoParticipantes"
                                                            name="logoParticipantes"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logoParticipantes">
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
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Logo Participantes</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="logoParticipantes"
                                                            name="logoParticipantes"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="logoParticipantes">
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
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>URL Chat</Typography>
                                                </div>
                                                <div className={classes.cajones}>
                                                    <TextField
                                                        style={{width:'80%'}}
                                                        color='primary'
                                                        id="urlChat"
                                                        label="https://localhost:44377/Vote/Login"
                                                        variant="outlined"
                                                        name="urlChat"
                                                        value={formData.urlChat}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>URL Chat</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <TextField
                                                        style={{width:'100%'}}
                                                        color='primary'
                                                        id="urlChat"
                                                        label="https://localhost"
                                                        variant="outlined"
                                                        name="urlChat"
                                                        value={formData.urlChat}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                            <div className={classes.alineado}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Preguntas</Typography>
                                                </div>
                                                <div className={classes.alineado}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="preguntas"
                                                            name="preguntas"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="preguntas">
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
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Preguntas</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <div className={classes.roots}>
                                                        <input
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="preguntas"
                                                            name="preguntas"
                                                            multiple
                                                            type="file"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="preguntas">
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
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Informacion</Typography>
                                                </div>
                                                <div className={classes.cajones}>
                                                    <JoditEditor 
                                                        ref={editor}
                                                        value={content}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setContent(newContent)}
                                                        onChange={newContent => {}}
                                                    /> 
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Informacion</Typography>
                                                </div>
                                                <div className={classes.alineadoMovile}>
                                                    <JoditEditor 
                                                        ref={editor}
                                                        value={content}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setContent(newContent)}
                                                        onChange={newContent => {}}
                                                    /> 
                                                </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                            <Button style={{marginBottom:10}} variant="contained" color="primary"  onClick={handleSave}>
                                                Guardar
                                            </Button>
                                            <Button variant="contained" color="primary">
                                                Borrar Preguntas
                                            </Button>
                                            </div>
                                            <div className={classes.element}>
                                            <Button style={{marginBottom:10}} variant="outlined" color="primary">
                                                Descargar Plantilla
                                            </Button>
                                            <Button variant="contained">
                                                Borrar Mensajes
                                            </Button>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div style={{marginTop: 20}} className={classes.elementMovile}>
                                            <Button style={{width: 200}} variant="contained" color="primary" onClick={handleSave}>
                                                Guardar
                                            </Button>
                                            </div>
                                            <div className={classes.elementMovile}>
                                            <Button style={{width: 200}} variant="contained" color="primary">
                                                Borrar Preguntas
                                            </Button>
                                            </div>
                                            <div className={classes.elementMovile}>
                                            <Button style={{width: 200}} variant="outlined" color="primary">
                                                Descargar Plantilla
                                            </Button>
                                            </div>
                                            <div className={classes.elementMovile}>
                                            <Button style={{width: 200}} variant="contained">
                                                Borrar Mensajes
                                            </Button>
                                            </div>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </Grid>  
                        </div>
    );
}

export default Chat;