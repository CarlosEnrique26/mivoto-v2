import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const VotanteIndiDif = () => {
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Nombre</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Nombre
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Apellido</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Apellido
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Documento</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Documento
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Telefono</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Telefono
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Email</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Email
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Usuario</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Usuario
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Admin Chat</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                            
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Admin Chat</Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Peso*Decimal a.b</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="1" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                            Peso*Decimal a.b
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField style={{width:'100%'}} color='primary' id="outlined-basic" label="1" variant="outlined" />
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Equipo</Typography>
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
                                                <MenuItem value={10}>Todos</MenuItem>
                                                <MenuItem value={20}></MenuItem>
                                                <MenuItem value={30}>Equipo1</MenuItem>
                                                <MenuItem value={40}>Pregunta2</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Equipo</Typography>
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
                                                <MenuItem value={10}>Todos</MenuItem>
                                                <MenuItem value={20}></MenuItem>
                                                <MenuItem value={30}>Equipo1</MenuItem>
                                                <MenuItem value={40}>Pregunta2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Registrar Votante
                                                </Button>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Registrar Votante
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

export default VotanteIndiDif;