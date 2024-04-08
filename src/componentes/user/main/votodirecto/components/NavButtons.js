import { Button, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../Tool/Style";
import { Link } from 'react-router-dom';
import Votacion from './Votacion/Votacion';
import Question from './Preguntas/Question';
import Graficos from './Graficos/Graficos';
import Votantes from './Votantes/Votantes';
import Personalizacion from './Personalizacion/Personalizacion';
import { blue, red } from '@material-ui/core/colors';

const NavButtons = () => {
    const [activeButton, setActiveButton] = useState(null);

const handleButtonClick = (buttonId) => {
    if (activeButton === buttonId) {
        setActiveButton(null); // Deselect the button if already active
    } 

else {
    setActiveButton(buttonId);// Set the clicked button as active
}};

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
            flexDirection: 'column',
            alignItems: 'center', // Stack buttons vertically by default
            width: '100%', // Make buttons occupy full width
        },
        button: {
            margin: theme.spacing(1), // Add some margin between the buttons
            width: '100%',
            transition: 'transform 0.3s ease',
            opacity: 10, // Initial opacity
            //backgroundColor: activeButton === 'votacion'  ? '#ff0000' : null,
            '&:hover': {
                transform: 'scale(1.1)', // Scale the image slightly on hover
                filter: 'contrast (220%)', 
                opacity: 1,
                //zIndex: 9 
            }
        },
        buttonClicked: {
            /* Estilos cuando el botón está marcado */
            backgroundColor: red, /* Por ejemplo, cambia el color de fondo */
            color: blue, /* Cambia el color del texto cuando está marcado */
            /* Otros estilos deseados */
        },
        horizontal: {
            flexDirection: 'row',
        },
        BtnsHover: {
            transition: 'transform 0.3s ease',
            opacity: 0.8, // Initial opacity
            '&:hover': {
                transform: 'scale(1.1)', // Scale the image slightly on hover
                filter: 'contrast (220%)', 
                opacity: 1
            }
        }
    }));

    const classes = useStyles();
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barContainer}>
                <Grid style={style.gridcontainer}>

                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                        onClick={() => handleButtonClick('votacion')} // Pass the button ID to the click handler
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        Votacion
                                    </Button>
                                    
                                    
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                        onClick={() => handleButtonClick('question')} // Pass the button ID to the click handler
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>help</i>
                                        Preguntas
                                    </Button>
                                    
                                    
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                    onClick={() => handleButtonClick('graficos')} // Pass the button ID to the click handler
                                >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>leaderboard</i>
                                        Graficos
                                    </Button>
                                    
                                    
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                        onClick={() => handleButtonClick('votantes')} // Pass the button ID to the click handler
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>groups</i>
                                        Votantes
                                    </Button>
                                    
                                    
                                    <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                        onClick={() => handleButtonClick('personalizacion')} // Pass the button ID to the click handler
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>edit</i>
                                        Personalizacion
                                    </Button>
                                    
                                </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {activeButton === 'votacion' && <Votacion />}
                                {activeButton === 'question' && <Question />}
                                {activeButton === 'graficos' && <Graficos />}
                                {activeButton === 'votantes' && <Votantes />}
                                {activeButton === 'personalizacion' && <Personalizacion />}
                            </Grid>
                        </Grid>
                    </Container>

                </Grid>
            </Container>
        </Container>
    );
}

export default NavButtons;