import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../../Tool/Style";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import JoditEditor from 'jodit-react';
//import Autocomplete from '@material-ui/lab/Autocomplete';

const Textos = ({}) => {
    const  editor  =  useRef ( null ) 
	const  [ content ,  setContent ]  =  useState ( '' )
	
	const  config  =  { 
		lectura : false,  // todas las opciones de https://xdsoft.net/jodit/doc/ 
	}

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
        element: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%',
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
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '80%',
            margin: theme.spacing(1),
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

        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

        const classes = useStyles();
        const [Select0, setSelect0] = React.useState('');

        const handleChangeSelect = (event) => {
        setSelect0(event.target.value);
        };
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Votacion cerrada</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Votacion cerrada</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </>
                                        )}
                                        
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Votacion finalizada</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Votacion finalizada</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Voto emitido</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Voto emitido</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Texto libre de cabecera o pie formulario voto</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Texto libre de cabecera o pie formulario voto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            < JoditEditor 
                                                ref = { editor } 
                                                value = { content } 
                                                config = { config } 
                                                tabIndex = { 1 }  // tabIndex del área de texto 
                                                onBlur = { newContent  =>  setContent ( newContent ) }  // prefería usar solo esta opción para actualizar el contenido por motivos de rendimiento 
                                                onChange = { newContent  =>  { } } 
                                            /> 
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Posición</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={Select0}
                                                onChange={handleChangeSelect}
                                                style={{width:'100%'}}
                                                label="Ninguno"
                                                >
                                                <MenuItem value="">
                                                    <em>Ninguno</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Inicio</MenuItem>
                                                <MenuItem value={20}>Final</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Posición</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={Select0}
                                                onChange={handleChangeSelect}
                                                style={{width:'100%'}}
                                                label="Ninguno"
                                                >
                                                <MenuItem value="">
                                                    <em>Ninguno</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Inicio</MenuItem>
                                                <MenuItem value={20}>Final</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}

                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Button style={{marginTop: 20}} variant="contained" color="primary">
                                                    <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                                    Guardar Votacion
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>  
                        </div>
    );
}

export default Textos;