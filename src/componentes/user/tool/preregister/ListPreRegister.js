import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';
import style from "../../../Tool/Style";

const PreRegister = (props) => {
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
        Url: '',
        Estado: '',
    });
    const [rows, setRows] = useState([]);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setMailData({
            Nombre: '',
            Url: '',
            Estado: '',
        });
        setIsEditMode(false);
        setEditId(null);
        setErrors({});
        setOpenModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMailData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleButtonColor = (id) => {
        setRows(prevRows => {
            return prevRows.map(row => {
                if (row.id === id) {
                    const updatedRow = { ...row, isGreen: !row.isGreen };
                    console.log(`Row ID: ${id}, Is Green: ${updatedRow.isGreen}`);
                    return updatedRow;
                }
                return row;
            });
        });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Nombre', width: 350 },
        { field: 'url', headerName: 'Url', width: 350 },
        { field: 'estado', headerName: 'Estado', width: 200,
        renderCell: (params) => params.value ? "Sí" : "No" },
        {
            field: 'actions', headerName: 'Acciones', width: 350, renderCell: (params) => (
                <React.Fragment>
                    <Button
                        variant="contained"
                        onClick={() => toggleButtonColor(params.row.id)}
                        style={{
                            backgroundColor: params.row.isGreen ? 'green' : 'grey',
                            color: '#fff',
                            marginRight: '8px'
                        }}
                    >
                        Toggle Color
                    </Button>
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
                        style={{ backgroundColor: 'red', color: '#fff' }} 
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
            return; 
        }
        const newRow = {
            id: editId || uuidv4(),
            name: MailData.Nombre,
            url: MailData.Url,
            estado: MailData.Estado === "Sí",
            isGreen: false // Initial state for the toggle button
        };

        if (isEditMode) {
            setRows(prevRows => prevRows.map(row => row.id === editId ? newRow : row));
            setIsEditMode(false);
            setUpdateMessage("Datos de la empresa actualizados correctamente.");
            setTimeout(() => setUpdateMessage(""), 3000);
        } else {
            setRows(prevRows => [...prevRows, newRow]);
            setSuccessMessage("Empresa agregada correctamente.");
            setTimeout(() => setSuccessMessage(""), 3000);
        }

        setMailData({ Nombre: '', Url: '', Estado: '' });
        setOpenModal(false);
    };

    const handleEdit = (id) => {
        const rowToEdit = rows.find(row => row.id === id);
        if (rowToEdit) {
            setMailData({
                Nombre: rowToEdit.name,
                Url: rowToEdit.url,
                Estado: rowToEdit.estado ? "Sí" : "No",
            });
            setEditId(id);
            setIsEditMode(true);
            setOpenModal(true);
        }
    };

    const handleDeleteClick = (id) => {
        setRowToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleDelete = () => {
        if (rowToDelete !== null) {
            setRows(prevRows => prevRows.filter(row => row.id !== rowToDelete));
            setRowToDelete(null);
        }
        setOpenConfirmDialog(false);
        setDeleteMessage("Registro eliminado correctamente.");
        setTimeout(() => setDeleteMessage(""), 3000);
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.Nombre = MailData.Nombre ? "" : "El nombre de la empresa es obligatorio.";
        tempErrors.Url = (MailData.Url && /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(MailData.Url)) ? "" : "URL no válida.";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Establecer Pre Registro</h1>
                <label style={style.titleinfo}>Listado de Pre Registro</label>
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
                                        Nuevo Pre Registro
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
                            name="Url"
                            value={MailData.Url}
                            onChange={handleInputChange}
                            label="Url"
                            fullWidth
                            margin="normal"
                            error={!!errors.Url}
                            helperText={errors.Url}
                        />
                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Predeterminado</FormLabel>
                            <RadioGroup
                                name="Estado"
                                value={MailData.Estado}
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
                    <Button onClick={handleCloseModal} color="secondary">
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
                        ¿Está seguro que desea eliminar?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
                        NO
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        SI
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default PreRegister;