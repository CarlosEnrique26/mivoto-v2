import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox} from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../../../../Tool/Style";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import JoditEditor from 'jodit-react';
import { DataGrid } from '@material-ui/data-grid';
//import Autocomplete from '@material-ui/lab/Autocomplete';

const Imagenes = ({ }) => {
    const  editor  =  useRef ( null ) 
	const  [ content ,  setContent ]  =  useState ( '' )
	
	const  config  =  { 
		 lectura : false  // todas las opciones de https://xdsoft.net/jodit/doc/ 
	}

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
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            width: '100%',
        },
        roots: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        }
    }));

        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

        const classes = useStyles();
        const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

        const top100Films = [
            { title: 'The Shawshank Redemption', year: 1994 },
            { title: 'The Godfather', year: 1972 },
            { title: 'The Godfather: Part II', year: 1974 }, 
        ];

        const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            {
                field: 'Miniatura',
                headerName: 'Miniatura',
                width: 150,
                editable: true,
            },
            {
                field: 'Nombre',
                headerName: 'Nombre',
                width: 150,
                editable: true,
            },
            {
                field: 'Enlace',
                headerName: 'Enlace',
                width: 450,
                editable: true,
            },
            {
                field: 'Opciones',
                headerName: 'Opciones',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                    `${params.getValue(params.id, 'Miniatura') || ''} ${
                    params.getValue(params.id, 'Nombre') || ''
                }`,
            },
        ];

        const rows = [
            { id: 1, Miniatura: '***', Nombre: 'png', Enlace: 'https://localhost:44377/Resource/Votation/Repository/pulsador.png' },
            { id: 2, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 3, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 4, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 5, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 6, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 7, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 8, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
            { id: 9, Miniatura: '***', Nombre: 'png', Enlace: 'https://mivoto.es/Resource/Votation/Repository/1.png' },
        ];

    return (
        <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    <div style={{marginBottom: 20}} className={classes.root}>
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained" color="primary" component="span">
                                                Cargar Imagen
                                            </Button>
                                        </label>
                                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                            </IconButton>
                                        </label>
                                        </div>
                                        <div style={{ height: 400, width: '100%' }}>
                                            <DataGrid
                                                rows={rows}
                                                columns={columns}
                                                pageSize={5}
                                                checkboxSelection
                                                disableSelectionOnClick
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Grid>  
                        </div>
    );
}

export default Imagenes;