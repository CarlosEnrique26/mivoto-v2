import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Empresas = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [empresaData, setEmpresaData] = useState({
        BusinessName: '',
        Representative: '',
        Address: '',
        LogoPath: '',
        LogoName: '',
        TypeDocument: '',
        AddressEmail: '',
        DateRegister: '',
        Phone: '',
        // Agrega los otros campos aquí
    });
    const [rows, setRows] = useState([]);


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpresaData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogoPathChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Crear una URL para la imagen seleccionada
            const logoPath = URL.createObjectURL(file);
            // Actualizar el estado con la ruta de la imagen seleccionada
            setEmpresaData(prevState => ({
                ...prevState,
                LogoPath: logoPath
            }));
        }
    };


    const columns = [
        { field: 'id', headerName: 'Razón Social', width: 250 },
        { field: 'firstName', headerName: 'Dirección', width: 250 },
        { field: 'secondName', headerName: 'NIF', width: 200 },
        { field: 'lastName', headerName: 'Representante', width: 200 },
        { field: 'logoPath', headerName: 'Logo', width: 200 },
        { field: 'typeDocument', headerName: 'Tipo de Documento', width: 200 },
        { field: 'addressEmail', headerName: 'Correo Electrónico', width: 250 },
        { field: 'dateRegister', headerName: 'Fecha de Registro', width: 200 },
        { field: 'phone', headerName: 'Teléfono', width: 150 },
        // Agrega las demás columnas aquí
        {
            field: '', headerName: 'Acciones', width: 200, renderCell: (params) => (
                <React.Fragment>
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
                        color="error"
                        aria-label="Eliminar"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];
    
    const handleSubmit = () => {
        // Aquí puedes enviar los datos de la empresa al servidor
        console.log('Datos de la empresa:', empresaData);

        const newRow = {
            
                id: empresaData.BusinessName,
                firstName: empresaData.Address,
                secondName: empresaData.Representative,
                lastName: empresaData.LogoName,
                logoPath: empresaData.LogoPath,
                typeDocument: empresaData.TypeDocument,
                addressEmail: empresaData.AddressEmail,
                dateRegister: empresaData.DateRegister,
                phone: empresaData.Phone,
                // Agrega los demás campos según sea necesario
            };

            setRows(prevRows => [...prevRows, ...newRow]);
        // Luego puedes cerrar el modal
        handleCloseModal();
    };


    const handleEdit = (id) => {
        // Implementar lógica de edición
    };

    const handleDelete = (id) => {
        // Implementar lógica de eliminación
    };

    const goCreate = () => {
        props.history.push('preregistro');
    }

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Empresa</h1>
                <label style={style.titleinfo}>nombre</label>
            </Container>
            <Container maxWidth={false} style={style.barContain}>
                <Grid style={style.gridcontainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Button
                                color="primary"
                                onClick={handleOpenModal}
                                style={{ marginTop: 20, marginBottom: 20, width: 250 }}
                                variant="outlined"
                                size="medium"
                            >
                                Nueva Empresa
                            </Button>
                            <div style={{ height: 400, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Registrar Nueva Empresa</DialogTitle>
                <DialogContent>
                    <form>
                    <TextField
                            name="BusinessName"
                            value={empresaData.BusinessName}
                            onChange={handleInputChange}
                            label="Nombre de la Empresa"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="Representative"
                            value={empresaData.Representative}
                            onChange={handleInputChange}
                            label="Representante"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="Address"
                            value={empresaData.Address}
                            onChange={handleInputChange}
                            label="Dirección"
                            fullWidth
                            margin="normal"
                        />
                        {/* Botón para seleccionar el logo */}
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-logopath"
                            multiple
                            type="file"
                            onChange={handleLogoPathChange}
                        />
                        <label htmlFor="contained-button-logopath">
                            <Button variant="contained" color="primary" component="span">
                                Seleccionar Logo
                            </Button>
                        </label>
                        <TextField
                            name="LogoName"
                            value={empresaData.LogoName}
                            onChange={handleInputChange}
                            label="Nombre del logo"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="TypeDocument"
                            value={empresaData.TypeDocument}
                            onChange={handleInputChange}
                            label="Tipo de Documento"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="AddressEmail"
                            value={empresaData.AddressEmail}
                            onChange={handleInputChange}
                            label="Correo Electrónico"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="DateRegister"
                            value={empresaData.DateRegister}
                            onChange={handleInputChange}
                            label="Fecha de Registro"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="Phone"
                            value={empresaData.Phone}
                            onChange={handleInputChange}
                            label="Teléfono"
                            fullWidth
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Empresas;
