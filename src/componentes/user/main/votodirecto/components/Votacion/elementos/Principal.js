import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, MenuItem, InputLabel, FormControl, Select} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../../Tool/Style";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Principal = () => {
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
            marginBottom: theme.spacing(2), // Add some margin between rows
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

        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

        const classes = useStyles();
        const [selectValues, setSelectValues] = React.useState({
            Select0: '',
            Select1: ''
        });
        
        const handleChangeSelect = (name, value) => {
            setSelectValues(prevState => ({
                ...prevState,
                [name]: value
            }));
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Cantidad de Usuarios</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                            <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Cantidad de Usuarios</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Peso</Typography>
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
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Peso</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Modo de Voto</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Primer Voto</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Primer Voto"
                                                >
                                                <MenuItem value="">
                                                    <em>Primer Voto</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Modo de Voto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Primer Voto</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Primer Voto"
                                                >
                                                <MenuItem value="">
                                                    <em>Primer Voto</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Autentificar Votación</Typography>
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
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Autentificar Votación</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Envío de Preguntas</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Envío de Preguntas</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Votación Segmentada</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Votación Segmentada</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </>
                                        )}
                                        
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo de Login</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select1}
                                                onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Usuario y Contraseña</MenuItem>
                                                <MenuItem value={20}>Certificado Digital</MenuItem>
                                                <MenuItem value={30}>Ambos</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Tipo de Login</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select1}
                                                onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Usuario y Contraseña</MenuItem>
                                                <MenuItem value={20}>Certificado Digital</MenuItem>
                                                <MenuItem value={30}>Ambos</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Opción Multiple</Typography>
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
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Opción Multiple</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fusionar Votación</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Fusionar Votación</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>SMS de Voto</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>SMS de Voto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Logo de Votación</Typography>
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
                                                            Cargar Imagen
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
                                                    <Typography style={{fontSize: 18}}>Logo de Votación</Typography>
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
                                                            Cargar Imagen
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
                                        
                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Typography style={{fontSize: 18}}>Logo</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>  
                        </div>
    );
}

export default Principal;