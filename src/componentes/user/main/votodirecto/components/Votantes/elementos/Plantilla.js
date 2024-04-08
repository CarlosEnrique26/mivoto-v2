import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import JoditEditor from 'jodit-react';

const Plantilla = () => {
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
            marginBottom: theme.spacing(2),
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
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

    const  editor  =  useRef ( null ) 
	const  [ content ,  setContent ]  =  useState ( '' )
	
	const  config  =  { 
		lectura : false,  // todas las opciones de https://xdsoft.net/jodit/doc/ 
	};

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
                                            
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Nombre
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Opciones Rapidas</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Username</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Password</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>URL</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Codigo</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Test</Typography>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                            Opciones Rapidas
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Username</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Password</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>URL</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Codigo</Typography>
                                            <Typography style={{fontSize: 18, marginLeft: 15}}>Test</Typography>
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                                    <div style={{ width: '100%' }}> {/* Establece el ancho al 100% */}
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
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.alineadoMovile}>
                                            
                                                <JoditEditor 
                                                    ref={editor} 
                                                    value={content} 
                                                    config={config} 
                                                    tabIndex={1} 
                                                    style={{ width: '100%' }}
                                                    onBlur={newContent => setContent(newContent)} 
                                                    onChange={newContent => {}}
                                                /> 

                                            </div>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default Plantilla;