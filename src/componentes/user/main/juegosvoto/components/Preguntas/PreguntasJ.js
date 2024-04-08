import { Grid, TextField, Typography, Checkbox, Input, MenuItem, Select, InputLabel, FormControl, Button, IconButton, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { PhotoCamera } from '@material-ui/icons';
import JoditEditor from 'jodit-react';
import { larger } from 'mathjs';

const PreguntasJ = () => {
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
        cuadroderecha: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'center', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
            backgroundColor: 'blue',
            height: 100
        },
        cuadroizquierda: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'center', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
            backgroundColor: 'red',
            height: 100
        },
        radio: {
            backgroundColor: 'white',
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

    const  editor  =  useRef ( null ) 
	const  [ content ,  setContent ]  =  useState ( '' )
	
	const  config  =  { 
		lectura : false,  // todas las opciones de https://xdsoft.net/jodit/doc/ 
	}


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

    const [value, setValue] = React.useState('principio');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChangeRadio1 = (event) => {
        setSelectedValue(event.target.value);
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
                                                    <Typography style={{fontSize: 18, marginLeft: 15}}>Preguntas Creadas</Typography>
                                                
                                                    <TextField type='text' style={{width:'100%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                                </div>
                                            </div>
                                            ):(
                                            <>
                                                <div className={classes.elementMovile}>
                                                    <Typography style={{fontSize: 18}}>Preguntas Creadas</Typography>
                                                
                                                    <TextField type='text' style={{width:'100%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                                </div>
                                            </>
                                            )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo</Typography>

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
                                            
                                            <div className={classes.cajones}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 60}}>Tiempo</Typography>
                                                </div>
                                                <TextField type='text' style={{width:'90%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                            </div>

                                            <div className={classes.cajones}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18, marginLeft: 60}}>Puntos Maximos</Typography>
                                                </div>
                                                <TextField type='text' style={{width:'90%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={isDesktop ? classes.element : classes.elementMovile}>
                                                <Typography style={{ fontSize: 18 }}>Tipo</Typography>
                                                <div className={classes.element}>
                                                    <FormControl variant="outlined" className={classes.formControlSelect} style={{ width: isDesktop ? 'auto' : '100%' }}>
                                                        <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            value={selectValues.Select3}
                                                            onChange={(e) => handleChangeSelect('Select3', e.target.value)}
                                                            style={{ width: '100%' }}
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
                                            
                                            <div className={classes.cajones}>
                                                <div className={classes.elementMovile}>
                                                    <Typography style={{fontSize: 18}}>Tiempo</Typography>
                                                
                                                <TextField type='text' style={{width:'100%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                                </div>
                                            </div>

                                            <div className={classes.cajones}>
                                                <div className={classes.elementMovile}>
                                                    <Typography style={{fontSize: 18}}>Puntos Maximos</Typography>
                                                
                                                <TextField type='text' style={{width:'100%'}} color='primary' id="outlined-basic" label="Video" variant="outlined" />
                                                </div>
                                            </div>
                                        </>
                                        )}  

                                        {isDesktop ? (
                                            <div className={classes.element}>
                                                
                                            </div>
                                        ) : null}
                                        <div className={isDesktop ? classes.alineado : classes.alineadoMovile}>
                                            <div style={{ width: '100%' }}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>
                                                    Preguntas
                                                </Typography>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    config={config}
                                                    tabIndex={1}
                                                    onBlur={newContent => setContent(newContent)}
                                                    onChange={newContent => {}}
                                                />
                                            </div>
                                        </div>
                                        
                                        {isDesktop ? (
                                            <div className={classes.alineado}>
                                                <div className={classes.cuadroizquierda}>
                                                <Radio
                                                    checked={selectedValue === 'a'}
                                                    onChange={handleChangeRadio1}
                                                    value="a"
                                                    name="radio-button-demo"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    className={classes.radio}
                                                />
                                                </div>
                                                <div className={classes.cuadroderecha}>
                                                <Radio
                                                    checked={selectedValue === 'b'}
                                                    onChange={handleChangeRadio1}
                                                    value="b"
                                                    name="radio-button-demo"
                                                    inputProps={{ 'aria-label': 'B' }}
                                                    className={classes.radio}
                                                />
                                                </div>
                                            </div>
                                            ):(
                                            <>
                                                
                                                <div className={classes.cuadroizquierda}>
                                                <Radio
                                                    checked={selectedValue === 'a'}
                                                    onChange={handleChangeRadio1}
                                                    value="a"
                                                    name="radio-button-demo"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    className={classes.radio}
                                                />
                                                </div>
                                                <div className={classes.cuadroderecha}>
                                                <Radio
                                                    checked={selectedValue === 'b'}
                                                    onChange={handleChangeRadio1}
                                                    value="b"
                                                    name="radio-button-demo"
                                                    inputProps={{ 'aria-label': 'B' }}
                                                    className={classes.radio}
                                                />
                                                </div>
                                            </>
                                            )}

                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Button style={{marginTop: 20}} variant="contained" color="primary">
                                                    <i className="material-icons" style={{fontSize: 20, marginRight: 5}}>star</i>
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

export default PreguntasJ;