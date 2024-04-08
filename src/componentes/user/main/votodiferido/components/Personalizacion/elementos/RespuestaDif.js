import { Grid, TextField, Typography, Checkbox, Input, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const RespuestaDif = () => {
    const PrettoSlider = withStyles({
        root: {
            color: '#52af77',
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
            },
        },
        active: {},
        valueLabel: {
            left: 'calc(-50% + 4px)',
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
        })(Slider);
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
            width: '100%',
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
            //marginBottom: theme.spacing(2),
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
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '40%',
        },
        cajon2: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '25%',
        },
        cajon3: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '50%',
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
        ControlDeslizante: {
            width: 300 + theme.spacing(3) * 2,
        },
        ControlDeslizanteMargin: {
            height: theme.spacing(3),
        },
        formControlSelect: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '80%'
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
            alignItems: 'start', // Center elements vertically
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

    const [sliderValues, setSliderValues] = useState({
        Ancho: 20,
        Alto: 20,
        TamanoFuente: 20,
        TamanoFuente1: 20
    }); 

    const handleSliderChange = (name, event, newValue) => {
        setSliderValues(prevState => ({
            ...prevState,
            [name]: newValue
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tamaño</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select3}
                                                    onChange={(e) => handleChangeSelect('Select3', e.target.value)}
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
                                                <Typography style={{fontSize: 18}}>Tamaño</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select3}
                                                    onChange={(e) => handleChangeSelect('Select3', e.target.value)}
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <TextField 
                                                type='number' 
                                                style={{width:'80%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <TextField 
                                                type='number' 
                                                style={{width:'100%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                        
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <TextField 
                                                type='number' 
                                                style={{width:'80%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <TextField 
                                                type='number' 
                                                style={{width:'100%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                        
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <TextField 
                                                type='number' 
                                                style={{width:'80%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Margen Derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <TextField 
                                                type='number' 
                                                style={{width:'100%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="" 
                                                variant="outlined" 
                                                value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                                onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})}/>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField type='color' style={{width:'80%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField type='color' style={{width:'100%'}} color='primary' id="outlined-basic" label="" variant="outlined" />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Button variant="contained" color="primary" component="span" >
                                                    Guardar
                                                </Button>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Guardar
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

export default RespuestaDif;