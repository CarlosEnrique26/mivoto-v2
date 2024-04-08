import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const ConfiguracionDif = () => {
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
        cajon1: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            marginBottom: theme.spacing(2),
            justifyContent: 'center', // Center elements vertically
            width: '40%',
        },
        cajon2: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '40%',
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

    const [selectValues, setSelectValues] = React.useState({
        Select0: '',
        Select1: '',
        Select2: '',
        Select3: '',
        Select4: ''
    });
    
    const handleChangeSelect = (name, value) => {
        setSelectValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };  

    const classes = useStyles();

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));


    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
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
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tamaño de letra titulo</Typography>
                                            </div>
                                            <div style={{width:'67%'}} className={classes.alineado}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'100%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="" 
                                            variant="outlined"
                                            /*value={sliderValues.Mderecho}*/ // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})} */
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Tamaño de letra titulo</Typography>
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'100%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            label="" 
                                            variant="outlined" 
                                            /*value={sliderValues.Mderecho}*/  // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})}*//>
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo de letra titulo</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select1}
                                                    onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Calibri"
                                                >
                                                <MenuItem value="">
                                                    <em>Calibri</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>otros</MenuItem>
                                                <MenuItem value={30}>otros</MenuItem>
                                                <MenuItem value={40}>otros</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Tipo de letra titulo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select1}
                                                    onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Calibri"
                                                >
                                                <MenuItem value="">
                                                    <em>Calibri</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>otros</MenuItem>
                                                <MenuItem value={30}>otros</MenuItem>
                                                <MenuItem value={40}>otros</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Incluir Observaciones</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Incluir Observaciones
                                            </Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Titulo</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                            // On smaller screens (e.g., mobile), render Typography and Checkbox separately
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Obligatorio</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18}}>
                                                Obligatorio
                                            </Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Minimo y maximo</Typography>
                                            </div>
                                            <div style={{width:'34%'}} className={classes.cajon1}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="" 
                                            variant="outlined"
                                            /*value={sliderValues.Mderecho}*/ // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})} */
                                            />
                                            </div>
                                            <div style={{width:'34%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="" 
                                            variant="outlined"
                                            /*value={sliderValues.Mderecho}*/ // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})} */
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Minimo y maximo</Typography>
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon1}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'100%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            label="" 
                                            variant="outlined" 
                                            /*value={sliderValues.Mderecho}*/  // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})}*//>
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'100%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            label="" 
                                            variant="outlined" 
                                            /*value={sliderValues.Mderecho}*/  // Usa el valor del estado local como valor del TextField
                                            /*onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})}*//>
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
                                                            Guardar
                                                        </Button>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <div className={classes.roots}>
                                                        <Button variant="contained" color='secondary' component="span">
                                                            Guardar
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

export default ConfiguracionDif;
