import {
    Button, Container, Grid, TextField, Typography, useMediaQuery, Checkbox,
    FormControl, InputLabel, Select, MenuItem, IconButton, makeStyles
  } from '@material-ui/core';
  import React, { useState, useRef } from 'react';
  import { Link } from 'react-router-dom';
  import PhotoCamera from '@material-ui/icons/PhotoCamera';
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
  
  const TextosDif = () => {
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);
    const editor4 = useRef(null);
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');
    const [content4, setContent4] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  
    const handleSelectChange = (event) => {
      setSelectValue(event.target.value);
    };
  
    const handleSave = () => {
      console.log("Editor Content 1:", content1);
      console.log("Editor Content 2:", content2);
      console.log("Editor Content 3:", content3);
      console.log("Editor Content 4:", content4);
      console.log("Selected Value:", selectValue);
  
      // Clear the form
      setContent1('');
      setContent2('');
      setContent3('');
      setContent4('');
      setSelectValue('');
    };
  
    const config = {
      readonly: false, // All options from https://xdsoft.net/jodit/doc/
    };
  
  
    return (
      <div>
        <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
          <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
            <div className={classes.groupalineado}>
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Votacion cerrada</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <div style={{width: '80%'}}>
                        <JoditEditor
                        ref={editor1}
                        value={content1}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent1(newContent)}
                        onChange={newContent => { }}
                        />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Votacion cerrada</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <JoditEditor
                      ref={editor1}
                      value={content1}
                      config={config}
                      tabIndex={1}
                      onBlur={newContent => setContent1(newContent)}
                      onChange={newContent => { }}
                    />
                  </div>
                </>
              )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Votacion finalizada</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <div style={{width: '80%'}}>
                        <JoditEditor
                        ref={editor2}
                        value={content2}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent2(newContent)}
                        onChange={newContent => { }}
                        />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Votacion finalizada</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <JoditEditor
                      ref={editor2}
                      value={content2}
                      config={config}
                      tabIndex={1}
                      onBlur={newContent => setContent2(newContent)}
                      onChange={newContent => { }}
                    />
                  </div>
                </>
              )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Voto emitido</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <div style={{width: '80%'}}>
                        <JoditEditor
                        ref={editor3}
                        value={content3}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent3(newContent)}
                        onChange={newContent => { }}
                        />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Voto emitido</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <JoditEditor
                      ref={editor3}
                      value={content3}
                      config={config}
                      tabIndex={1}
                      onBlur={newContent => setContent3(newContent)}
                      onChange={newContent => { }}
                    />
                  </div>
                </>
              )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto informativo</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <div style={{width: '80%'}}>
                        <JoditEditor
                        ref={editor4}
                        value={content4}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent4(newContent)}
                        onChange={newContent => { }}
                        />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Texto informativo</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <JoditEditor
                      ref={editor4}
                      value={content4}
                      config={config}
                      tabIndex={1}
                      onBlur={newContent => setContent4(newContent)}
                      onChange={newContent => { }}
                    />
                  </div>
                </>
              )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Posición</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <FormControl variant="outlined" className={classes.formControlSelect}>
                      <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectValue}
                        onChange={handleSelectChange}
                        style={{ width: '100%' }}
                        label="Ninguno"
                      >
                        <MenuItem value="">
                          <em>Ninguno</em>
                        </MenuItem>
                        <MenuItem value={10}>Inicio</MenuItem>
                        <MenuItem value={20}>Final</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Posición</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <FormControl variant="outlined" className={classes.SelectMovile}>
                      <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectValue}
                        onChange={handleSelectChange}
                        style={{ width: '100%' }}
                        label="Ninguno"
                      >
                        <MenuItem value="">
                          <em>Ninguno</em>
                        </MenuItem>
                        <MenuItem value={10}>Inicio</MenuItem>
                        <MenuItem value={20}>Final</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </>
              )}
  
              <div className={classes.alineado}>
                <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                  <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                  Guardar Votacion
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  };
  
  export default TextosDif;