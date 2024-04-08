import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../Tool/Style"; 
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import General from './elementos/General';
import Grafica from './elementos/Grafica';
import ColoresChart from './elementos/ColoresChart';
import TextoPreguntas from './elementos/TextoPreguntas';
import TextoRespuestas from './elementos/TextoRespuestas';
import Leyendas from './elementos/Leyendas';


//import Autocomplete from '@material-ui/lab/Autocomplete';

const Graficos = () => {
    const [componenteAMostrar, setComponenteAMostrar] = useState(null);

// Función para mostrar el componente Principal    
const mostrarGeneral = () => {
    setComponenteAMostrar(<General />);
    };

// Función para mostrar el componente Seguridad
const mostrarGrafica = () => {
    setComponenteAMostrar(<Grafica />);
    };

// Función para mostrar el componente Seguridad
const mostrarColoresChart = () => {
    setComponenteAMostrar(<ColoresChart />);
    };

    // Función para mostrar el componente Seguridad
const mostrarTextoPreguntas = () => {
    setComponenteAMostrar(<TextoPreguntas />);
    };

const mostrarTextoRespuestas = () => {
    setComponenteAMostrar(<TextoRespuestas/>);
    };

const mostrarLeyendas = () => {
    setComponenteAMostrar(<Leyendas/>);
    };

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
            width: '100%',
            transition: 'transform 0.3s ease',
            opacity: 10, // Initial opacity
            '&:hover': {
                transform: 'scale(1.1)', // Scale the image slightly on hover
                filter: 'contrast (220%)', 
                opacity: 1
            }
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
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
        },
        roots: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        }
    }));

        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

        const classes = useStyles();
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

        const top100Films = [
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Godfather: Part II', year: 1974 }, 
        ];

    return (
        
                        <Grid container spacing={2}>
                            

                            <Grid item xs={12} md={12}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarGeneral}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        General  
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarGrafica}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>graphic_eq</i>
                                        Grafica
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarColoresChart}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>palette</i>
                                        Colores Chart
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarTextoPreguntas}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>article</i>
                                        Texto Preguntas
                                    </Button>
                                
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarTextoRespuestas}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>description</i>
                                        Texto Respuestas
                                    </Button>
                                
                                    
                                    <Button variant="outlined" color="primary" className={classes.button} onClick={mostrarLeyendas}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>chat</i>
                                        Leyendas
                                    </Button>
                                    
                                </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {componenteAMostrar}
                            </Grid>
                    
                        </Grid>
                    
    );
}

export default Graficos;