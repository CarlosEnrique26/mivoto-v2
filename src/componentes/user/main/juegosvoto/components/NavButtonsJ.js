import { Button, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../Tool/Style";
import { Link } from 'react-router-dom';
import PrincipalJ from './Principal/PrincipalJ';
import PreguntasJ from './Preguntas/PreguntasJ';
import ParticipantesJ from './Participantes/ParticipantesJ';



const NavButtonsJ = () => {
    const [componenteAMostrar, setComponenteAMostrar] = useState(null);
    
const mostrarPrincipalJ = () => {
    setComponenteAMostrar(<PrincipalJ />);
    };
const mostrarPreguntasJ = () => {
    setComponenteAMostrar(<PreguntasJ />);
    };
const mostrarParticipantesJ = () => {
    setComponenteAMostrar(<ParticipantesJ />);
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
        horizontal: {
            flexDirection: 'row',
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
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarPrincipalJ}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        Principal
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarPreguntasJ}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>help</i>
                                        Preguntas
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarParticipantesJ}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>leaderboard</i>
                                        Participantes
                                    </Button>
                                    
                                </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {componenteAMostrar}
                            </Grid>
                        </Grid>
                    </Container>

                </Grid>
            </Container>
        </Container>
    );
}

export default NavButtonsJ;