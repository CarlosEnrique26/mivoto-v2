import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";


const PreRegister = (props) =>{
    const columns = [
        { field: 'id', headerName: 'Nombre', width: 120 },
        { field: 'firstName', headerName: 'URL', width: 400 },
        { field: 'lastName', headerName: 'Estado', width: 130 }

    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime'},
        { id: 4, lastName: 'Stark', firstName: 'Arya' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys'},
        { id: 6, lastName: 'Melisandre', firstName: null },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
    ];


    const goCreate =() => {
        props.history.push('preregistro');
    }

    return (

        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Lista de Pre Registros</h1>
                <label style={style.titleinfo}>Listado de todos los preregistrados creados</label>
            </Container>
                <Container maxWidth={false} style={style.barContain}>
                    <Grid style={style.gridcontainer}>

                                <Container maxWidth={false}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={12} >
                                            <Grid item xs={12} md={6}>
                                                <Button color="primary" onClick={goCreate} style={{marginTop:20}}  fullWidth variant="outlined" size="medium">Nuevo PreRegistro</Button>
                                                
                                            </Grid>
                                            <div style={{ height: 400, width: '100%' ,marginTop:20}}>
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

export default PreRegister;