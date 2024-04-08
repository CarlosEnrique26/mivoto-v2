import { Grid, TextField, Typography, Checkbox, Input, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const TextoRespuestasDif = () => {
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

    const [sliderValues, setSliderValues] = useState({
        AnchoC: 20,
        LineaI: 20,
        Mderecho: 20,
        Mizquierdo: 20,
        Tamano: 20
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Ancho contenedor</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="pretto slider"
                                                defaultValue={20}
                                                value={sliderValues.AnchoC} // Usa el valor del estado local como valor del slider
                                                onChange={(event, newValue) => handleSliderChange('AnchoC', event, newValue)} // Maneja el cambio del slider
                                            />
                                            </div>
                                            <div className={classes.cajon2}>
                                            <TextField
                                                type='number'
                                                style={{ width: '95%' }}
                                                color='primary'
                                                id="outlined-basic"
                                                label="Ancho"
                                                variant="outlined"
                                                value={sliderValues.AnchoC} // Usa el valor del estado local como valor del slider
                                                onChange={(e) => setSliderValues({...sliderValues, AnchoC: e.target.value})} // Maneja el cambio del slider
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Ancho contenedor</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <PrettoSlider
                                                valueLabelDisplay="auto"
                                                aria-label="pretto slider"
                                                defaultValue={20}
                                                value={sliderValues.AnchoC} // Usa el valor del estado local como valor del slider
                                                onChange={(event, newValue) => handleSliderChange('AnchoC', event, newValue)} // Maneja el cambio del slider
                                            />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                type='number'
                                                style={{ width: '95%' }}
                                                color='primary'
                                                id="outlined-basic"
                                                label="Ancho"
                                                variant="outlined"
                                                value={sliderValues.AnchoC} // Usa el valor del estado local como valor del slider
                                                onChange={(e) => setSliderValues({...sliderValues, AnchoC: e.target.value})} // Maneja el cambio del slider
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Posición</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Izquierdo</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Izquierdo"
                                                >
                                                <MenuItem value="">
                                                    <em>Izquierdo</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Izquierda</MenuItem>
                                                <MenuItem value={30}>Derecha</MenuItem>
                                                <MenuItem value={40}>Centro</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Posición</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Izquierdo</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Izquierdo"
                                                >
                                                <MenuItem value="">
                                                    <em>Izquierdo</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Izquierda</MenuItem>
                                                <MenuItem value={30}>Derecha</MenuItem>
                                                <MenuItem value={40}>Centro</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Margen derecho</Typography>
                                            </div>
                                            <div className={classes.cajon3}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20}
                                            value={sliderValues.Mderecho} 
                                            onChange={(event, newValue) => handleSliderChange('Mderecho',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'13%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="TamanoFuente" 
                                            variant="outlined"
                                            value={sliderValues.Mderecho} // Usa el valor del estado local como valor del TextField
                                            onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})} 
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Margen derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20} 
                                            value={sliderValues.Mderecho} 
                                            onChange={(event, newValue) => handleSliderChange('Mderecho',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            label="" 
                                            variant="outlined" 
                                            value={sliderValues.Mderecho} // Usa el valor del estado local como valor del TextField
                                            onChange={(e) => setSliderValues({...sliderValues, Mderecho: e.target.value})}/>
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Margen Izquierdo</Typography>
                                            </div>
                                            <div className={classes.cajon3}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20}
                                            value={sliderValues.Mizquierdo} 
                                            onChange={(event, newValue) => handleSliderChange('Mizquierdo',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'13%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="TamanoFuente" 
                                            variant="outlined"
                                            value={sliderValues.Mizquierdo} // Usa el valor del estado local como valor del TextField
                                            onChange={(e) => setSliderValues({...sliderValues, Mizquierdo: e.target.value})} 
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Margen Izquierdo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20} 
                                            value={sliderValues.Mizquierdo} 
                                            onChange={(event, newValue) => handleSliderChange('Mizquierdo',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo</Typography>
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
                                                <Typography style={{fontSize: 18}}>Tipo</Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fuente</Typography>
                                            </div>
                                            <div className={classes.alineado}>

                                            <Typography style={{fontSize: 18, fontWeight: 500}}>Calibri</Typography>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Fuente</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <Typography style={{fontSize: 18, fontWeight: 500}}>Calibri</Typography>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Negrita</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Checkbox
                                                    className={classes.largerCheckbox} // Apply the custom class to the Checkbox
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18}}>
                                                Negrita
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tamaño</Typography>
                                            </div>
                                            <div className={classes.cajon3}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20}
                                            value={sliderValues.Tamano} 
                                            onChange={(event, newValue) => handleSliderChange('Tamano',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'13%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            defaultValue={20}
                                            label="TamanoFuente" 
                                            variant="outlined"
                                            value={sliderValues.Tamano} // Usa el valor del estado local como valor del TextField
                                            onChange={(e) => setSliderValues({...sliderValues, Tamano: e.target.value})} 
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Tamaño</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Typography gutterBottom></Typography>
                                            <PrettoSlider 
                                            valueLabelDisplay="auto" 
                                            style={{width:'95%'}} 
                                            aria-label="pretto slider" 
                                            defaultValue={20} 
                                            value={sliderValues.Tamano} 
                                            onChange={(event, newValue) => handleSliderChange('Tamano',event, newValue)}
                                            />
                                            </div>
                                            <div style={{width:'100%'}} className={classes.cajon2}>
                                            <TextField 
                                            type='number' 
                                            style={{width:'95%'}} 
                                            color='primary' 
                                            id="outlined-basic" 
                                            label="" 
                                            variant="outlined" 
                                            value={sliderValues.Tamano} // Usa el valor del estado local como valor del TextField
                                            onChange={(e) => setSliderValues({...sliderValues, Tamano: e.target.value})}/>
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Alinear</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Izquierda</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Izquierda"
                                                >
                                                <MenuItem value="">
                                                    <em>Izquierda</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Izquierda</MenuItem>
                                                <MenuItem value={30}>Derecha</MenuItem>
                                                <MenuItem value={40}>Centro</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Alinear</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Izquierda</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Izquierda"
                                                >
                                                <MenuItem value="">
                                                    <em>Izquierda</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Izquierda</MenuItem>
                                                <MenuItem value={30}>Derecha</MenuItem>
                                                <MenuItem value={40}>Centro</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}  

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField type='color' style={{width:'80%'}} color='primary' id="outlined-basic" label="Eje Vertical" variant="outlined" />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField type='color' style={{width:'100%'}} color='primary' id="outlined-basic" label="Eje Vertical" variant="outlined" />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Leyenda</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Ninguno"
                                                >
                                                <MenuItem value="">
                                                    <em>Ninguno</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Ninguno</MenuItem>
                                                <MenuItem value={30}>ABC</MenuItem>
                                                <MenuItem value={40}>abc</MenuItem>
                                                <MenuItem value={50}>123</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Leyenda</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={selectValues.Select0}
                                                    onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                    style={{width:'100%'}}
                                                    label="Ninguno"
                                                >
                                                <MenuItem value="">
                                                    <em>Ninguno</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Ninguno</MenuItem>
                                                <MenuItem value={30}>ABC</MenuItem>
                                                <MenuItem value={40}>abc</MenuItem>
                                                <MenuItem value={50}>123</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}  

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.alineado}>
                                                <Button variant="contained" color="primary" component="span">
                                                    Guardar Grafico
                                                </Button>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.alineadoMovile}>
                                                <Button variant="contained" color="primary" component="span">
                                                Guardar Grafico
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

export default TextoRespuestasDif;