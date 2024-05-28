import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';
import { SaveEnterprise } from "../../../../actions/UserAction";


const Empresas = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [triggerRerender, setTriggerRerender] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [updateMessage, setUpdateMessage] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [empresaData, setEmpresaData] = useState({
        BusinessName: '',
        Representative: '',
        Address: '',
        LogoPath: '',
        LogoName: '',
        TypeDocument: '',
        AddressEmail: '',
        DocumentNumber: '',
        Phone: '',
        // Agrega los otros campos aquí
    });
    const [rows, setRows] = useState([]);


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        // Restablecer los datos del formulario
        setEmpresaData({
            BusinessName: '',
            Representative: '',
            Address: '',
            LogoPath: '',
            LogoName: '',
            TypeDocument: '',
            AddressEmail: '',
            DocumentNumber: '',
            Phone: '',
            // Asegúrate de restablecer todos los campos necesarios
        });
        setOpenModal(false); // Cerrar el modal
        setIsEditMode(false); // Restablecer el modo de edición
        setEditId(null); // Limpiar el ID de edición
        setErrors({}); // Limpiar cualquier error de validación
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpresaData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Limpiar errores específicos cuando el usuario cambia un valor
    if (errors[name]) setErrors({ ...errors, [name]: "" });
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
        { field: 'BusinessName', headerName: 'Razón Social', width: 150 },
        { field: 'Address', headerName: 'Dirección', width: 150 },
        { field: 'TypeDocument', headerName: 'Tipo de Documento', width: 150 },
        { field: 'Representative', headerName: 'Representante', width: 150 },
        { field: 'LogoPath', headerName: 'Logo', width: 150,
            renderCell: (params) => (
                <img src={params.value} alt="Logo" style={{ width: '100px'}} />
            )
        },
        { field: 'LogoName', headerName: 'Nombre de Logo', width: 150 },
        { field: 'AddressEmail', headerName: 'Correo Electrónico', width: 150 },
        { field: 'DocumentNumber', headerName: 'Numero de Documento', width: 150 },
        { field: 'Phone', headerName: 'Teléfono', width: 150 },
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
                        onClick={() => handleDeleteClick(params.row.id)}
                        style={{ backgroundColor: 'red', color: '#fff' }}  // Ajusta el color de fondo a rojo
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];
    
    const handleSubmit = () => {
        if (!validate()) {
            console.error("Validación fallida.");
            return; // Detener la función si hay errores
        }
        const newRow = {
            id: editId || uuidv4(),
            razon: empresaData.BusinessName,
            address: empresaData.Address,
            typeDocument: empresaData.TypeDocument,
            representative: empresaData.Representative,
            logoPath: empresaData.LogoPath,
            logoName: empresaData.LogoName,
            addressEmail: empresaData.AddressEmail,
            documentNumber: empresaData.DocumentNumber,
            phone: empresaData.Phone,
        };

       // console.log('Se ha guardando datos de la empresa:', newRow);  // Imprime los datos en la consola
    
        if (isEditMode) {
            console.log('Se ha actualizado los datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
            setRows(prevRows => prevRows.map(row => row.id === editId ? newRow : row));
            setIsEditMode(false);  // Reset the edit mode
            setEditId(null);       // Clear the edit id
            setUpdateMessage("Datos de la empresa actualizados correctamente.");
            setTimeout(() => setUpdateMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
        } else {
            setRows(prevRows => [...prevRows, newRow]);
            setSuccessMessage("Empresa agregada correctamente.");
            console.log('Se ha guardando los datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
            SaveEnterprise(empresaData).then(response => {
                console.log('se registro exitosamente la empresa',response);
            })
            setTimeout(() => setSuccessMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
        }
    
        setEmpresaData({ // Clear the form
            BusinessName: '',
            Representative: '',
            Address: '',
            LogoPath: '',
            LogoName: '',
            TypeDocument: '',
            AddressEmail: '',
            DocumentNumber: '',
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
                DocumentNumber: rowToEdit.documentNumber,
                Phone: rowToEdit.phone,
            });
            setEditId(id); // Guarda el ID de la fila que se está editando
            setIsEditMode(true);
            setOpenModal(true);
        }
    };

    const handleDeleteClick = (id) => {
        setRowToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleDelete = (id) => {
        // Filtra las filas para eliminar la fila con el id dado
        if (rowToDelete !== null) {
            setRows(prevRows => prevRows.filter(row => row.id !== rowToDelete));
            setRowToDelete(null);
        }
        setOpenConfirmDialog(false);
        setDeleteMessage("Empresa eliminada correctamente.");
        setTimeout(() => setDeleteMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
    
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.BusinessName = empresaData.BusinessName ? "" : "El nombre de la empresa es obligatorio.";
        tempErrors.Representative = empresaData.Representative ? "" : "El nombre del representante es obligatorio.";
        tempErrors.Address = empresaData.Address ? "" : "La dirección es obligatoria.";
        tempErrors.TypeDocument = empresaData.TypeDocument ? "" : "El tipo de documento es obligatorio.";
        tempErrors.AddressEmail = (empresaData.AddressEmail && /^\S+@\S+\.\S+$/.test(empresaData.AddressEmail)) ? "" : "Correo electrónico no válido.";
        tempErrors.Phone = (empresaData.Phone && empresaData.Phone.length >= 9) ? "" : "El teléfono debe tener al menos 10 dígitos.";
    
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Empresa</h1>
                <label style={style.titleinfo}>Listado de empresas</label>
            </Container>
            {/* Mensaje de éxito */}
            <>
                {successMessage && (
                    <div style={style.successMessage}>
                        {successMessage}
                    </div>
                )}
                {updateMessage && (
                    <div style={style.updateMessage}>
                        {updateMessage}
                    </div>
                )}
                {deleteMessage && (
                    <div style={style.deleteMessage}>
                        {deleteMessage}
                    </div>
                )}
            </>
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
                            <DataGrid key={triggerRerender} rows={rows} columns={columns} pageSize={5} checkboxSelection />
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
                            error={!!errors.BusinessName}
                            helperText={errors.BusinessName}
                        />
                        <TextField
                            name="Representative"
                            value={empresaData.Representative}
                            onChange={handleInputChange}
                            label="Representante"
                            fullWidth
                            margin="normal"
                            error={!!errors.Representative}
                            helperText={errors.Representative}
                        />
                        <TextField
                            name="Address"
                            value={empresaData.Address}
                            onChange={handleInputChange}
                            label="Dirección"
                            fullWidth
                            margin="normal"
                            error={!!errors.Address}
                            helperText={errors.Address}
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
                            error={!!errors.LogoName}
                            helperText={errors.LogoName}
                        />
                        <TextField
                            name="TypeDocument"
                            value={empresaData.TypeDocument}
                            onChange={handleInputChange}
                            label="Tipo de Documento"
                            fullWidth
                            margin="normal"
                            error={!!errors.TypeDocument}
                            helperText={errors.TypeDocument}
                        />
                        <TextField
                            name="AddressEmail"
                            value={empresaData.AddressEmail}
                            onChange={handleInputChange}
                            label="Correo Electrónico"
                            fullWidth
                            margin="normal"
                            error={!!errors.AddressEmail}
                            helperText={errors.AddressEmail}
                        />
                        <TextField
                            name="DocumentNumber"
                            value={empresaData.DocumentNumber}
                            onChange={handleInputChange}
                            label="Numero de Documento"
                            fullWidth
                            margin="normal"
                            error={!!errors.DocumentNumber}
                            helperText={errors.DocumentNumber}
                        />
                        <TextField
                            name="Phone"
                            value={empresaData.Phone}
                            onChange={handleInputChange}
                            label="Teléfono"
                            fullWidth
                            margin="normal"
                            error={!!errors.Phone}
                            helperText={errors.Phone}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setOpenModal(false);
                        setIsEditMode(false);
                        handleCloseModal();
                        setEditId(null);
                    }} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {isEditMode ? 'Actualizar' : 'Guardar'}
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmar eliminar "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Esta seguro que desea eliminar?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
                        NO
                    </Button>
                    <Button onClick={() => handleDelete()} color="primary" autoFocus>
                        SI
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Empresas;




/*

import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
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
    const [successMessage, setSuccessMessage] = useState("");
    const [updateMessage, setUpdateMessage] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");
    const [errors, setErrors] = useState({});
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
        // Restablecer los datos del formulario
        setEmpresaData({
            BusinessName: '',
            Representative: '',
            Address: '',
            LogoPath: '',
            LogoName: '',
            TypeDocument: '',
            AddressEmail: '',
            DateRegister: '',
            Phone: '',
            // Asegúrate de restablecer todos los campos necesarios
        });
        setOpenModal(false); // Cerrar el modal
        setIsEditMode(false); // Restablecer el modo de edición
        setEditId(null); // Limpiar el ID de edición
        setErrors({}); // Limpiar cualquier error de validación
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpresaData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Limpiar errores específicos cuando el usuario cambia un valor
    if (errors[name]) setErrors({ ...errors, [name]: "" });
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
                        onClick={() => handleDeleteClick(params.row.id)}
                        style={{ backgroundColor: 'red', color: '#fff' }}  // Ajusta el color de fondo a rojo
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];
    
    const handleSubmit = () => {
        if (!validate()) {
            console.error("Validación fallida.");
            return; // Detener la función si hay errores
        }
        const newRow = {
            id: editId || uuidv4(),
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

       // console.log('Se ha guardando datos de la empresa:', newRow);  // Imprime los datos en la consola
    
        if (isEditMode) {
            console.log('Se ha actualizado los datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
            setRows(prevRows => prevRows.map(row => row.id === editId ? newRow : row));
            setIsEditMode(false);  // Reset the edit mode
            setEditId(null);       // Clear the edit id
            setUpdateMessage("Datos de la empresa actualizados correctamente.");
            setTimeout(() => setUpdateMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
        } else {
            setRows(prevRows => [...prevRows, newRow]);
            setSuccessMessage("Empresa agregada correctamente.");
            console.log('Se ha guardando los datos de la empresa:', newRow);  // Imprime los datos actualizados en la consola
            setTimeout(() => setSuccessMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
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

    const handleDeleteClick = (id) => {
        setRowToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleDelete = (id) => {
        // Filtra las filas para eliminar la fila con el id dado
        if (rowToDelete !== null) {
            setRows(prevRows => prevRows.filter(row => row.id !== rowToDelete));
            setRowToDelete(null);
        }
        setOpenConfirmDialog(false);
        setDeleteMessage("Empresa eliminada correctamente.");
        setTimeout(() => setDeleteMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
    
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.BusinessName = empresaData.BusinessName ? "" : "El nombre de la empresa es obligatorio.";
        tempErrors.Representative = empresaData.Representative ? "" : "El nombre del representante es obligatorio.";
        tempErrors.Address = empresaData.Address ? "" : "La dirección es obligatoria.";
        tempErrors.TypeDocument = empresaData.TypeDocument ? "" : "El tipo de documento es obligatorio.";
        tempErrors.AddressEmail = (empresaData.AddressEmail && /^\S+@\S+\.\S+$/.test(empresaData.AddressEmail)) ? "" : "Correo electrónico no válido.";
        tempErrors.Phone = (empresaData.Phone && empresaData.Phone.length >= 9) ? "" : "El teléfono debe tener al menos 10 dígitos.";
    
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Empresa</h1>
                <label style={style.titleinfo}>Listado de empresas</label>
            </Container>
            
            <>
                {successMessage && (
                    <div style={style.successMessage}>
                        {successMessage}
                    </div>
                )}
                {updateMessage && (
                    <div style={style.updateMessage}>
                        {updateMessage}
                    </div>
                )}
                {deleteMessage && (
                    <div style={style.deleteMessage}>
                        {deleteMessage}
                    </div>
                )}
            </>
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
                            <DataGrid key={triggerRerender} rows={rows} columns={columns} pageSize={5} checkboxSelection />
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
                            error={!!errors.BusinessName}
                            helperText={errors.BusinessName}
                        />
                        <TextField
                            name="Representative"
                            value={empresaData.Representative}
                            onChange={handleInputChange}
                            label="Representante"
                            fullWidth
                            margin="normal"
                            error={!!errors.Representative}
                            helperText={errors.Representative}
                        />
                        <TextField
                            name="Address"
                            value={empresaData.Address}
                            onChange={handleInputChange}
                            label="Dirección"
                            fullWidth
                            margin="normal"
                            error={!!errors.Address}
                            helperText={errors.Address}
                        />
                        
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
                            error={!!errors.LogoName}
                            helperText={errors.LogoName}
                        />
                        <TextField
                            name="TypeDocument"
                            value={empresaData.TypeDocument}
                            onChange={handleInputChange}
                            label="Tipo de Documento"
                            fullWidth
                            margin="normal"
                            error={!!errors.TypeDocument}
                            helperText={errors.TypeDocument}
                        />
                        <TextField
                            name="AddressEmail"
                            value={empresaData.AddressEmail}
                            onChange={handleInputChange}
                            label="Correo Electrónico"
                            fullWidth
                            margin="normal"
                            error={!!errors.AddressEmail}
                            helperText={errors.AddressEmail}
                        />
                        <TextField
                            name="DateRegister"
                            value={empresaData.DateRegister}
                            onChange={handleInputChange}
                            label="Fecha de Registro"
                            fullWidth
                            margin="normal"
                            error={!!errors.DateRegister}
                            helperText={errors.DateRegister}
                        />
                        <TextField
                            name="Phone"
                            value={empresaData.Phone}
                            onChange={handleInputChange}
                            label="Teléfono"
                            fullWidth
                            margin="normal"
                            error={!!errors.Phone}
                            helperText={errors.Phone}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => {
                        setOpenModal(false);
                        setIsEditMode(false);
                        handleCloseModal();
                        setEditId(null);
                    }} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {isEditMode ? 'Actualizar' : 'Guardar'}
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openConfirmDialog}
                onClose={() => setOpenConfirmDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirmar eliminar "}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Esta seguro que desea eliminar?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
                        NO
                    </Button>
                    <Button onClick={() => handleDelete()} color="primary" autoFocus>
                        SI
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Empresas;

*/

