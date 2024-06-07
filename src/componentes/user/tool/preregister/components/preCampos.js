import { Button, Grid, TextField, Typography, useMediaQuery, Checkbox, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450
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
    formControlSelect: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        width: '100%',
        margin: theme.spacing(1),
    },
    // Styles for mobile
    alineadoMovile: {
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

const PreCampos = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const [formData, setFormData] = useState({
        nombreDeCampo: '',
        obligatorio: false,
        relacion: '',
        tipoDeCampo: '',
        campoDeControl: false,
        activo: false,
    });
    const [preregistro, setPreregistro] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        consumeGetPreregistro();
    }, []);

    const consumeGetPreregistro = () => {
        const mockData = [
            { id: 1, nombreDeCampo: 'Campo 1', obligatorio: true, relacion: 'Login', tipoDeCampo: 'Texto', campoDeControl: true, activo: true },
            { id: 2, nombreDeCampo: 'Campo 2', obligatorio: false, relacion: 'Nombre', tipoDeCampo: 'Numerico', campoDeControl: false, activo: true },
        ];
        setPreregistro(mockData);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = () => {
        if (isEditMode) {
            const updatedPreregistro = preregistro.map(item =>
                item.id === editId ? { ...item, ...formData } : item
            );
            setPreregistro(updatedPreregistro);
            console.log('Updated data:', updatedPreregistro);
        } else {
            const newEntry = {
                id: preregistro.length + 1,
                ...formData,
            };
            setPreregistro([...preregistro, newEntry]);
            console.log('New data:', [...preregistro, newEntry]);
        }
        resetForm();
    };

    const handleEdit = (id) => {
        const registro = preregistro.find(row => row.id === id);
        setFormData(registro);
        setIsEditMode(true);
        setEditId(id);
    };

    const handleDeleteClick = (id) => {
        const updatedPreregistro = preregistro.filter(row => row.id !== id);
        setPreregistro(updatedPreregistro);
        console.log('Deleted data:', updatedPreregistro);
    };

    const resetForm = () => {
        setFormData({
            nombreDeCampo: '',
            obligatorio: false,
            relacion: '',
            tipoDeCampo: '',
            campoDeControl: false,
            activo: false,
        });
        setIsEditMode(false);
        setEditId(null);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nombreDeCampo', headerName: 'Nombre', width: 150 },
        { field: 'obligatorio', headerName: 'Obligatorio', width: 150, renderCell: (params) => params.value ? 'Yes' : 'No' },
        { field: 'relacion', headerName: 'Relación', width: 150 },
        { field: 'tipoDeCampo', headerName: 'Tipo de Campo', width: 150 },
        { field: 'campoDeControl', headerName: 'Campo de Control', width: 150, renderCell: (params) => params.value ? 'Yes' : 'No' },
        { field: 'activo', headerName: 'Activo', width: 150, renderCell: (params) => params.value ? 'Yes' : 'No' },
        {
            field: 'actions', headerName: 'Acciones', width: 150, renderCell: (params) => (
                <>
                    <Button
                        variant="contained"
                        color="secondary"
                        aria-label="Editar"
                        onClick={() => handleEdit(params.row.id)}
                        style={{ marginRight: '8px', color: '#fff' }}
                    >
                        <EditOutlinedIcon />
                    </Button>
                    <Button
                        variant="contained"
                        aria-label="Eliminar"
                        onClick={() => handleDeleteClick(params.row.id)}
                        style={{ backgroundColor: 'red', color: '#fff' }}
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div>
            <Grid container spacing={3} style={{ marginTop: 20 }}>
                <Grid item xs={12} md={6}>
                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Nombre de Campo</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <TextField
                                    name="nombreDeCampo"
                                    value={formData.nombreDeCampo}
                                    onChange={handleInputChange}
                                    style={{ width: '100%' }}
                                    color='primary'
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Nombre de Campo</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <TextField
                                    name="nombreDeCampo"
                                    value={formData.nombreDeCampo}
                                    onChange={handleInputChange}
                                    style={{ width: '100%' }}
                                    color='primary'
                                    id="outlined-basic"
                                    variant="outlined"
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Obligatorio</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="obligatorio"
                                    checked={formData.obligatorio}
                                    onChange={handleInputChange}
                                    className={classes.largerCheckbox}
                                    color="primary"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Obligatorio</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="obligatorio"
                                    checked={formData.obligatorio}
                                    onChange={handleInputChange}
                                    className={classes.largerCheckbox}
                                    color="primary"
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Relación</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                    <InputLabel id="relacion-label">Relación</InputLabel>
                                    <Select
                                        name="relacion"
                                        labelId="relacion-label"
                                        id="relacion"
                                        value={formData.relacion}
                                        onChange={handleInputChange}
                                        label="Relación"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Login">Login</MenuItem>
                                        <MenuItem value="Nombre">Nombre</MenuItem>
                                        <MenuItem value="Documento">Documento</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                        <MenuItem value="Equipo">Equipo</MenuItem>
                                        <MenuItem value="Apellidos">Apellidos</MenuItem>
                                        <MenuItem value="Otras Opciones">Otras Opciones</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Relación</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <FormControl variant="outlined" className={classes.SelectMovile}>
                                    <InputLabel id="relacion-label">Relación</InputLabel>
                                    <Select
                                        name="relacion"
                                        labelId="relacion-label"
                                        id="relacion"
                                        value={formData.relacion}
                                        onChange={handleInputChange}
                                        label="Relación"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Login">Login</MenuItem>
                                        <MenuItem value="Nombre">Nombre</MenuItem>
                                        <MenuItem value="Documento">Documento</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                        <MenuItem value="Equipo">Equipo</MenuItem>
                                        <MenuItem value="Apellidos">Apellidos</MenuItem>
                                        <MenuItem value="Otras Opciones">Otras Opciones</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Tipo de Cambio</Typography>
                            </div>
                            <div className={classes.cajones}>
                                <FormControl variant="outlined" className={classes.formControlSelect}>
                                    <InputLabel id="tipoDeCampo-label">Tipo de Cambio</InputLabel>
                                    <Select
                                        name="tipoDeCampo"
                                        labelId="tipoDeCampo-label"
                                        id="tipoDeCampo"
                                        value={formData.tipoDeCampo}
                                        onChange={handleInputChange}
                                        label="Tipo de Cambio"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Numerico">Numerico</MenuItem>
                                        <MenuItem value="Texto">Texto</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Tipo de Cambio</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <FormControl variant="outlined" className={classes.SelectMovile}>
                                    <InputLabel id="tipoDeCampo-label">Tipo de Cambio</InputLabel>
                                    <Select
                                        name="tipoDeCampo"
                                        labelId="tipoDeCampo-label"
                                        id="tipoDeCampo"
                                        value={formData.tipoDeCampo}
                                        onChange={handleInputChange}
                                        label="Tipo de Cambio"
                                        style={{ width: '100%' }}
                                    >
                                        <MenuItem value="">
                                            <em>Seleccione</em>
                                        </MenuItem>
                                        <MenuItem value="Numerico">Numerico</MenuItem>
                                        <MenuItem value="Texto">Texto</MenuItem>
                                        <MenuItem value="Telefono">Telefono</MenuItem>
                                        <MenuItem value="Email">Email</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Campo de Control</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="campoDeControl"
                                    checked={formData.campoDeControl}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Campo de Control</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="campoDeControl"
                                    checked={formData.campoDeControl}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </>
                    )}

                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18, marginLeft: 15 }}>Activo</Typography>
                            </div>
                            <div className={classes.alineado}>
                                <Checkbox
                                    name="activo"
                                    checked={formData.activo}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={classes.element}>
                                <Typography style={{ fontSize: 18 }}>Activo</Typography>
                            </div>
                            <div className={classes.alineadoMovile}>
                                <Checkbox
                                    name="activo"
                                    checked={formData.activo}
                                    onChange={handleInputChange}
                                    color="primary"
                                    className={classes.largerCheckbox}
                                />
                            </div>
                        </>
                    )}
                </Grid>
                <Grid item xs={12} md={12}>
                    {isDesktop ? (
                        <div className={classes.alineado}>
                            <div className={classes.roots}>
                                <Button variant="contained" color="primary" onClick={resetForm}
                                    style={{ fontSize: 20, marginRight: 5, width: 150, marginTop: 20 }}>
                                    Nuevo
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleSubmit}
                                    style={{ fontSize: 20, marginRight: 5, width: 150, marginTop: 20 }}>
                                    {isEditMode ? 'Actualizar' : 'Agregar'}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className={classes.alineadoMovile}>
                            <div className={classes.roots}>
                                <Button variant="contained" color="primary" onClick={resetForm}
                                    style={{ fontSize: 15, marginRight: 5, width: 100, marginTop: 20 }}>
                                    Nuevo
                                </Button>
                                <Button variant="contained" color="secondary" onClick={handleSubmit}
                                    style={{ fontSize: 15, marginRight: 5, width: 100, marginTop: 20 }}>
                                    {isEditMode ? 'Actualizar' : 'Agregar'}
                                </Button>
                            </div>
                        </div>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                        <DataGrid rows={preregistro} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PreCampos;