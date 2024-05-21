import { Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button, Slider, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';

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
        width: '100%',
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
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    cajones: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        width: '100%',
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
        width: '80%'
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

const RespuestaDif = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const [formData, setFormData] = useState({
        Tamano: '',
        Mizquierdo: '',
        Mderecho: '',
        color: '#000000'
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSave = () => {
        console.log("Form Data:", formData);

        // Clear the form
        setFormData({
            Tamano: '',
            Mizquierdo: '',
            Mderecho: '',
            color: '#000000'
        });
    };

    return (
        <div>
            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                    <div className={classes.groupalineado}>
                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <FormControl variant="outlined" className={classes.formControlSelect}>
                                        <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="Tamano"
                                            name="Tamano"
                                            value={formData.Tamano}
                                            onChange={handleChange}
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
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Tamaño</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <FormControl variant="outlined" className={classes.SelectMovile}>
                                        <InputLabel id="demo-simple-select-outlined-label">Calibri</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="Tamano"
                                            name="Tamano"
                                            value={formData.Tamano}
                                            onChange={handleChange}
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
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Margen Izquierdo</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type='number'
                                        style={{ width: '80%' }}
                                        color='primary'
                                        id="Mizquierdo"
                                        name="Mizquierdo"
                                        label=""
                                        variant="outlined"
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
                                    <TextField
                                        type='number'
                                        style={{ width: '100%' }}
                                        color='primary'
                                        id="Mizquierdo"
                                        name="Mizquierdo"
                                        label=""
                                        variant="outlined"
                                        value={formData.Mizquierdo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Margen Derecho</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        type='number'
                                        style={{ width: '80%' }}
                                        color='primary'
                                        id="Mderecho"
                                        name="Mderecho"
                                        label=""
                                        variant="outlined"
                                        value={formData.Mderecho}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Margen Derecho</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type='number'
                                        style={{ width: '100%' }}
                                        color='primary'
                                        id="Mderecho"
                                        name="Mderecho"
                                        label=""
                                        variant="outlined"
                                        value={formData.Mderecho}
                                        onChange={handleChange}
                                    />
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
                                        type='color'
                                        style={{ width: '80%' }}
                                        color='primary'
                                        id="color"
                                        name="color"
                                        label=""
                                        variant="outlined"
                                        value={formData.color}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Typography style={{ fontSize: 18 }}>Color</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        type='color'
                                        style={{ width: '100%' }}
                                        color='primary'
                                        id="color"
                                        name="color"
                                        label=""
                                        variant="outlined"
                                        value={formData.color}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.alineado}>
                                    <Button variant="contained" color="primary" component="span" onClick={handleSave}>
                                        Guardar
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.alineadoMovile}>
                                    <Button variant="contained" color="primary" component="span" onClick={handleSave}>
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