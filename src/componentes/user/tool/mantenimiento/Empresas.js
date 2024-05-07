import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';

const Empresas = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [triggerRerender, setTriggerRerender] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
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
            const logoPath = URL.createObjectURL(file);
            setEmpresaData(prevState => ({
                ...prevState,
                LogoPath: logoPath,
                LogoFile: file  // Guardar el archivo en el estado para uso posterior (opcional)
            }));
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'razon', headerName: 'Razón Social', width: 150 },
        { field: 'address', headerName: 'Dirección', width: 150 },
        { field: 'typeDocument', headerName: 'Tipo de Documento', width: 150 },
        { field: 'representative', headerName: 'Representante', width: 150 },
        { field: 'logoPath', headerName: 'Logo', width: 150,
            renderCell: (params) => (
                <img src={params.value} alt="Logo" style={{ width: '100px'}} />
            )
        },
        { field: 'logoName', headerName: 'Nombre de Logo', width: 150 },
        { field: 'addressEmail', headerName: 'Correo Electrónico', width: 150 },
        { field: 'dateRegister', headerName: 'Fecha de Registro', width: 150 },
        { field: 'phone', headerName: 'Teléfono', width: 150 },
        // Aquí puedes agregar más columnas según los campos que tengas
        {
            field: 'actions', headerName: 'Acciones', width: 150, renderCell: (params) => (
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
                        aria-label="Eliminar"
                        onClick={() => handleDelete(params.row.id)}
                        style={{ backgroundColor: 'red', color: '#fff' }}  // Ajusta el color de fondo a rojo
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];
    
    const handleSubmit = () => {
        const newRow = {
            razon: empresaData.BusinessName,
            address: empresaData.Address,
            typeDocument: empresaData.TypeDocument,
            representative: empresaData.Representative,
            logoPath: empresaData.LogoPath,
            logoName: empresaData.LogoName,
            addressEmail: empresaData.AddressEmail,
            dateRegister: empresaData.DateRegister,
            phone: empresaData.Phone,
        };

        console.log('Guardando datos de la empresa:', newRow);  // Imprime los datos en la consola
    
        if (isEditMode) {
            console.log('Actualizando datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
            setRows(prevRows => prevRows.map(row => row.id === editId ? newRow : row));
            setIsEditMode(false);  // Reset the edit mode
            setEditId(null);       // Clear the edit id
        } else {
            setRows(prevRows => [...prevRows, newRow]);
            console.log('Actualizando datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
        }
    
        setEmpresaData({ // Clear the form
            BusinessName: '',
            Representative: '',
            Address: '',
            LogoPath: '',
            LogoName: '',
            TypeDocument: '',
            AddressEmail: '',
            DateRegister: '',
            Phone: '',
        });
        setOpenModal(false);
    };


    const handleEdit = (id) => {
        const rowToEdit = rows.find(row => row.id === id);
        if (rowToEdit) {
            setEmpresaData({
                BusinessName: rowToEdit.razon,
                Address: rowToEdit.address,
                TypeDocument: rowToEdit.typeDocument,
                Representative: rowToEdit.representative,
                LogoPath: rowToEdit.logoPath,
                LogoName: rowToEdit.logoName,
                AddressEmail: rowToEdit.addressEmail,
                DateRegister: rowToEdit.dateRegister,
                Phone: rowToEdit.phone,
            });
            setEditId(id); // Guarda el ID de la fila que se está editando
            setIsEditMode(true);
            setOpenModal(true);
        }
    };

    const handleDelete = (id) => {
        // Filtra las filas para eliminar la fila con el id dado
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
    
    };

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
                        {empresaData.LogoPath && (
                            <div style={{ margin: '10px 0' }}>
                                <img src={empresaData.LogoPath} alt="Logo Preview" style={{ height: '100px' }} />
                            </div>
                        )}
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
                <Button onClick={() => {
                        setOpenModal(false);
                        setIsEditMode(false);
                        setEditId(null);
                    }} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {isEditMode ? 'Actualizar' : 'Guardar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Empresas;
