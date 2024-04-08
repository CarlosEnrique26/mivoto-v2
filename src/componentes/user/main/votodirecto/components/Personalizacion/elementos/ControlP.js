import { Grid, TextField, Typography, Checkbox, Input, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Mando from './Mando';
import { getDataImg } from "../ImgAction";


const ControlP = (props) => {
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

    const [savedValues, setSavedValues] = useState({
        changeText1 : "",
        changeText2 : "",
        changeText3 : "",
        changeText4 : "",
        changeText5 : "",
        changeText6 : "",
        changeText7 : "",
        changeText8: "",
        changeText9: "",
        colorFondo: "",
        colorBorde: "",
        cajaResultados: "",
        bordeResultados: "",
        colorBotones: "",
        colorLetra: "",
        changeTamano: "",
        fileBase64: ""
    });
    
    
    const onChangeGuardar = (e) => {
        const{ name, value } = e.target; 
        setSavedValues(last =>({
            ...last,
            [name]: value
        }));
    }
    
    const sendValueServer = (e)=> {
        console.log(savedValues);
    }

    const handlerFileImage =(e) =>{
        const file = e.target.files[0]
            if(file != null){
                getDataImg(file).then((response) => {
                console.log(response);
                //setFileBase64(response.data);
                //setFile(response);
            });
            }
    
    }
    

    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color de Fondo</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField  type='color' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Color de Fondo" 
                                                            variant="outlined"
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="colorFondo" 
                                                            value={savedValues.colorFondo}
                                                />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color de Fondo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                type='color' 
                                                style={{width:'100%'}} 
                                                color='primary' 
                                                id="outlined-basic" 
                                                label="Color de Fondo" 
                                                variant="outlined"
                                                onChange={onChangeGuardar} 
                                                name="colorFondo" 
                                                value={savedValues.colorFondo} 
                                                />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>
                                                    Imagen de fondo
                                                </Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    component="span" 
                                                    name="img" 
                                                    id="Img" 
                                                    value="" 
                                                    onChange={handlerFileImage}>
                                                    Seleccionar Archivo
                                                </Button>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18}}>
                                                Imagen de fondo
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <Button 
                                                    variant="contained" 
                                                    color="primary" 
                                                    component="span" 
                                                    name="img" 
                                                    id="Img" 
                                                    value="" 
                                                    onChange={handlerFileImage}>
                                                    Seleccionar Archivo
                                                </Button>
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color de borde</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'80%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Color de borde" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorBorde" 
                                                    value={savedValues.colorBorde} 
                                                    />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color de borde</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'100%'}} 
                                                    color='primary' id="outlined-basic" 
                                                    label="Color de borde" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorBorde" 
                                                    value={savedValues.colorBorde} 
                                                    />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Caja de resultados</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'80%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Caja de resultados" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="cajaResultados" 
                                                    value={savedValues.cajaResultados} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Caja de resultados</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'100%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Caja de resultados" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="cajaResultados" 
                                                    value={savedValues.cajaResultados}
                                                    />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Borde de resultados</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'80%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Borde de resultados" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="bordeResultados" 
                                                    value={savedValues.bordeResultados} />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Borde de resultados</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'100%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Borde de resultados" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="bordeResultados" 
                                                    value={savedValues.bordeResultados}  />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color botones</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'80%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Color botones" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorBotones" 
                                                    value={savedValues.colorBotones} 
                                                    />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color botones</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'100%'}} 
                                                    color='primary' id="outlined-basic" 
                                                    label="Color botones" 
                                                    variant="outlined" 
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorBotones" 
                                                    value={savedValues.colorBotones} 
                                                    />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Color de letra</Typography>
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'80%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Color de letra" 
                                                    variant="outlined"
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorLetra" 
                                                    value={savedValues.colorLetra}
                                                    />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Color de letra</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField 
                                                    type='color' 
                                                    style={{width:'100%'}} 
                                                    color='primary' 
                                                    id="outlined-basic" 
                                                    label="Color de letra" 
                                                    variant="outlined"
                                                    className="form-control" 
                                                    onChange={onChangeGuardar} 
                                                    name="colorLetra" 
                                                    value={savedValues.colorLetra} 
                                                    />
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tamaño</Typography>
                                            </div>
                                            
                                            <div className={classes.cajones}>
                                            <TextField
                                                type='number'
                                                style={{ width: '80%' }}
                                                color='primary'
                                                id="outlined-basic"
                                                label="Tamano"
                                                variant="outlined"
                                                className="form-control"
                                                onChange={onChangeGuardar} 
                                                name="changeTamano" 
                                                value={savedValues.changeTamano} 
                                            />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <Typography style={{fontSize: 18}}>Tamaño</Typography>
                                            </div>
                                        
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                type='number'
                                                style={{ width: '95%' }}
                                                color='primary'
                                                id="outlined-basic"
                                                label="Tamano"
                                                variant="outlined"
                                                className="form-control"
                                                onChange={onChangeGuardar} 
                                                name="changeTamano" 
                                                value={savedValues.changeTamano}  
                                            />
                                            </div>
                                        </>
                                        )}


                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={6} style={{marginTop: 20}}>
                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 1</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 1" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText1" 
                                                            value={savedValues.changeText1}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 1</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 1" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText1" 
                                                            value={savedValues.changeText1}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 2</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 2" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText2" 
                                                            value={savedValues.changeText2}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 2</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 2" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText2" 
                                                            value={savedValues.changeText2}
                                                            />
                                                    </div>
                                                </>
                                                )} 
                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 3</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 3" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText3" 
                                                            value={savedValues.changeText3}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 3</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 3" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText3" 
                                                            value={savedValues.changeText3}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 4</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 4" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText4" 
                                                            value={savedValues.changeText4}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 4</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 4" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText4" 
                                                            value={savedValues.changeText4}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 5</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 5" 
                                                            variant="outlined"
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText5" 
                                                            value={savedValues.changeText5} s
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 5</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 5" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText5" 
                                                            value={savedValues.changeText5}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 6</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 6" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText6" 
                                                            value={savedValues.changeText6}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 6</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 6" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText6" 
                                                            value={savedValues.changeText6}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 7</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}}
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 7" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText7" 
                                                            value={savedValues.changeText7}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 7</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 7" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText7" 
                                                            value={savedValues.changeText7}
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 8</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 8" 
                                                            variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText8" 
                                                            value={savedValues.changeText8}
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 8</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text'
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic"
                                                            label="Opcion 8" 
                                                            variant="outlined"
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText8" 
                                                            value={savedValues.changeText8} 
                                                            />
                                                    </div>
                                                </>
                                                )} 

                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <div className={classes.element}>
                                                        <Typography style={{fontSize: 18, marginLeft: 15}}>Opcion 9</Typography>
                                                    </div>
                                                    <div className={classes.cajones}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'80%'}} 
                                                            color='primary' id="outlined-basic" 
                                                            label="Opcion 9" variant="outlined" 
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText9" 
                                                            value={savedValues.changeText9} 
                                                            />
                                                    </div>
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                        <Typography style={{fontSize: 18}}>Opcion 9</Typography>
                                                    </div>
                                                    <div className={classes.alineadoMovile}>
                                                        <TextField 
                                                            type='text' 
                                                            style={{width:'100%'}} 
                                                            color='primary' 
                                                            id="outlined-basic" 
                                                            label="Opcion 9" 
                                                            variant="outlined"
                                                            className="form-control" 
                                                            onChange={onChangeGuardar} 
                                                            name="changeText9" 
                                                            value={savedValues.changeText9} 
                                                            />
                                                    </div>
                                                </>
                                                )} 
                                            </Grid>

                                            <Grid item xs={12} md={6} style={{marginTop: 20}}>
                                                {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <Mando
                                                        letraa={savedValues.changeText1} 
                                                        fileBase64={savedValues.fileBase64}
                                                        letrab={savedValues.changeText2}
                                                        letrac={savedValues.changeText3} 
                                                        letrad={savedValues.changeText4} 
                                                        letrae={savedValues.changeText5} 
                                                        letraf={savedValues.changeText6} 
                                                        letrag={savedValues.changeText7} 
                                                        letrah={savedValues.changeText8} 
                                                        letrai={savedValues.changeText9} 
                                                        colorf={savedValues.colorFondo} 
                                                        colorb={savedValues.colorBorde} 
                                                        cajar={savedValues.cajaResultados} 
                                                        border={savedValues.bordeResultados} 
                                                        colorboton={savedValues.colorBotones} 
                                                        colorletra={savedValues.colorLetra} 
                                                        tamano={savedValues.changeTamano} 
                                                        />
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.alineadoMovile}>
                                                        <Mando
                                                        letraa={savedValues.changeText1} 
                                                        fileBase64={savedValues.fileBase64}
                                                        letrab={savedValues.changeText2}
                                                        letrac={savedValues.changeText3} 
                                                        letrad={savedValues.changeText4} 
                                                        letrae={savedValues.changeText5} 
                                                        letraf={savedValues.changeText6} 
                                                        letrag={savedValues.changeText7} 
                                                        letrah={savedValues.changeText8} 
                                                        letrai={savedValues.changeText9} 
                                                        colorf={savedValues.colorFondo} 
                                                        colorb={savedValues.colorBorde} 
                                                        cajar={savedValues.cajaResultados} 
                                                        border={savedValues.bordeResultados} 
                                                        colorboton={savedValues.colorBotones} 
                                                        colorletra={savedValues.colorLetra} 
                                                        tamano={savedValues.changeTamano} 
                                                        />
                                                    </div>
                                                </>
                                                )} 
                                            </Grid> 
                                            <Grid className={classes.buttonContainer}>
                                            {isDesktop ? (
                                                <div className={classes.alineado}>
                                                    <Button 
                                                        type="submit"
                                                        fullWidth 
                                                        onClick={sendValueServer} 
                                                        variant="contained"
                                                        color="primary"
                                                        style={{width: '30%'}} 
                                                        size="large" >
                                                            Guardar 
                                                    </Button>  
                                                </div>
                                                ):(
                                                <>
                                                    <div className={classes.elementMovile}>
                                                    <Button 
                                                        type="submit"
                                                        fullWidth 
                                                        className={classes.buttonContainer}
                                                        onClick={sendValueServer} 
                                                        variant="contained"
                                                        color="primary" 
                                                        size="large" 
                                                        >
                                                            Guardar 
                                                    </Button>  
                                                    </div>
                                                </>
                                                )} 
                                                </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default ControlP;