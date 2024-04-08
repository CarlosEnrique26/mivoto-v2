import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const Gestion = () => {
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
        { id: 'codigo', label: 'Codigo', minWidth: 100 },
        { id: 'nombre', label: 'Nombre', minWidth: 100 },
        { id: 'dni', label: 'DNI', minWidth: 100 },
        { id: 'telefono', label: 'Teléfono', minWidth: 100 },
        { id: 'login', label: 'Login', minWidth: 100 },
        { id: 'Email', label: 'Email', minWidth: 100 },
        { id: 'contrasenamail', label: 'Contraseña Mail', minWidth: 100 },
        { id: 'contrasenasms', label: 'Contraseña SMS', minWidth: 100 },
        {
            id: 'voto',
            label: 'Voto',
            minWidth: 100,
            align: 'lefth',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'equipo',
            label: 'Equipo',
            minWidth: 100,
            align: 'lefth',
            format: (value) => value.toLocaleString('en-US'),
        }
    ];
        
        function createData(codigo, nombre, dni, telefono, login, contrasenamail, contrasenasms) {
            return { codigo, nombre, dni, telefono, login, contrasenamail, contrasenasms };
    }
    
    const rows = [
        createData('28', '', 'false', ''),
        createData('31', 'Equipo1', 'true', ''),
        createData('31', 'Equipo2', 'true', '')
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const classes = useStyles();
        const [Select0, setSelect0] = React.useState('');

        const handleChangeSelect = (event) => {
        setSelect0(event.target.value);
        };
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));


    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (        
                                        <div className={classes.element}>
                                            <div className={classes.groupbutton}>
                                                <Button  style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Eliminar
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Enviar Contraseña
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Programar envio
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Envio SMS Masivo
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Reiniciar Contraseña
                                                </Button>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                        <div className={classes.groupbuttonMovile}>
                                        <Button  style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Eliminar
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Enviar Contraseña
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Programar envio
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="contained" color="primary" component="span">
                                                    Envio SMS Masivo
                                                </Button>
                                                <Button style={{ marginRight: '10px' }} variant="outlined" color="primary" component="span">
                                                    Reiniciar Contraseña
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
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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

export default Gestion;