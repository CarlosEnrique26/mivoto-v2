import { Grid, Button, TextField, Typography, Checkbox, IconButton, RadioGroup, FormLabel, FormControl, FormControlLabel, Radio} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import CreateIcon from '@material-ui/icons/Create';
//import Autocomplete from '@material-ui/lab/Autocomplete';

const InformacionDif = () => {
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

    const [value, setValue] = React.useState('principio');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}></Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" color='secondary' component="span">
                                                            Cargar Preguntas
                                                        </Button>
                                                </div>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" component="span">
                                                            Descargar Plantilla
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" color='secondary' component="span">
                                                            Cargar Preguntas
                                                        </Button>
                                                </div>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" component="span">
                                                            Descargar Plantilla
                                                        </Button>
                                                </div>
                                            </div>
                                        </>
                                        )} 


                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Texto</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Texto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Documento a descargar</Typography>
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
                                                    <Typography style={{fontSize: 18}}>Documento a descargar</Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Ubicación del PDF</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <FormControl component="fieldset">
                                                    <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                                                    <FormControlLabel value="female" control={<Radio />} label="Al principio" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Al final" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                            Ubicación del PDF
                                            </Typography>
                                            </div>
                                            <div  className={classes.alineadoMovile}>
                                                <FormControl component="fieldset">
                                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeRadio}>
                                                        <FormControlLabel value="principio" control={<Radio />} label="Al Principio" />
                                                        <FormControlLabel value="final" control={<Radio />} label="Al Final" />
                                                    </RadioGroup>
                                                </FormControl>
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
                                                        <Button variant="contained" color='secondary' component="span">
                                                            Subir Documento
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" color='secondary' component="span">
                                                            Subir Documento
                                                        </Button>
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

export default InformacionDif;