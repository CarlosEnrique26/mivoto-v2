import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../../Tool/Style";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
//import Autocomplete from '@material-ui/lab/Autocomplete';

const Ranking = () => {
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
            marginBottom: theme.spacing(2), // Add some margin between rows
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Modo de Voto</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={Select0}
                                                onChange={handleChangeSelect}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Individual</MenuItem>
                                                <MenuItem value={20}>Equipos</MenuItem>
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
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={Select0}
                                                onChange={handleChangeSelect}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Individual</MenuItem>
                                                <MenuItem value={20}>Equipos</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
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
                                    <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Logo de Votación</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
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

                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                    ):(
                                    <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                    </>
                                    )}
                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                            <Button style={{marginTop: 20}} variant="contained" color="primary">
                                                Guardar
                                            </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>  
                        </div>
    );
}

export default Ranking;