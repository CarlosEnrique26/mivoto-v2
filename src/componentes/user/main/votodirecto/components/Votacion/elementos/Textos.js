import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles
} from '@material-ui/core';
import React, { useState, useRef, useContext } from 'react';
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
  editorContainer: {
    width: '82%',
    minHeight: '200px',
  },
  editor: {
    width: '82%',
    height: '200px',
    overflow: 'auto',
  },
}));

const Textos = () => {
  const editor1 = useRef(null);
  const editor2 = useRef(null);
  const editor3 = useRef(null);
  const editor4 = useRef(null);
  const { votationData, setVotationData } = useContext(VotationContext);
  //const [selectValue, setSelectValue] = useState('');
  const classes = useStyles();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
/*
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };
*/
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
        const file = files[0];
        setVotationData(prevState => ({
            ...prevState,
            [name]: file
        }));
        //setImagePreviewUrl(URL.createObjectURL(file));
    } else {
        setVotationData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
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
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Votación cerrada</Typography>
                </div>
                <div className={classes.cajones}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor1}
                      value={content1}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent1(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.elementMovile}>
                  <Typography style={{ fontSize: 18 }}>Votación cerrada</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor1}
                      value={content1}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent1(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Votación finalizada</Typography>
                </div>
                <div className={classes.cajones}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor2}
                      value={content2}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent2(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.elementMovile}>
                  <Typography style={{ fontSize: 18 }}>Votación finalizada</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor2}
                      value={content2}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent2(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Voto emitido</Typography>
                </div>
                <div className={classes.cajones}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor3}
                      value={content3}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent3(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.elementMovile}>
                  <Typography style={{ fontSize: 18 }}>Voto emitido</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor3}
                      value={content3}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent3(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </>
            )}

            {isDesktop ? (
              <div className={classes.alineado}>
                <div className={classes.element}>
                  <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto libre de cabecera o pie formulario voto</Typography>
                </div>
                <div className={classes.cajones}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor4}
                      value={content4}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent4(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.elementMovile}>
                  <Typography style={{ fontSize: 18 }}>Texto libre de cabecera o pie formulario voto</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <div className={classes.editorContainer}>
                    <JoditEditor
                      ref={editor4}
                      value={content4}
                      config={config}
                      tabIndex={1}
                      onBlur={(newContent) => setContent4(newContent)}
                      onChange={(newContent) => { }}
                      className={classes.editor}
                    />
                  </div>
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
                      labelId="positionInfo-label"
                      id="positionInfo"
                      name="PositionInfo"  // PositionInfo
                      value={votationData.PositionInfo}
                      onChange={handleInputChange}
                      label="Ninguno"
                      style={{ width: '100%' }}
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
                <div className={classes.elementMovile}>
                  <Typography style={{ fontSize: 18 }}>Posición</Typography>
                </div>
                <div className={classes.alineadoMovile}>
                  <FormControl variant="outlined" className={classes.SelectMovile}>
                    <InputLabel id="demo-simple-select-outlined-label">Ninguno</InputLabel>
                    <Select
                      labelId="positionInfo-label"
                      id="positionInfo"
                      name="PositionInfo"  // PositionInfo
                      value={votationData.PositionInfo}
                      onChange={handleInputChange}
                      label="Ninguno"
                      style={{ width: '100%' }}
                    >
                      <MenuItem value="">
                        <em>Ninguno</em>
                      </MenuItem>
                      <MenuItem value={1}>Inicio</MenuItem>
                      <MenuItem value={2}>Final</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            )}

            <div className={classes.alineado}>
              <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                Guardar Votación
              </Button>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Textos;