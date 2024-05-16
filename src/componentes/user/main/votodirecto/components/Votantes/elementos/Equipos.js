import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const Equipos = () => {
    const useStyles = makeStyles((theme) => ({
        rootTable: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
        },
        root: {
            maxWidth: 450
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

    const columns = [
        { id: 'codigo', label: 'Codigo', minWidth: 170 },
        { id: 'equipo', label: 'Equipo', minWidth: 170 },
        {
          id: 'estado',
          label: 'Estado',
          minWidth: 170,
          align: 'lefth',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'opciones',
          label: 'Opciones',
          minWidth: 170,
          align: 'lefth',
          format: (value) => value.toLocaleString('en-US'),
        }
    ];
      
    function createData(codigo, equipo, estado, opciones) {
        return { codigo, equipo, estado, opciones };
    }
      
    const rows = [
        createData('28', '', 'false', ''),
        createData('31', 'Equipo1', 'true', ''),
        createData('31', 'Equipo2', 'true', '')
    ];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [formData, setFormData] = useState({
        nombre: '',
        contrasena: false,
        equipo: '',
        estado: '',
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = () => {
        console.log('Datos del formulario:', formData);
    };

    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <div>
            <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                    <div className={classes.groupalineado}>
                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Nombre</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        style={{ width: '80%' }}
                                        color='primary'
                                        id="nombre"
                                        name="nombre"
                                        label=""
                                        variant="outlined"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Nombre</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        style={{ width: '100%' }}
                                        color='primary'
                                        id="nombre"
                                        name="nombre"
                                        label=""
                                        variant="outlined"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Contraseña Alfanumérica (14 min)</Typography>
                                </div>
                                <div className={classes.alineado}>
                                    <Checkbox
                                        color="primary"
                                        className={classes.largerCheckbox}
                                        name="contrasena"
                                        checked={formData.contrasena}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>
                                        Contraseña Alfanumérica 14 min
                                    </Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Checkbox
                                        color="primary"
                                        className={classes.largerCheckbox}
                                        name="contrasena"
                                        checked={formData.contrasena}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Button
                                        style={{ marginRight: '10px' }}
                                        variant="contained"
                                        color="primary"
                                        component="span"
                                        onClick={handleSave}
                                    >
                                        Guardar Equipo
                                    </Button>
                                </div>
                                <div className={classes.alineado}>
                                    <Button
                                        style={{ marginRight: '10px' }}
                                        variant="contained"
                                        color="secondary"
                                        component="span"
                                        onClick={() => setFormData({ nombre: '', contrasena: false, equipo: '', estado: '' })}
                                    >
                                        Nuevo
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Button
                                        style={{ marginRight: '10px', width: '100%' }}
                                        variant="contained"
                                        color="primary"
                                        component="span"
                                        onClick={handleSave}
                                    >
                                        Guardar Equipo
                                    </Button>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <Button
                                        style={{ marginRight: '10px', width: '100%' }}
                                        variant="contained"
                                        color="secondary"
                                        component="span"
                                        onClick={() => setFormData({ nombre: '', contrasena: false, equipo: '', estado: '' })}
                                    >
                                        Nuevo
                                    </Button>
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <Paper className={classes.rootTable}>
                                    <TableContainer className={classes.container}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo}>
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell key={column.id} align={column.align}>
                                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </div>
                        ) : (
                            <>
                                <div className={classes.elementMovile}>
                                    <Paper className={classes.rootTable}>
                                        <TableContainer className={classes.container}>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        {columns.map((column) => (
                                                            <TableCell
                                                                key={column.id}
                                                                align={column.align}
                                                                style={{ minWidth: column.minWidth }}
                                                            >
                                                                {column.label}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo}>
                                                                {columns.map((column) => {
                                                                    const value = row[column.id];
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align}>
                                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                                        </TableCell>
                                                                    );
                                                                })}
                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[10, 25, 100]}
                                            component="div"
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </Paper>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Equipos;