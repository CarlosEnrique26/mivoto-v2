import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

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
        alignItems: 'center',
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

const TextoRespuestas = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [formData, setFormData] = useState({
        color: '',
        AnchoC: 20,
        Mderecho: 20,
        Mizquierdo: 20,
        Tamano: 20,
        Select0: '',
        Select1: '',
        Select2: '',
        Select3: '',
        checked: true
    });

    const [formErrors, setFormErrors] = useState({});

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
                [sliderName]: newValue
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.color) {
            errors.color = 'El color es requerido';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            console.log('Datos del formulario:', formData);
        } else {
            console.log('Errores de validación:', formErrors);
        }
    };

    return (
        <div>
            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                    <div className={classes.groupalineado}>
                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Ancho contenedor</Typography>
                                </div>
                                <div className={classes.cajon1}>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        value={formData.AnchoC}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'AnchoC')}
                                    />
                                </div>
                                <div className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="ancho-contenedor"
                                        label="Ancho"
                                        variant="outlined"
                                        name="AnchoC"
                                        value={formData.AnchoC}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Ancho contenedor</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        value={formData.AnchoC}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'AnchoC')}
                                    />
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="ancho-contenedor"
                                        label="Ancho"
                                        variant="outlined"
                                        name="AnchoC"
                                        value={formData.AnchoC}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Posición</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="demo-simple-select-outlined-label">Izquierdo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select0"
                                            value={formData.Select0}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Izquierdo"
                                        >
                                            <MenuItem value="">
                                                <em>Izquierdo</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Typography style={{ fontSize: 18 }}>Posición</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="demo-simple-select-outlined-label">Izquierdo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select0"
                                            value={formData.Select0}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Izquierdo"
                                        >
                                            <MenuItem value="">
                                                <em>Izquierdo</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Margen derecho</Typography>
                                </div>
                                <div className={classes.cajon3}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Mderecho}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Mderecho')}
                                    />
                                </div>
                                <div style={{ width: '13%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="margen-derecho"
                                        label="Margen derecho"
                                        variant="outlined"
                                        name="Mderecho"
                                        value={formData.Mderecho}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Margen derecho</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Mderecho}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Mderecho')}
                                    />
                                </div>
                                <div style={{ width: '100%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="margen-derecho"
                                        label="Margen derecho"
                                        variant="outlined"
                                        name="Mderecho"
                                        value={formData.Mderecho}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Margen Izquierdo</Typography>
                                </div>
                                <div className={classes.cajon3}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Mizquierdo}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Mizquierdo')}
                                    />
                                </div>
                                <div style={{ width: '13%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="margen-izquierdo"
                                        label="Margen izquierdo"
                                        variant="outlined"
                                        name="Mizquierdo"
                                        value={formData.Mizquierdo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Margen Izquierdo</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Mizquierdo}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Mizquierdo')}
                                    />
                                </div>
                                <div style={{ width: '100%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="margen-izquierdo"
                                        label="Margen izquierdo"
                                        variant="outlined"
                                        name="Mizquierdo"
                                        value={formData.Mizquierdo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tipo</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select1"
                                            value={formData.Select1}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Calibri"
                                        >
                                            <MenuItem value="">
                                                <em>Calibri</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
                                            <MenuItem value={20}>Otros</MenuItem>
                                            <MenuItem value={30}>Otros</MenuItem>
                                            <MenuItem value={40}>Otros</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Tipo</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select1"
                                            value={formData.Select1}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Calibri"
                                        >
                                            <MenuItem value="">
                                                <em>Calibri</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
                                            <MenuItem value={20}>Otros</MenuItem>
                                            <MenuItem value={30}>Otros</MenuItem>
                                            <MenuItem value={40}>Otros</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Fuente</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Typography style={{ fontSize: 18, fontWeight: 500 }}>Calibri</Typography>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Fuente</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Typography style={{ fontSize: 18, fontWeight: 500 }}>Calibri</Typography>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Negrita</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        className={classes.largerCheckbox}
                                        name="checked"
                                        checked={formData.checked}
                                        onChange={handleChange}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>
                                        Negrita
                                    </Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        name="checked"
                                        checked={formData.checked}
                                        onChange={handleChange}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        className={classes.largerCheckbox}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.cajon3}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Tamano}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Tamano')}
                                    />
                                </div>
                                <div style={{ width: '13%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="tamano"
                                        label="Tamaño"
                                        variant="outlined"
                                        name="Tamano"
                                        value={formData.Tamano}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Typography gutterBottom></Typography>
                                    <PrettoSlider
                                        valueLabelDisplay="auto"
                                        style={{ width: '95%' }}
                                        aria-label="pretto slider"
                                        value={formData.Tamano}
                                        onChange={(event, newValue) => handleChange(event, newValue, 'Tamano')}
                                    />
                                </div>
                                <div style={{ width: '100%' }} className={classes.cajon2}>
                                    <TextField
                                        type="number"
                                        style={{ width: '95%' }}
                                        color="primary"
                                        id="tamano"
                                        label="Tamaño"
                                        variant="outlined"
                                        name="Tamano"
                                        value={formData.Tamano}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Alinear</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="demo-simple-select-outlined-label">Izquierda</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select2"
                                            value={formData.Select2}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Izquierda"
                                        >
                                            <MenuItem value="">
                                                <em>Izquierda</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Typography style={{ fontSize: 18 }}>Alinear</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="demo-simple-select-outlined-label">Izquierda</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select2"
                                            value={formData.Select2}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Izquierda"
                                        >
                                            <MenuItem value="">
                                                <em>Izquierda</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Color</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type="color"
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="color"
                                        label="Color"
                                        variant="outlined"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                    />
                                    {formErrors.color && <Typography color="error">{formErrors.color}</Typography>}
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type="color"
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="color"
                                        label="Color"
                                        variant="outlined"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                    />
                                    {formErrors.color && <Typography color="error">{formErrors.color}</Typography>}
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Leyenda</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select3"
                                            value={formData.Select3}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Ninguno"
                                        >
                                            <MenuItem value="">
                                                <em>Ninguno</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Typography style={{ fontSize: 18 }}>Leyenda</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            name="Select3"
                                            value={formData.Select3}
                                            onChange={handleChange}
                                            style={{ width: '100%' }}
                                            label="Ninguno"
                                        >
                                            <MenuItem value="">
                                                <em>Ninguno</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Seleccione</MenuItem>
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
                                    <Button variant="contained" color="primary" component="span" onClick={handleSave}>
                                        Guardar Gráfico
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.alineadoMovile}>
                                    <Button variant="contained" color="primary" component="span" onClick={handleSave}>
                                        Guardar Gráfico
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

export default TextoRespuestas;