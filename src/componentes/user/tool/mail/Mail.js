import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';

const Mail = (props) => {
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
    const [MailData, setMailData] = useState({
        Nombre: '',
        Email: '',
        Predetermined: '',
        // Agrega los otros campos aquí
    });
    const [rows, setRows] = useState([]);


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setMailData({
            Nombre: '',
            Email: '',
            Predetermined: '',
            // Asegúrate de restablecer todos los campos necesarios
        });
        setIsEditMode(false); // Restablecer el modo de edición
        setEditId(null); // Limpiar el ID de edición
        setErrors({}); // Limpiar cualquier error de validación
        setOpenModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMailData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    /*const handleLogoPathChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const logoPath = URL.createObjectURL(file);
            setMailData(prevState => ({
                ...prevState,
                LogoPath: logoPath,
                LogoFile: file  // Guardar el archivo en el estado para uso posterior (opcional)
            }));
        }
    };*/

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nombre', width: 350 },
        { field: 'email', headerName: 'Correo', width: 350 },
        { field: 'predetermined', headerName: 'Predeterminado', width: 200,
        renderCell: (params) => params.value ? "Sí" : "No"  // Renderiza "Sí" o "No" basado en el valor
        },
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
                id: editId || uuidv4(), // Utiliza el ID original almacenado en editId
                name: MailData.Nombre,
                email: MailData.Email,
                predetermined: MailData.Predetermined === "Sí",
            };
            // Actualizar la fila en el estado
        if (isEditMode) {
                // Mantener el ID original
            setRows(prevRows => prevRows.map(row => row.id === editId ? newRow : row));
            console.log('Actualizando datos de la fila:', newRow);
            setIsEditMode(false);
            setUpdateMessage("Datos de la empresa actualizados correctamente.");
            setEditId(null);
            setTimeout(() => setUpdateMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
        } else {
            setRows(prevRows => [...prevRows, newRow]);
            setSuccessMessage("Empresa agregada correctamente.");
            setTimeout(() => setSuccessMessage(""), 3000);  // Limpia el mensaje después de 3 segundos
            console.log('Agregando nueva fila:', newRow);  // Imprime los datos de la nueva fila en la consola
        }
    
        // Limpiar los datos del formulario y cerrar el modal
        setMailData({ Nombre: '', Email: '', Predetermined: '' });
        setOpenModal(false);
    };


    const handleEdit = (id) => {
        const rowToEdit = rows.find(row => row.id === id);
        if (rowToEdit) {
            setMailData({
                Nombre: rowToEdit.name,
                Email: rowToEdit.email,
                Predetermined: rowToEdit.predetermined,
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
    tempErrors.Nombre = MailData.Nombre ? "" : "El nombre de la empresa es obligatorio.";
    tempErrors.Email = (MailData.Email && /^\S+@\S+\.\S+$/.test(MailData.Email)) ? "" : "Correo electrónico no válido.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
};

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Establecer email</h1>
                <label style={style.titleinfo}>Listado de email</label>
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
                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid item xs={12} md={6}>
                                <Button
                                color="primary"
                                onClick={handleOpenModal}
                                style={{ marginTop: 20, marginBottom: 20, width: 250 }}
                                variant="outlined"
                                size="medium"
                                >
                                    Nuevo Email
                                </Button>
                                </Grid>
                                <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                                    <DataGrid key={triggerRerender} rows={rows} columns={columns} pageSize={5} checkboxSelection />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>Registrar Nuevo Email</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="Nombre"
                            value={MailData.Nombre}
                            onChange={handleInputChange}
                            label="Nombre"
                            fullWidth
                            margin="normal"
                            error={!!errors.Nombre}
                            helperText={errors.Nombre}
                        />
                        <TextField
                            name="Email"
                            value={MailData.Email}
                            onChange={handleInputChange}
                            label="Correo"
                            fullWidth
                            margin="normal"
                            error={!!errors.Email}
                            helperText={errors.Email}
                        />
                        <FormControl component="fieldset">
                        <FormLabel component="legend">Predeterminado</FormLabel>
                        <RadioGroup
                            name="Predetermined"
                            value={MailData.Predetermined}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                        </FormControl>
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

export default Mail;


