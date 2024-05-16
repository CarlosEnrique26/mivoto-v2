import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Mando from './Mando';
import { getDataImg } from "../ImgAction";

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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    button: {
        margin: theme.spacing(1),
        width: '100%'
    },
    horizontal: {
        flexDirection: 'row',
    },
    groupalineado: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    alineado: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    element: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        width: '100%',
    },
    cajones: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
    },
    cajon1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        width: '40%',
    },
    cajon2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '25%',
    },
    cajon3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        width: '50%',
    },
    largerCheckbox: {
        transform: "scale(1.5)",
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
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '80%',
        margin: theme.spacing(1),
    },
    alineadoMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    elementMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%'
    },
    SelectMovile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
        margin: theme.spacing(1),
    },
}));

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

const ControlP = (props) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [formData, setFormData] = useState({
        colorFondo: '',
        colorBorde: '',
        cajaResultados: '',
        bordeResultados: '',
        colorBotones: '',
        colorLetra: '',
        changeTamano: '',
        fileBase64: '',
        checked: true,
        selectValues: {
            Select0: '',
            Select1: '',
            Select2: '',
            Select3: '',
            Select4: ''
        },
        sliderValues: {
            Ancho: 20,
            Alto: 20,
            TamanoFuente: 20,
            TamanoFuente1: 20
        },
        changeText1: '',
        changeText2: '',
        changeText3: '',
        changeText4: '',
        changeText5: '',
        changeText6: '',
        changeText7: '',
        changeText8: '',
        changeText9: ''
    });

    const handleChange = (event, newValue, sliderName) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked
            }));
        } else if (sliderName) {
            setFormData(prevFormData => ({
                ...prevFormData,
                sliderValues: {
                    ...prevFormData.sliderValues,
                    [sliderName]: newValue
                }
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            getDataImg(file).then((response) => {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    fileBase64: response.data
                }));
            });
        }
    };

    const handleSave = () => {
        console.log('Datos del formulario:', formData);
    };

    return (
        <div>
            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                    <div className={classes.groupalineado}>
                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Color de Fondo</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="colorFondo"
                                        label="Color de Fondo"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorFondo"
                                        value={formData.colorFondo}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color de Fondo</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="colorFondo"
                                        label="Color de Fondo"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorFondo"
                                        value={formData.colorFondo}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Imagen de fondo</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="image-upload"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="image-upload">
                                        <Button variant="contained" color="primary" component="span">
                                            Seleccionar Archivo
                                        </Button>
                                    </label>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Imagen de fondo</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="image-upload"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                    <label htmlFor="image-upload">
                                        <Button variant="contained" color="primary" component="span">
                                            Seleccionar Archivo
                                        </Button>
                                    </label>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Color de borde</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="colorBorde"
                                        label="Color de borde"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorBorde"
                                        value={formData.colorBorde}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color de borde</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="colorBorde"
                                        label="Color de borde"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorBorde"
                                        value={formData.colorBorde}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Caja de resultados</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="cajaResultados"
                                        label="Caja de resultados"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="cajaResultados"
                                        value={formData.cajaResultados}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Caja de resultados</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="cajaResultados"
                                        label="Caja de resultados"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="cajaResultados"
                                        value={formData.cajaResultados}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Borde de resultados</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="bordeResultados"
                                        label="Borde de resultados"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="bordeResultados"
                                        value={formData.bordeResultados}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Borde de resultados</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="bordeResultados"
                                        label="Borde de resultados"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="bordeResultados"
                                        value={formData.bordeResultados}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Color botones</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="colorBotones"
                                        label="Color botones"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorBotones"
                                        value={formData.colorBotones}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color botones</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="colorBotones"
                                        label="Color botones"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorBotones"
                                        value={formData.colorBotones}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Color de letra</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="colorLetra"
                                        label="Color de letra"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorLetra"
                                        value={formData.colorLetra}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color de letra</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="colorLetra"
                                        label="Color de letra"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="colorLetra"
                                        value={formData.colorLetra}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="number"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="changeTamano"
                                        label="Tamaño"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="changeTamano"
                                        value={formData.changeTamano}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="number"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="changeTamano"
                                        label="Tamaño"
                                        variant="outlined"
                                        onChange={handleChange}
                                        name="changeTamano"
                                        value={formData.changeTamano}
                                    />
                                </div>
                            </>
                        )}

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} style={{ marginTop: 20 }}>
                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 1</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText1"
                                                label="Opción 1"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText1"
                                                value={formData.changeText1}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 1</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText1"
                                                label="Opción 1"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText1"
                                                value={formData.changeText1}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 2</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText2"
                                                label="Opción 2"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText2"
                                                value={formData.changeText2}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 2</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText2"
                                                label="Opción 2"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText2"
                                                value={formData.changeText2}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 3</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText3"
                                                label="Opción 3"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText3"
                                                value={formData.changeText3}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 3</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText3"
                                                label="Opción 3"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText3"
                                                value={formData.changeText3}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 4</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText4"
                                                label="Opción 4"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText4"
                                                value={formData.changeText4}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 4</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText4"
                                                label="Opción 4"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText4"
                                                value={formData.changeText4}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 5</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText5"
                                                label="Opción 5"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText5"
                                                value={formData.changeText5}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 5</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText5"
                                                label="Opción 5"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText5"
                                                value={formData.changeText5}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 6</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText6"
                                                label="Opción 6"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText6"
                                                value={formData.changeText6}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 6</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText6"
                                                label="Opción 6"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText6"
                                                value={formData.changeText6}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 7</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText7"
                                                label="Opción 7"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText7"
                                                value={formData.changeText7}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 7</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText7"
                                                label="Opción 7"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText7"
                                                value={formData.changeText7}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 8</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText8"
                                                label="Opción 8"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText8"
                                                value={formData.changeText8}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 8</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText8"
                                                label="Opción 8"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText8"
                                                value={formData.changeText8}
                                            />
                                        </div>
                                    </>
                                )}

                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <div className={classes.element}>
                                            <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opción 9</Typography>
                                        </div>
                                        <div className={classes.cajones}>
                                            <TextField
                                                type="text"
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="changeText9"
                                                label="Opción 9"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText9"
                                                value={formData.changeText9}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18 }}>Opción 9</Typography>
                                        </div>
                                        <div className={classes.alineadoMovile}>
                                            <TextField
                                                type="text"
                                                style={{ width: '100%' }}
                                                color="primary"
                                                id="changeText9"
                                                label="Opción 9"
                                                variant="outlined"
                                                onChange={handleChange}
                                                name="changeText9"
                                                value={formData.changeText9}
                                            />
                                        </div>
                                    </>
                                )}
                            </Grid>

                            <Grid item xs={12} md={6} style={{ marginTop: 20 }}>
                                {isDesktop ? (
                                    <div className={classes.alineado}>
                                        <Mando
                                            letraa={formData.changeText1}
                                            fileBase64={formData.fileBase64}
                                            letrab={formData.changeText2}
                                            letrac={formData.changeText3}
                                            letrad={formData.changeText4}
                                            letrae={formData.changeText5}
                                            letraf={formData.changeText6}
                                            letrag={formData.changeText7}
                                            letrah={formData.changeText8}
                                            letrai={formData.changeText9}
                                            colorf={formData.colorFondo}
                                            colorb={formData.colorBorde}
                                            cajar={formData.cajaResultados}
                                            border={formData.bordeResultados}
                                            colorboton={formData.colorBotones}
                                            colorletra={formData.colorLetra}
                                            tamano={formData.changeTamano}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.alineadoMovile}>
                                            <Mando
                                                letraa={formData.changeText1}
                                                fileBase64={formData.fileBase64}
                                                letrab={formData.changeText2}
                                                letrac={formData.changeText3}
                                                letrad={formData.changeText4}
                                                letrae={formData.changeText5}
                                                letraf={formData.changeText6}
                                                letrag={formData.changeText7}
                                                letrah={formData.changeText8}
                                                letrai={formData.changeText9}
                                                colorf={formData.colorFondo}
                                                colorb={formData.colorBorde}
                                                cajar={formData.cajaResultados}
                                                border={formData.bordeResultados}
                                                colorboton={formData.colorBotones}
                                                colorletra={formData.colorLetra}
                                                tamano={formData.changeTamano}
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
                                            onClick={handleSave}
                                            variant="contained"
                                            color="primary"
                                            style={{ width: '30%' }}
                                            size="large">
                                            Guardar
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className={classes.elementMovile}>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                className={classes.buttonContainer}
                                                onClick={handleSave}
                                                variant="contained"
                                                color="primary"
                                                size="large">
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