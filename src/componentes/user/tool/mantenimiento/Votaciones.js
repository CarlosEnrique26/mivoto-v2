import React from "react";
import { Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox, MenuItem, InputLabel, FormControl, Select} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';

const Votaciones = (props) => {
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
            //marginBottom: theme.spacing(2), // Add some margin between rows
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
            //marginBottom: theme.spacing(2), // Add some margin between rows
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

    const classes = useStyles();
        const [selectValues, setSelectValues] = React.useState({
            Select0: '',
            Select1: ''
        });
        
        const handleChangeSelect = (name, value) => {
            setSelectValues(prevState => ({
                ...prevState,
                [name]: value
            }));
        };        

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const columns = [
        { field: 'id', headerName: 'Nombre', width: 300 },
        { field: 'firstName', headerName: 'Correo', width: 300 },
        { field: 'lastName', headerName: 'Predeterminado', width: 300 },
        {
            field: 'option', headerName: '', width: 200, renderCell: (params) => (
                <React.Fragment>
                    <Button variant="contained" 
                            color="secondary" 
                            style={{ marginRight: '15px',marginLeft: '15px', 
                                    color: '#fff'
                                    }}
                                    >
                        <EditOutlinedIcon />
                    </Button>
                    <Button 
                        variant="contained"
                        color="error" 
                        
                        >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];

    const rows = [
        { id: 'Prueba1', firstName: 'Snow@', lastName: 'Jon', option: '' },
        { id: 'Prueba2', firstName: 'Lannister@', lastName: 'Cersei', option: '' },
        { id: 'Prueba3', firstName: 'Lannister@', lastName: 'Jaime', option: '' },
        { id: 'Prueba4', firstName: 'Stark@', lastName: 'Arya', option: '' },
        { id: 'Prueba5', firstName: 'Targaryen@', lastName: 'Daenerys', option: '' },
        { id: 'Prueba6', firstName: 'Melisandre@', lastName: null, option: '' },
        { id: 'Prueba7', firstName: 'Clifford@', lastName: 'Ferrara', option: '' },
        { id: 'Prueba8', firstName: 'Frances@', lastName: 'Rossini', option: '' },
        { id: 'Prueba9', firstName: 'Roxie@', lastName: 'Harvey', option: '' },
    ];

    const goCreate = () => {
        props.history.push('preregistro');
    }

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
            
            </Container>
            <Container maxWidth={false} style={style.barContain}>
            {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Empresas</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Primer Voto"
                                                >
                                                <MenuItem value="">
                                                    <em>Seleccione</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Empresas</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Primer Voto</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 
                                {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Tipo de Voto</Typography>
                                            </div>
                                            <div className={classes.cajones}>

                                            <FormControl variant="outlined" className={classes.formControlSelect}>
                                                <InputLabel id="demo-simple-select-outlined-label">Seleccione</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Seleccione"
                                                >
                                                <MenuItem value="">
                                                    <em>Primer Voto</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                            
                                            </div>
                                        </div>
                                        ) : (
                                        <>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Tipo de Voto</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            
                                            <FormControl variant="outlined" className={classes.SelectMovile}>
                                                <InputLabel id="demo-simple-select-outlined-label">Primer Voto</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectValues.Select0}
                                                onChange={(e) => handleChangeSelect('Select0', e.target.value)}
                                                style={{width:'100%'}}
                                                label="Primer Voto"
                                                >
                                                <MenuItem value="">
                                                    <em>Primer Voto</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Seleccione</MenuItem>
                                                <MenuItem value={20}>ReVoto</MenuItem>
                                                <MenuItem value={30}>Primer Voto</MenuItem>
                                                </Select>
                                            </FormControl>
                                        
                                            </div>
                                        </>
                                        )} 
                <Grid style={style.gridcontainer}>
                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid item xs={12} md={6}>
                                    <Button color="primary" onClick={goCreate} style={{ marginTop: 20 }} fullWidth variant="outlined" size="medium">Nuevo Email</Button>
                                </Grid>
                                <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </Container>
    );
}

export default Votaciones;
