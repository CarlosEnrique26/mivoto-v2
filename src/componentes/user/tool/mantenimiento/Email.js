import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Email = (props) => {
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
                <h1 style={style.title}>Establecer email</h1>
                <label style={style.titleinfo}></label>
            </Container>
            <Container maxWidth={false} style={style.barContain}>
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

export default Email;
