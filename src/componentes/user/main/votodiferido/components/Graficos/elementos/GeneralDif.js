import { Grid, TextField, Typography, Checkbox, FormControl, InputLabel, Select, MenuItem, IconButton, Button} from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const GeneralDif = () => {
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
        selectEmpty: {
            marginTop: theme.spacing(2),
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

    const classes = useStyles();
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

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Libreria</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Chart js</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Chart js"
                                                >
                                                <MenuItem value="">
                                                    <em>Chart js</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Google Chart</MenuItem>
                                                <MenuItem value={20}>Chart js</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Libreria</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Chart js</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Chart js"
                                                >
                                                <MenuItem value="">
                                                    <em>Chart js</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Google Chart</MenuItem>
                                                <MenuItem value={20}>Chart js</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo de Gráfico</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Bar</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select1}
                                                onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Bar"
                                                >
                                                <MenuItem value="">
                                                    <em>Bar</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Pie</MenuItem>
                                                <MenuItem value={20}>Line</MenuItem>
                                                <MenuItem value={30}>Doughtnut</MenuItem>
                                                <MenuItem value={40}>Bar</MenuItem>
                                                <MenuItem value={50}>Column</MenuItem>
                                                <MenuItem value={60}>Stacked Bar</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Tipo de Gráfico</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Bar</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select1}
                                                onChange={(e) => handleChangeSelect('Select1', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Bar"
                                                >
                                                <MenuItem value="">
                                                    <em>Bar</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Pie</MenuItem>
                                                <MenuItem value={20}>Line</MenuItem>
                                                <MenuItem value={30}>Doughtnut</MenuItem>
                                                <MenuItem value={40}>Bar</MenuItem>
                                                <MenuItem value={50}>Column</MenuItem>
                                                <MenuItem value={60}>Stacked Bar</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Resultados</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ambos</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select2}
                                                onChange={(e) => handleChangeSelect('Select2', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Ambos"
                                                >
                                                <MenuItem value="">
                                                    <em>Ambos</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>Numero</MenuItem>
                                                <MenuItem value={30}>Porcentaje</MenuItem>
                                                <MenuItem value={40}>Ambos</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Resultados</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Ambos</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select2}
                                                onChange={(e) => handleChangeSelect('Select2', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Ambos"
                                                >
                                                <MenuItem value="">
                                                    <em>Ambos</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>Numero</MenuItem>
                                                <MenuItem value={30}>Porcentaje</MenuItem>
                                                <MenuItem value={40}>Ambos</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Ordenar Por</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Valor</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select3}
                                                onChange={(e) => handleChangeSelect('Select3', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Valor"
                                                >
                                                <MenuItem value="">
                                                    <em>Valor</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Descripcion</MenuItem>
                                                <MenuItem value={30}>Valor</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Ordenar por</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Valor</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select3}
                                                onChange={(e) => handleChangeSelect('Select3', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Valor"
                                                >
                                                <MenuItem value="">
                                                    <em>Valor</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>Descripcion</MenuItem>
                                                <MenuItem value={30}>Valor</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Orden</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Descendente</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select4}
                                                onChange={(e) => handleChangeSelect('Select4', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Descendente"
                                                >
                                                <MenuItem value="">
                                                    <em>Descendente</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Ascendente</MenuItem>
                                                <MenuItem value={30}>Descendente</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Orden</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Descendente</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select4}
                                                onChange={(e) => handleChangeSelect('Select4', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Descendente"
                                                >
                                                <MenuItem value="">
                                                    <em>Descendente</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Selecione</MenuItem>
                                                <MenuItem value={20}>Ascendente</MenuItem>
                                                <MenuItem value={30}>Descendente</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )}  
                                        
                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Fondo Transparente</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                            
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Fondo Transparente</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox
                                                    className={classes.largerCheckbox}
                                                    defaultChecked
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />
                                            </div>
                                        
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Contador de Resultados</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <Checkbox
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                            
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Contador de Resultados</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Checkbox 
                                                    color="primary"
                                                    className={classes.largerCheckbox}
                                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                            </div>
                                        
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Imagen de Fondo</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                                <div className={classes.roots}>
                                                    <input

                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                        Seleccionar archivo
                                                        </Button>
                                                    </label>
                                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                                    <label htmlFor="icon-button-file">
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.alineadoMovile}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Imagen de Fondo</Typography>
                                                </div>
                                                <div className={classes.roots}>
                                                    <input

                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button variant="contained" color="primary" component="span">
                                                            Seleccionar archivo
                                                        </Button>
                                                    </label>
                                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                                    <label htmlFor="icon-button-file">
                                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                            <PhotoCamera />
                                                        </IconButton>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Chart</Typography>
                                            </div>
                                            
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.alineadoMovile}>
                                                <div className={classes.element}>
                                                    <Typography style={{fontSize: 18}}>Chart</Typography>
                                                </div>
                                                
                                            </div>
                                        </>
                                        )}
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default GeneralDif;