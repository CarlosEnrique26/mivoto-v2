import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../Tool/Style"; 
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ImportarVDif from './elementos/ImportarVDif';
import EquiposDif from './elementos/EquiposDif';
import VotanteIndiDif from './elementos/VotanteIndiDif';
import GestionDif from './elementos/GestionDif';
import PlantillaDif from './elementos/PlantillaDif';



//import Autocomplete from '@material-ui/lab/Autocomplete';

const VotantesDif = () => {
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
                opacity: 1,
                borderColor: '#f69100',
                color: '#f69100',
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
        },
        buttonClicked: {
            borderColor: '#f69100',
            color: '#f69100', // Change text color to blue when button is clicked
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
                                    
                                    <Button variant="outlined" color="primary" className={`${classes.button} ${activeButton === 'importarvdif' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('importarvdif')}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
                                        Importar Votantes
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={`${classes.button} ${activeButton === 'equiposdif' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('equiposdif')}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>lock</i>
                                        Equipos
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={`${classes.button} ${activeButton === 'votantesindidif' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('votantesindidif')}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>article</i>
                                        Votante Individual
                                    </Button>
                                    
                                    
                                    <Button variant="outlined" color="primary" className={`${classes.button} ${activeButton === 'gestiondif' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('gestiondif')}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>image</i>
                                        Gestión
                                    </Button>
                                
                                    
                                    <Button variant="outlined" color="primary" className={`${classes.button} ${activeButton === 'plantilladif' ? classes.buttonClicked : ''}`}
                                        onClick={() => handleButtonClick('plantilladif')}>
                                        <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>show_chart</i>
                                        Plantilla
                                    </Button>
                                
                                </div>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {activeButton === 'importarvdif' && <ImportarVDif />}
                                {activeButton === 'equiposdif' && <EquiposDif />}
                                {activeButton === 'votantesindidif' && <VotanteIndiDif />}
                                {activeButton === 'gestiondif' && <GestionDif />}
                                {activeButton === 'plantilladif' && <PlantillaDif />}
                            </Grid>
                    
                        </Grid>
                    
    );
}

export default VotantesDif;