import { Button, Container, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../Tool/Style";
import { Link } from 'react-router-dom';
import PrePrincipal from './components/prePrincipal';
import PrePersonalizacion from './components/prePersonalizacion';
import PreCampos from './components/preCampos';
import { blue, orange, red } from '@material-ui/core/colors';

const NavButtonsPr = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        if (activeButton === buttonId) {
            setActiveButton(null); // Deselect the button if already active
        } else {
            setActiveButton(buttonId);// Set the clicked button as active
        }
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
                //backgroundColor: orange[500], // Change background color to red when button is clicked
                color: '#ffffff',
                //borderColor: orange[500],
                //zIndex: 9 
            }
        },
        buttonClicked: {
            backgroundColor: orange[500], // Change background color to red when button is clicked
            color: '#ffffff', // Change text color to blue when button is clicked
            borderColor: '#f69100',
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
                                        className={`${classes.button} ${activeButton === 'preprincipal' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('preprincipal')}
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        principal
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={`${classes.button} ${activeButton === 'prepersonalizacion' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('prepersonalizacion')}
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        personalización
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={`${classes.button} ${activeButton === 'precampos' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('precampos')}
                                    >
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        campos
                                    </Button>
                                    
                                    
                                    
                                </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {activeButton === 'preprincipal' && <PrePrincipal />}
                                {activeButton === 'prepersonalizacion' && <PrePersonalizacion />}
                                {activeButton === 'precampos' && <PreCampos />}
                            </Grid>
                        </Grid>
                    </Container>

                </Grid>
            </Container>
        </Container>
    );
}

export default NavButtonsPr;