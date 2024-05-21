import { Grid, TextField, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450
  },
  espacios: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10%"
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    width: '100%'
  },
  horizontal: {
    flexDirection: 'row',
  },
  groupalineado: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  alineado: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  element: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  cajones: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  largerCheckbox: {
    transform: "scale(1.5)",
  },
  roots: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  formControlSelect: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    width: '80%',
    margin: theme.spacing(1),
  },
  alineadoMovile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  elementMovile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    width: '100%'
  },
  SelectMovile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    width: '100%',
    margin: theme.spacing(1),
  },
}));

const VotanteIndiDif = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    documento: '',
    telefono: '',
    email: '',
    usuario: '',
    adminChat: false,
    peso: '',
    equipo: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    console.log("Form Data:", formData);

    // Clear the form
    setFormData({
      nombre: '',
      apellido: '',
      documento: '',
      telefono: '',
      email: '',
      usuario: '',
      adminChat: false,
      peso: '',
      equipo: '',
    });
  };

  return (
    <div>
      <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
        <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
          <div className={classes.groupalineado}>
            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Nombre</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Nombre</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Apellido</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Apellido</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Documento</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="documento"
                    name="documento"
                    value={formData.documento}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Documento</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="documento"
                    name="documento"
                    value={formData.documento}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Telefono</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Telefono</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Email</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Email</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Usuario</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="usuario"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Usuario</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="usuario"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Admin Chat</Typography>
                </div>
                <div className={classes.alineado}>
                  <Checkbox
                    color="primary"
                    className={classes.largerCheckbox}
                    name="adminChat"
                    checked={formData.adminChat}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Admin Chat</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <Checkbox
                    color="primary"
                    className={classes.largerCheckbox}
                    name="adminChat"
                    checked={formData.adminChat}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Peso*Decimal a.b</Typography>
                </div>
                <div className={classes.cajones}>
                  <TextField
                    style={{ width: '80%' }}
                    color='primary'
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Peso*Decimal a.b</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="peso"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Equipo</Typography>
                </div>
                <div className={classes.cajones}>
                  <FormControl variant="outlined" className={classes.formControlSelect}>
                    <InputLabel id="equipo-label">Seleccione</InputLabel>
                    <Select
                      labelId="equipo-label"
                      id="equipo"
                      name="equipo"
                      value={formData.equipo}
                      onChange={handleChange}
                      style={{ width: '100%' }}
                      label="Seleccione"
                    >
                      <MenuItem value="">
                        <em>Seleccione</em>
                      </MenuItem>
                      <MenuItem value="Todos">Todos</MenuItem>
                      <MenuItem value="Equipo1">Equipo1</MenuItem>
                      <MenuItem value="Equipo2">Equipo2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Equipo</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <FormControl variant="outlined" className={classes.SelectMovile}>
                    <InputLabel id="equipo-label">Seleccione</InputLabel>
                    <Select
                      labelId="equipo-label"
                      id="equipo"
                      name="equipo"
                      value={formData.equipo}
                      onChange={handleChange}
                      style={{ width: '100%' }}
                      label="Seleccione"
                    >
                      <MenuItem value="">
                        <em>Seleccione</em>
                      </MenuItem>
                      <MenuItem value="Todos">Todos</MenuItem>
                      <MenuItem value="Equipo1">Equipo1</MenuItem>
                      <MenuItem value="Equipo2">Equipo2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            )}

            <div className={classes.alineado}>
              <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default VotanteIndiDif;