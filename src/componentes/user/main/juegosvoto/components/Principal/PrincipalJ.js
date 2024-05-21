import { Grid, TextField, Typography, Checkbox, Input, MenuItem, Select, InputLabel, FormControl, Button, IconButton, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { PhotoCamera } from '@material-ui/icons';
import JoditEditor from 'jodit-react';

const PrincipalJ = () => {
    const PrettoSlider = withStyles({
        root: {
            color: '#52af77',
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
        })(Slider);
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
            width: '100%',
        },
        alineado: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        element: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            //marginBottom: theme.spacing(2),
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
        },
        cajon1: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '40%',
        },
        cajon2: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '25%',
        },
        cajon3: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '50%',
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
        ControlDeslizante: {
            width: 300 + theme.spacing(3) * 2,
        },
        ControlDeslizanteMargin: {
            height: theme.spacing(3),
        },
        formControlSelect: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '80%'
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
            alignItems: 'start', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        SelectMovile: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [formData, setFormData] = useState({
    logo: null,
    logo1: null,
    titulo: '',
    descripcion: '',
    video: '',
    respuestaCorrecta: '',
    respuestaIncorrecta: '',
    tipoIngreso: 'codigo',
    juegoCerrado: '',
    juegoIniciado: '',
    juegoEspera: '',
    juegoFinalizado: '',
    respuestaCorrectaText: '',
    respuestaIncorrectaText: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditorChange = (name, content) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: content,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: files[0]
    }));
};

  const handleSave = () => {
    console.log("Form Data:", formData);

    setFormData({
      logo: null,
      logo1: null,
      titulo: '',
      descripcion: '',
      video: '',
      respuestaCorrecta: '',
      respuestaIncorrecta: '',
      tipoIngreso: 'codigo',
      juegoCerrado: '',
      juegoIniciado: '',
      juegoEspera: '',
      juegoFinalizado: '',
      respuestaCorrectaText: '',
      respuestaIncorrectaText: ''
    });
  };

  const config = {
    readonly: false,
  };

    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                label="Titulo"
                                                variant="outlined"
                                                name="titulo"
                                                value={formData.titulo}
                                                onChange={handleInputChange}
                                                />
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
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                        Seleccionar archivo
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
                                        
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                label="Titulo"
                                                variant="outlined"
                                                name="titulo"
                                                value={formData.titulo}
                                                onChange={handleInputChange}
                                                />
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
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                        Seleccionar archivo
                                                        </Button>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Descripción</Typography>
                                                </div>
                                                < JoditEditor 
                                                    value={formData.descripcion} 
                                                    config = { config } 
                                                    tabIndex = { 1 }  // tabIndex del área de texto 
                                                    onBlur={(newContent) => handleEditorChange('descripcion', newContent)}
                                                    onChange={() => { }}
                                                /> 
                                            </div>
                                            <div className={classes.alineado}>
                                                <div className={classes.roots}>
                                                    <input
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                        onChange={handleFileChange}
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                        Seleccionar archivo
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
                                        
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <div className={classes.elementMovile}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Descripción</Typography>
                                                </div>
                                                    < JoditEditor 
                                                        value={formData.descripcion} 
                                                        config = { config } 
                                                        tabIndex = { 1 }  // tabIndex del área de texto 
                                                        onBlur={(newContent) => handleEditorChange('descripcion', newContent)}
                                                        onChange={() => { }}
                                                    /> 
                                                </div>

                                            <div className={classes.alineadoMovile}>
                                                <div className={classes.roots}>
                                                    <input

                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                        Seleccionar archivo
                                                        </Button>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                            <div className={classes.alineado}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Video</Typography>
                                                
                                                    <TextField
                                                        type="text"
                                                        style={{ width: '100%' }}
                                                        color="primary"
                                                        id="outlined-basic"
                                                        label="Video"
                                                        variant="outlined"
                                                        name="video"
                                                        value={formData.video}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            ):(
                                            <>
                                                <div className={classes.elementMovile}>
                                                    <Typography style={{fontSize: 18}}>Video</Typography>
                                                
                                                    <TextField
                                                        type="text"
                                                        style={{ width: '100%' }}
                                                        color="primary"
                                                        id="outlined-basic"
                                                        label="Video"
                                                        variant="outlined"
                                                        name="video"
                                                        value={formData.video}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </>
                                            )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Respuesta Correcta</Typography>

                                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    name="respuestaCorrecta"
                                                    value={formData.respuestaCorrecta}
                                                    onChange={handleInputChange}
                                                    style={{ width: '100%' }}
                                                    label="Correcta"
                                                >
                                                <MenuItem value="">
                                                    <em>Calibri</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>otros</MenuItem>
                                                <MenuItem value={30}>otros</MenuItem>
                                                <MenuItem value={40}>otros</MenuItem>
                                                </Select>
                                                </FormControl>
                                            </div>
                                            
                                            <div className={classes.cajones}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 150}}>Respuesta Incorrecta</Typography>
                                                </div>
                                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="respuestaIncorrecta"
                                                        value={formData.respuestaIncorrecta}
                                                        onChange={handleInputChange}
                                                        style={{ width: '100%' }}
                                                        label="Incorrecta"
                                                    >
                                                    <MenuItem value="">
                                                        <em>Calibri</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Seleccione</MenuItem>
                                                    <MenuItem value={20}>otros</MenuItem>
                                                    <MenuItem value={30}>otros</MenuItem>
                                                    <MenuItem value={40}>otros</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Pregunta Correcta</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    name="respuestaCorrecta"
                                                    value={formData.respuestaCorrecta}
                                                    onChange={handleInputChange}
                                                    style={{ width: '100%' }}
                                                    label="Correcta"
                                                >
                                                <MenuItem value="">
                                                    <em>Calibri</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>otros</MenuItem>
                                                <MenuItem value={30}>otros</MenuItem>
                                                <MenuItem value={40}>otros</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                            
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Pregunta Incorrecta</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    name="respuestaIncorrecta"
                                                    value={formData.respuestaIncorrecta}
                                                    onChange={handleInputChange}
                                                    style={{ width: '100%' }}
                                                    label="Incorrecta"
                                                >
                                                <MenuItem value="">
                                                    <em>Calibri</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>otros</MenuItem>
                                                <MenuItem value={30}>otros</MenuItem>
                                                <MenuItem value={40}>otros</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}  

                                        {isDesktop ? (        
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo de Ingreso</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="tipoIngreso"
                                                    name="tipoIngreso"
                                                    value={formData.tipoIngreso}
                                                    onChange={handleInputChange}
                                                >
                                                    <FormControlLabel value="codigo" control={<Radio />} label="Codigo" />
                                                    <FormControlLabel value="codigoLogin" control={<Radio />} label="Codigo y login" />
                                                </RadioGroup>
                                            </FormControl>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                            Tipo de Ingreso
                                            </Typography>
                                            </div>
                                            <div  className={classes.alineadoMovile}>
                                            <FormControl component="fieldset">
                                                <RadioGroup
                                                    aria-label="tipoIngreso"
                                                    name="tipoIngreso"
                                                    value={formData.tipoIngreso}
                                                    onChange={handleInputChange}
                                                >
                                                    <FormControlLabel value="codigo" control={<Radio />} label="Codigo" />
                                                    <FormControlLabel value="codigoLogin" control={<Radio />} label="Codigo y login" />
                                                </RadioGroup>
                                            </FormControl>
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Juego cerrado
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.juegoCerrado}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('juegoCerrado', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Juego iniciado
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.juegoIniciado}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('juegoIniciado', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Juego en espera
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.juegoEspera}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('juegoEspera', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Juego finalizado
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.juegoFinalizado}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('juegoFinalizado', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>


                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Respuesta Correcta
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.respuestaCorrectaText}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('respuestaCorrectaText', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Respuesta Incorrecta
                                                </Typography>
                                                <JoditEditor
                                                    value={formData.respuestaIncorrectaText}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={(newContent) => handleEditorChange('respuestaIncorrectaText', newContent)}
                                                    onChange={() => { }}
                                                />
                                            </div>
                                        </div>

                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                            <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                                                <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                                                Guardar
                                            </Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default PrincipalJ;