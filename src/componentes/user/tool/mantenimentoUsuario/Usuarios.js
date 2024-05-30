import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField, Snackbar } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { getEnterpriseMail ,SaveEnterpriseMail , DeleteEnterpriseMail } from "../../../../actions/MailAction";
import { validateForm, isFormValid } from "../../tool/mail/validaciones/mail"; // Asegúrate de que la ruta sea correcta

const useStyles = makeStyles((theme) => ({
    customAlert: {
        fontSize: '1.25rem',
    },
    customAlertTitle: {
        fontSize: '1.5rem',
    },
}));

const Usuarios = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [errors, setErrors] = useState({});
    const [MailData, setMailData] = useState({
        id: 0,
        enterpriseId: '',
        description: '',
        mail: '',
        isActive: '',
        isPredeterminate: '',
        // Agrega los otros campos aquí
    });
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    /* traer empresas */
    const [mail, setMail] = useState([]);

    useEffect(() => {
        consumeGetMail();
    }, [openModal]);

    const consumeGetMail = () => {
        getEnterpriseMail().then( response => {
            console.log("my response", response);
            if(response.isSuccess){
                setMail(response.model);
            }
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMailData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        resetForm();
        setOpenModal(false);
    };

    const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    //{ field: 'enterpriseId', headerName: 'Enterprise ID', width: 150 },
    { field: 'description', headerName: 'Nombre', width: 250 },
    { field: 'mail', headerName: 'Tipo de Usuario', width: 150 },
    { field: 'empresa', headerName: 'Empresa', width: 350 },
    { field: 'login', headerName: 'Login', width: 250 },
    //{ field: 'isActive', headerName: 'Active', width: 150,
    //  renderCell: (params) => params.value ? "Yes" : "No"  // Render "Yes" or "No" based on the value
    //},
    //{ field: 'isPredeterminate', headerName: 'Predeterminate', width: 200,
    //  renderCell: (params) => params.value ? "Yes" : "No"  // Render "Yes" or "No" based on the value
    //},
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
        const validationErrors = validateForm(MailData);
        setErrors(validationErrors);
        
        if (!isFormValid(validationErrors)) return;

        SaveEnterpriseMail(MailData)
                .then(response => {
                console.log('Se registró exitosamente la empresa en la base de datos', response);
                setAlertMessage((isEditMode) ? "Empresa actualizada correctamente.":"Empresa agregada correctamente.");
                setAlertSeverity("success");
                setSnackbarOpen(true);

        }).catch(error => {
                console.error('Error al registrar la empresa en la base de datos', error);
                setAlertMessage("Error al registrar la empresa.");
                setAlertSeverity("error");
                setSnackbarOpen(true);
        });

        resetForm();
        setOpenModal(false);
    };


    const handleEdit = (id) => {
        const empresaRow = mail.find(row => row.id === id);
        console.log("empresaRow" , empresaRow);
        
        setMailData(empresaRow);
        setIsEditMode(true);
        setOpenModal(true);
        
    };

    const handleDeleteClick = (id) => {
        setRowToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleDelete = () => {
        if (rowToDelete !== null) {
            DeleteEnterpriseMail(rowToDelete).then(response => {
                console.log('Se ha eliminado exitosamente la empresa en la base de datos', response);
                setAlertMessage("Empresa eliminada correctamente.");
                setAlertSeverity("success");
                setSnackbarOpen(true);
                setRowToDelete(null);
            }).catch(error => {
                console.error('Error al eliminar la empresa en la base de datos', error);
                setAlertMessage("Error al eliminar la empresa.");
                setAlertSeverity("error");
                setSnackbarOpen(true);
            });
        }
        setOpenConfirmDialog(false);
    };

    const resetForm = () => {
        setMailData({ });
        setIsEditMode(false);
        setErrors({});
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };



    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Establecer Usuarios</h1>
                <label style={style.titleinfo}>Listado de email</label>
            </Container>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} variant="filled" style={style.customAlert}>
                    <AlertTitle style={style.customAlertTitle}>{alertSeverity === "success" ? "Exito" : "Error"}</AlertTitle>
                    {alertMessage}
                </Alert>
            </Snackbar>
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
                                    Nuevo Usuarios
                                </Button>
                                </Grid>
                                <div style={{ height: 400, width: '100%', marginTop: 20 }}>
                                    <DataGrid rows={mail} columns={columns} pageSize={5} checkboxSelection />
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>{isEditMode ? "Editar Email" : "Registrar Nuevo Email"}</DialogTitle>
                <DialogContent>
                <form>
                    <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="description"
                                    value={MailData.description}
                                    onChange={handleInputChange}
                                    label="Descripción"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.description}
                                    helperText={errors.description}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="mail"
                                    value={MailData.mail}
                                    onChange={handleInputChange}
                                    label="Correo"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.mail}
                                    helperText={errors.mail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" fullWidth>
                                    <FormLabel component="legend">Activo</FormLabel>
                                    <RadioGroup
                                        name="isActive"
                                        value={MailData.isActive}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        <FormControlLabel value="true" control={<Radio />} label="Sí" />
                                        <FormControlLabel value="false" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset" fullWidth>
                                    <FormLabel component="legend">Predeterminado</FormLabel>
                                    <RadioGroup
                                        name="isPredeterminate"
                                        value={MailData.isPredeterminate}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        <FormControlLabel value="true" control={<Radio />} label="Sí" />
                                        <FormControlLabel value="false" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => {
                        setOpenModal(false);
                        setIsEditMode(false);
                        handleCloseModal();

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

export default Usuarios;


