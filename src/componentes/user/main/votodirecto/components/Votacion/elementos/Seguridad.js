import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl} from '@material-ui/core';
import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { VotationContext } from '../../../../../../../context/VotationContext';


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

    
    const Seguridad = () => {
        const classes = useStyles();
        const { votationData, setVotationData } = useContext(VotationContext);
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    
        const handleInputChange = (event) => {
            const { name, type, checked, value } = event.target;
            setVotationData((prevState) => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value,
            }));
        };


    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Activar reCAPCHA</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="ISAuthenticated"  // ISAuthenticated
                                                    checked={votationData.ISAuthenticated}
                                                    onChange={handleInputChange}
                                                    />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Activar reCAPCHA
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="ISAuthenticated"  // ISAuthenticated
                                                    checked={votationData.ISAuthenticated}
                                                    onChange={handleInputChange}
                                                    />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (        
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Contraseña Alfanumerica(14min)</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="ConfigSecurity"  // ConfigSecurity
                                                    checked={votationData.ConfigSecurity}
                                                    onChange={handleInputChange}
                                                    />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Contraseña Alfanumerica 14min
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="ConfigSecurity"  // ConfigSecurity
                                                    checked={votationData.ConfigSecurity}
                                                    onChange={handleInputChange}
                                                    />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? ( 
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Doble factor de Autentificación</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="TypeConfirmation"  // TypeConfirmation
                                                    checked={votationData.TypeConfirmation}
                                                    onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Doble factor de Autentificación
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="TypeConfirmation"  // TypeConfirmation
                                                    checked={votationData.TypeConfirmation}
                                                    onChange={handleInputChange} />
                                            </div>
                                            </>
                                        )}  

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo Autentificación</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="TypeLogin-label"
                                                id="TypeLogin"
                                                name="TypeLogin"  // TypeLogin
                                                value={votationData.TypeLogin}
                                                onChange={handleInputChange}
                                                label="Seleccione"
                                                style={{ width: '100%' }}
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>SMS</MenuItem>
                                                <MenuItem value={20}>Mail</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Tipo Autentificación</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="TypeLogin-label"
                                                id="TypeLogin"
                                                name="TypeLogin"  // TypeLogin
                                                value={votationData.TypeLogin}
                                                onChange={handleInputChange}
                                                label="Seleccione"
                                                style={{ width: '100%' }}
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>SMS</MenuItem>
                                                <MenuItem value={20}>Mail</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 
                                        
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Cambio de Contraseña</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="IsPrintResult"  // IsPrintResult
                                                    checked={votationData.IsPrintResult}
                                                    onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                            
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Cambio de Contraseña</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    name="IsPrintResult"  // IsPrintResult
                                                    checked={votationData.IsPrintResult}
                                                    onChange={handleInputChange}/>
                                            </div>
                                        
                                        </>
                                        )}
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default Seguridad;