import React, { useState } from "react";
import { Container, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import style from "../../../Tool/Style";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Mail = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
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
        { field: 'id', headerName: 'Nombre', width: 150 },
        { field: 'email', headerName: 'Correo', width: 150 },
        { field: 'predetermined', headerName: 'Predeterminado', width: 150 },
      
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
            id: MailData.Nombre,
            email: MailData.Email,
            predetermined: MailData.Predetermined,
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
    
        setMailData({ // Clear the form
            Nombre: '',
            Email: '',
            Predetermined: '',
        });
        setOpenModal(false);
    };


    const handleEdit = (id) => {
        const rowToEdit = rows.find(row => row.id === id);
        if (rowToEdit) {
            setMailData({
                Nombre: rowToEdit.id,
                Email: rowToEdit.email,
                Predetermined: rowToEdit.predetermined,
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
                <h1 style={style.title}>Establecer email</h1>
                <label style={style.titleinfo}>Listado de todos los email</label>
            </Container>
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
                                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
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
                        />
                        <TextField
                            name="Email"
                            value={MailData.Email}
                            onChange={handleInputChange}
                            label="Correo"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            name="Predetermined"
                            value={MailData.Predetermined}
                            onChange={handleInputChange}
                            label="Predeterminado"
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

export default Mail;


