import { Grid, TextField, Typography, Checkbox, Button, TextareaAutosize } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import JoditEditor from 'jodit-react';

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

const PlantillaDif = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const editor = useRef(null);
  const [formData, setFormData] = useState({
    content: '',
    textFieldValue: '',
    textarea1: '',
    textarea2: '',
    textarea3: '',
  });

  const config = {
    readonly: false,
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditorChange = (newContent) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: newContent,
    }));
  };

  const handleSave = () => {
    console.log("Form Data:", formData);

    // Clear the form
    setFormData({
      content: '',
      textFieldValue: '',
      textarea1: '',
      textarea2: '',
      textarea3: '',
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
                  <TextField
                    style={{ width: '100%' }}
                    color='primary'
                    id="textFieldValue"
                    name="textFieldValue"
                    label=""
                    variant="outlined"
                    value={formData.textFieldValue}
                    onChange={handleChange}
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
                    id="textFieldValue"
                    name="textFieldValue"
                    label=""
                    variant="outlined"
                    value={formData.textFieldValue}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Opciones Rapidas</Typography>
                </div>
                <div className={classes.alineado}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Username</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Password</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>URL</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Codigo</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Test</Typography>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18 }}>Opciones Rapidas</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Username</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Password</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>URL</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Codigo</Typography>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Test</Typography>
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div style={{ width: '100%' }}>
                  <JoditEditor
                    ref={editor}
                    value={formData.content}
                    config={config}
                    tabIndex={1}
                    onBlur={handleEditorChange}
                    onChange={handleEditorChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.alineadoMovile}>
                  <JoditEditor
                    ref={editor}
                    value={formData.content}
                    config={config}
                    tabIndex={1}
                    style={{ width: '100%' }}
                    onBlur={handleEditorChange}
                    onChange={handleEditorChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div style={{ width: '100%' }}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea1"
                    value={formData.textarea1}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.alineadoMovile}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea1"
                    value={formData.textarea1}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div style={{ width: '100%' }}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea2"
                    value={formData.textarea2}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.alineadoMovile}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea2"
                    value={formData.textarea2}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div style={{ width: '100%' }}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea3"
                    value={formData.textarea3}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.alineadoMovile}>
                  <TextareaAutosize
                    maxRows={4}
                    style={{ width: '100%', height: '10vh', fontFamily: 'arial', fontSize: 20 }}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    name="textarea3"
                    value={formData.textarea3}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.alineado}>
                  <Button variant="contained" color="primary" component="span" onClick={handleSave}>
                    Guardar
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.alineadoMovile}>
                  <Button variant="contained" color="primary" component="span" onClick={handleSave}>
                    Guardar
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default PlantillaDif;