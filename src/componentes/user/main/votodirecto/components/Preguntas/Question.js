import { Grid, Button, TextField, Typography, Checkbox, IconButton} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
//import Autocomplete from '@material-ui/lab/Autocomplete';

const Question = () => {
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
        buttonHorizontal: {
            display: 'flex', /* Usa flexbox para los botones */
            gap: '10px', /* Espacio entre los botones (ajusta según sea necesario) */
            marginLeft: '15px' /* Espacio izquierdo igual al Typography anterior */
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
        textWithIcon: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
        },
        icon: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
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
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>CSV</Typography>
                                            </div>
                                            <div className={classes.alineado}>
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
                                        <div className={classes.alineadoMovile}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>CSV</Typography>
                                                </div>
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
                                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                                    <label htmlFor="icon-button-file">
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (        
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Respuesta Aleatoria</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Respuesta Aleatoria
                                            </Typography>
                                            </div>
                                            <div  className={classes.alineadoMovile}>
                                                <Checkbox
                                                defaultChecked
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                className={classes.largerCheckbox} // Apply the custom class to the Checkbox
                                                />
                                            </div>
                                            </>
                                        )}


                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Pregunta Individual</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <div className={classes.roots}>
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" component="span">
                                                            Nuevo
                                                        </Button>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.alineadoMovile}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Pregunta Individual</Typography>
                                                </div>
                                                <div className={classes.roots}>
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" component="span">
                                                            Nuevo
                                                        </Button>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        )}  

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}></Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <div className={classes.roots}>
                                                        <Button variant="outlined" component="span">
                                                            Descargar Plantilla
                                                        </Button>
                                                </div>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" component="span">
                                                            Registrar
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <div className={classes.roots}>
                                                        <Button variant="outlined" component="span">
                                                            Descargar Plantilla
                                                        </Button>
                                                </div>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" component="span">
                                                            Registrar
                                                        </Button>
                                                </div>
                                            </div>
                                        </>
                                        )} 
                                        
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{ fontSize: 18, marginLeft: 15, fontWeight: 500 }}>1. ELIJA LA RESPUESTA</Typography>
                                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>999</Typography>
                                                <div className={classes.buttonHorizontal}>
                                                    <Button variant="contained" color="primary" component="span">
                                                    Editar
                                                    </Button>
                                                    <Button variant="contained" color="secondary" component="span">
                                                    Eliminar
                                                    </Button>
                                                </div>
                                                <div className={classes.textAndIcons}>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>a. SI</Typography>
                                                    <CreateIcon style={{marginLeft: 194 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>b. NO</Typography>
                                                    <CreateIcon style={{marginLeft: 184 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>c. ABSTENCION</Typography>
                                                    <CreateIcon style={{marginLeft: 100 }} className={classes.icon} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{ fontSize: 18, marginLeft: 15, fontWeight: 500 }}>1. ELIJA LA RESPUESTA</Typography>
                                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>999</Typography>
                                                <div className={classes.buttonHorizontal}>
                                                    <Button variant="contained" color="primary" component="span">
                                                    Editar
                                                    </Button>
                                                    <Button variant="contained" color="secondary" component="span">
                                                    Eliminar
                                                    </Button>
                                                </div>
                                                <div className={classes.textAndIcons}>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>a. SI</Typography>
                                                    <CreateIcon style={{marginLeft: 194 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>b. NO</Typography>
                                                    <CreateIcon style={{marginLeft: 184 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>c. ABSTENCION</Typography>
                                                    <CreateIcon style={{marginLeft: 100 }} className={classes.icon} />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                        <div className={classes.alineadoMovile}>
                                            <div className={classes.element}>
                                                <Typography style={{ fontSize: 18, marginLeft: 15, fontWeight: 500 }}>1. ELIJA LA RESPUESTA</Typography>
                                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>999</Typography>
                                                <div className={classes.buttonHorizontal}>
                                                    <Button variant="contained" color="primary" component="span">
                                                    Editar
                                                    </Button>
                                                    <Button variant="contained" color="secondary" component="span">
                                                    Eliminar
                                                    </Button>
                                                </div>
                                                <div className={classes.textAndIcons}>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>a. SI</Typography>
                                                    <CreateIcon style={{marginLeft: 194 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>b. NO</Typography>
                                                    <CreateIcon style={{marginLeft: 184 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>c. ABSTENCION</Typography>
                                                    <CreateIcon style={{marginLeft: 100 }} className={classes.icon} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{ fontSize: 18, marginLeft: 15, fontWeight: 500 }}>1. ELIJA LA RESPUESTA</Typography>
                                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>999</Typography>
                                                <div className={classes.buttonHorizontal}>
                                                    <Button variant="contained" color="primary" component="span">
                                                    Editar
                                                    </Button>
                                                    <Button variant="contained" color="secondary" component="span">
                                                    Eliminar
                                                    </Button>
                                                </div>
                                                <div className={classes.textAndIcons}>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>a. SI</Typography>
                                                    <CreateIcon style={{marginLeft: 194 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>b. NO</Typography>
                                                    <CreateIcon style={{marginLeft: 184 }} className={classes.icon} />
                                                    </div>
                                                    <div className={classes.textWithIcon}>
                                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>c. ABSTENCION</Typography>
                                                    <CreateIcon style={{marginLeft: 100 }} className={classes.icon} />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default Question;
