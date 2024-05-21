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
        editor: {
            width: '100%',
            height: '500px', // Ajusta la altura según tus necesidades
        }
    }));

    const ChatDif = ({ id }) => {
        const classes = useStyles();
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
        const editor = React.useRef(null);
        const [content, setContent] = useState('');
    
        const config = {
            readonly: false
        };
    
        const [formData, setFormData] = useState({
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
            titulo: '',
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
            informacion: '',
        });
    
        const handleChange = (event) => {
            const { name, value, type, checked } = event.target;
    
            if (name in formData.etiquetaParticipantes) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    etiquetaParticipantes: {
                        ...prevFormData.etiquetaParticipantes,
                        [name]: checked
                    }
                }));
            } else if (type === 'checkbox') {
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

        const handleEditorChange = (newContent) => {
            setFormData(prevFormData => ({
                ...prevFormData,
                informacion: newContent
            }));
        };
    
        const handleSave = () => {
            if (!validateForm()) {
                console.log('Validación fallida.');
                return;
            }
    
            console.log('Datos del formulario:', formData);
        };
    
        const validateForm = () => {
            let errors = {};
    
            if (!formData.titulo.trim()) {
                errors.titulo = 'El título es requerido.';
            } else if (formData.titulo.length < 5) {
                errors.titulo = 'El título debe tener al menos 5 caracteres.';
            } else if (formData.titulo.length > 15) {
                errors.titulo = 'El título no puede tener más de 15 caracteres.';
            }
    
            if (!formData.colorCabecera) {
                errors.colorCabecera = 'El color de cabecera es requerido.';
            }
    
            if (!formData.documentacion.trim()) {
                errors.documentacion = 'La documentación es requerida.';
            }
    
            if (!formData.fondoTexto) {
                errors.fondoTexto = 'El color de fondo de texto es requerido.';
            }
    
            if (!formData.fondoTextoLetra) {
                errors.fondoTextoLetra = 'El color de letra del fondo de texto es requerido.';
            }
    
            if (!formData.fondoTextoAdmin) {
                errors.fondoTextoAdmin = 'El color de fondo de texto del admin es requerido.';
            }
    
            if (!formData.fondoTextoAdminLetra) {
                errors.fondoTextoAdminLetra = 'El color de letra del fondo de texto del admin es requerido.';
            }
    
            if (!formData.fondoTextoUsuarios) {
                errors.fondoTextoUsuarios = 'El color de fondo de texto de usuarios es requerido.';
            }
    
            if (!formData.fondoTextoUsuariosLetra) {
                errors.fondoTextoUsuariosLetra = 'El color de letra del fondo de texto de usuarios es requerido.';
            }
    
            if (!formData.etiquetaOpcion.trim()) {
                errors.etiquetaOpcion = 'La etiqueta de opción es requerida.';
            }
    
            if (!formData.urlChat.trim()) {
                errors.urlChat = 'La URL del chat es requerida.';
            }
    
            if (!formData.informacion.trim()) {
                errors.informacion = 'La información es requerida.';
            }
    
            setFormErrors(errors);
    
            return Object.keys(errors).length === 0;
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
                                                error={!!formErrors.colorCabecera}
                                                helperText={formErrors.colorCabecera}
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
                                                error={!!formErrors.colorCabecera}
                                                helperText={formErrors.colorCabecera}
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
                                                error={!!formErrors.documentacion}
                                                helperText={formErrors.documentacion}
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
                                                error={!!formErrors.documentacion}
                                                helperText={formErrors.documentacion}
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
                                                    error={!!formErrors.fondoTexto}
                                                    helperText={formErrors.fondoTexto}
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
                                                    error={!!formErrors.fondoTextoLetra}
                                                    helperText={formErrors.fondoTextoLetra}
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
                                                error={!!formErrors.fondoTexto}
                                                helperText={formErrors.fondoTexto}
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
                                                error={!!formErrors.fondoTextoLetra}
                                                helperText={formErrors.fondoTextoLetra}
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
                                                error={!!formErrors.fondoTextoAdmin}
                                                helperText={formErrors.fondoTextoAdmin}
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
                                                error={!!formErrors.fondoTextoAdminLetra}
                                                helperText={formErrors.fondoTextoAdminLetra}
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
                                                error={!!formErrors.fondoTextoAdmin}
                                                helperText={formErrors.fondoTextoAdmin}
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
                                                error={!!formErrors.fondoTextoAdminLetra}
                                                helperText={formErrors.fondoTextoAdminLetra}
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
                                                    error={!!formErrors.fondoTextoUsuarios}
                                                    helperText={formErrors.fondoTextoUsuarios}
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
                                                    error={!!formErrors.fondoTextoUsuariosLetra}
                                                    helperText={formErrors.fondoTextoUsuariosLetra}
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
                                                    error={!!formErrors.fondoTextoUsuarios}
                                                    helperText={formErrors.fondoTextoUsuarios}
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
                                                    error={!!formErrors.fondoTextoUsuariosLetra}
                                                    helperText={formErrors.fondoTextoUsuariosLetra}
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
                                            <TextField
                                                style={{width:'80%'}}
                                                color='primary'
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                name="etiquetaOpcion"
                                                value={formData.etiquetaOpcion}
                                                onChange={handleChange}
                                                error={!!formErrors.etiquetaOpcion}
                                                helperText={formErrors.etiquetaOpcion}
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Etiqueta de Opcion</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="outlined-basic"
                                                label=""
                                                variant="outlined"
                                                name="etiquetaOpcion"
                                                value={formData.etiquetaOpcion}
                                                onChange={handleChange}
                                                error={!!formErrors.etiquetaOpcion}
                                                helperText={formErrors.etiquetaOpcion}
                                            />
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
                                                        error={!!formErrors.urlChat}
                                                        helperText={formErrors.urlChat}
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
                                                        error={!!formErrors.urlChat}
                                                        helperText={formErrors.urlChat}
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
                                                <div style={{width: '80%'}}>
                                                    <JoditEditor 
                                                        ref={editor}
                                                        value={formData.informacion}
                                                        config={{ readonly: false }}
                                                        tabIndex={1}
                                                        className={classes.editor}
                                                        onBlur={handleEditorChange}
                                                        onChange={newContent => {}}
                                                    />
                                                    {formErrors.informacion && (
                                                        <Typography color="error">{formErrors.informacion}</Typography>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        ) : (
                                            <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Informacion</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <div style={{width: '100%'}}>
                                                    <JoditEditor 
                                                        ref={editor}
                                                        value={formData.informacion}
                                                        config={{ readonly: false }}
                                                        tabIndex={1}
                                                        className={classes.editor}
                                                        onBlur={handleEditorChange}
                                                        onChange={newContent => {}}
                                                    />
                                                    {formErrors.informacion && (
                                                        <Typography color="error">{formErrors.informacion}</Typography>
                                                    )}
                                                </div>
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

export default ChatDif;