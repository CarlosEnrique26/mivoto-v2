import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { getEnterprises ,SaveEnterprise , DeleteEnterprise } from "../../../../actions/EnterpriseAction";
import { validateForm, isFormValid } from "../mantenimiento/validaciones/empresa"; // Asegúrate de que la ruta sea correcta


const useStyles = makeStyles((theme) => ({
        customAlert: {
            fontSize: '1.25rem',
        },
        customAlertTitle: {
            fontSize: '1.5rem',
        },
}));


const Empresas = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [errors, setErrors] = useState({});
    const [empresaData, setEmpresaData] = useState({
        id : 0,
        address: '',
        addressEmail: '', 
        businessName: '',
        dateRegister:'',
        documentNumber: '',
        representative: '',
        logoPath: '',
        logoName: '',
        typeDocument: '',
        phone: '',
        isActive: false,
    });
   
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    /* traer empresas */
    const [ enterprises , setEnterprises] = useState([]);

    useEffect(() => {
        consumeGetEnterprises();
      }, [openModal]);


    const consumeGetEnterprises = ()=>{
        getEnterprises().then( response => {
            console.log("my response ", response);
            if(response.isSuccess){
                setEnterprises(response.model);

            }
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmpresaData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };
  
   
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        resetForm();
        setOpenModal(false);
    };

    const handleLogoPathChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const logoPath = URL.createObjectURL(file);
            setEmpresaData(prevState => ({
                ...prevState,
                LogoPath: logoPath,
                LogoFile: file
            }));
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'businessName', headerName: 'Razón Social', width: 150 },
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
        { field: 'documentNumber', headerName: 'Numero de Documento', width: 150 },
        { field: 'phone', headerName: 'Teléfono', width: 150 },
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
                        style={{ backgroundColor: 'red', color: '#fff' }}
                    >
                        <DeleteOutlineOutlinedIcon />
                    </Button>
                </React.Fragment>
            )
        }
    ];

    const handleSubmit = () => {
        const validationErrors = validateForm(empresaData);
        setErrors(validationErrors);

        if (!isFormValid(validationErrors)) return;
  
        SaveEnterprise(empresaData)
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
        const empresaRow = enterprises.find(row => row.id === id);
        console.log("empresaRow" , empresaRow);
        
        setEmpresaData(empresaRow);
        setIsEditMode(true);
        setOpenModal(true);
        
    };

    const handleDeleteClick = (id) => {
        setRowToDelete(id);
        setOpenConfirmDialog(true);
    };

    const handleDelete = () => {
        if (rowToDelete !== null) {
            DeleteEnterprise(rowToDelete).then(response => {
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
        setEmpresaData({ });
        setIsEditMode(false);
        setErrors({});
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barTitle}>
                <h1 style={style.title}>Empresa</h1>
                <label style={style.titleinfo}>Listado de empresas</label>
            </Container>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={alertSeverity} variant="filled" style={style.customAlert}>
                    <AlertTitle style={style.customAlertTitle}>{alertSeverity === "success" ? "Exito" : "Error"}</AlertTitle>
                    {alertMessage}
                </Alert>
            </Snackbar>
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
                            <DataGrid  rows={enterprises} columns={columns} pageSize={5} checkboxSelection />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>{isEditMode ? "Editar Empresa" : "Registrar Nueva Empresa"}</DialogTitle>
                <DialogContent>
                    <form>
                    <TextField
                            name="businessName"
                            value={empresaData.businessName}
                            onChange={handleInputChange}
                            label="Nombre de la Empresa"
                            fullWidth
                            margin="normal"
                            error={!!errors.businessName}
                            helperText={errors.businessName}
                        />
                        <TextField
                            name="representative"
                            value={empresaData.representative}
                            onChange={handleInputChange}
                            label="Representante"
                            fullWidth
                            margin="normal"
                            error={!!errors.representative}
                            helperText={errors.representative}
                        />
                        <TextField
                            name="address"
                            value={empresaData.address}
                            onChange={handleInputChange}
                            label="Dirección"
                            fullWidth
                            margin="normal"
                            error={!!errors.address}
                            helperText={errors.address}
                        />
                        
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Tipo de Documento</InputLabel>
                            <Select
                                value={empresaData.typeDocument}
                                onChange={handleInputChange}
                                name="typeDocument"
                                label="Tipo de Documento"
                                fullWidth
                                margin="normal"
                                error={!!errors.typeDocument}
                                helperText={errors.typeDocument}
                            >
                                <MenuItem value="">
                                <em>Seleccione</em>
                                </MenuItem>
                                <MenuItem value={"1"}>NIF</MenuItem>
                                <MenuItem value={"2"}>CIF</MenuItem>
                                <MenuItem value={"3"}>NIE</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            name="addressEmail"
                            value={empresaData.addressEmail}
                            onChange={handleInputChange}
                            label="Correo Electrónico"
                            fullWidth
                            margin="normal"
                            error={!!errors.addressEmail}
                            helperText={errors.addressEmail}
                        />
                        <TextField
                            name="documentNumber"
                            value={empresaData.documentNumber}
                            onChange={handleInputChange}
                            label="Numero de Documento"
                            fullWidth
                            margin="normal"
                            error={!!errors.documentNumber}
                            helperText={errors.documentNumber}
                        />
                        <TextField
                            name="phone"
                            value={empresaData.phone}
                            onChange={handleInputChange}
                            label="Teléfono"
                            style={{ marginBottom: '30px' }}
                            fullWidth
                            margin="normal"
                            error={!!errors.phone}
                            helperText={errors.phone}
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

export default Empresas;






