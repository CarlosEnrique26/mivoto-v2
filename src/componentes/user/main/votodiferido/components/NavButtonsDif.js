import { Button, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../Tool/Style";
import { Link } from 'react-router-dom';
import VotacionDif from './Votacion/VotacionDif';
import QuestionDif from './Preguntas/QuestionsDif';
import GraficosDif from './Graficos/GraficosDif';
import VotantesDif from './Votantes/votantesDif';
import PersonalizacionDif from './Personalizacion/PersonalizacionDif';



const NavButtonsDif = () => {
    const [componenteAMostrar, setComponenteAMostrar] = useState(null);
    
const mostrarVotacion = () => {
    setComponenteAMostrar(<VotacionDif />);
    };
const mostrarQuestion = () => {
    setComponenteAMostrar(<QuestionDif />);
    };
const mostrarGraficos = () => {
    setComponenteAMostrar(<GraficosDif />);
    };
const mostrarVotantes = () => {
    setComponenteAMostrar(<VotantesDif />);
    };
const mostrarPersonalizacion = () => {
    setComponenteAMostrar(<PersonalizacionDif/>);
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
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarVotacion}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        Votacion
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarQuestion}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>help</i>
                                        Preguntas
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarGraficos}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>leaderboard</i>
                                        Graficos
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarVotantes}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>groups</i>
                                        Votantes
                                    </Button>
                                    
                                    
                                    <Button variant="contained" color="primary" className={classes.button} onClick={mostrarPersonalizacion}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>edit</i>
                                        Personalizacion
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

export default NavButtonsDif;