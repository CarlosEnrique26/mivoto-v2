import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const ImportarV = () => {
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
        groupbutton:{
            display: 'flex',
            flexDirection: 'row', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2),
            width: '100%',
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
        groupbuttonMovile:{
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'center', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2),
            width: '100%',
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>
                                                    CSV
                                                </Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Seleccionar Archivo
                                                </Button>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18}}>
                                                CSV
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Seleccionar Archivo
                                                </Button>
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (        
                                        <div className={classes.alineado}>
                                            <div className={classes.groupbutton}>
                                                <Button  style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Descargar Plantilla
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Subir CSV
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Importar Votantes
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Descargar censo cargado
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Actualizar Votantes
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="secondary" component="span">
                                                    Borrar Votantes
                                                </Button>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.groupbuttonMovile}>
                                                <Button  style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="primary" component="span">
                                                    Descargar Plantilla
                                                </Button>
                                                <Button style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="primary" component="span">
                                                    Subir CSV
                                                </Button>
                                                <Button style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="primary" component="span">
                                                    Importar Votantes
                                                </Button>
                                                <Button style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="primary" component="span">
                                                    Descargar censo cargado
                                                </Button>
                                                <Button style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="primary" component="span">
                                                    Actualizar Votantes
                                                </Button>
                                                <Button style={{ marginRight: '10px', width: '100%', marginBottom: '10px' }} variant="outlined" color="secondary" component="span">
                                                    Borrar Votantes
                                                </Button>
                                            </div>
                                            </>
                                        )}

                                        
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default ImportarV;