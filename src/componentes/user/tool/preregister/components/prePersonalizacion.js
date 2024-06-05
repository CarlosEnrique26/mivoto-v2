import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    makeStyles,
    Input
} from '@material-ui/core';
import React, { useState, useRef } from 'react';
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
    cajon1: {
        display: 'flex',
        flexDirection: 'column', // Arrange elements vertically in a column
        alignItems: 'start', // Center elements horizontally
        justifyContent: 'center', // Center elements vertically
        marginBottom: theme.spacing(2),
        width: '33%',
    },
    cajon2: {
        display: 'flex',
        flexDirection: 'column', // Arrange elements vertically in a column
        alignItems: 'end', // Center elements horizontally
        justifyContent: 'center', // Center elements vertically
        marginBottom: theme.spacing(2),
        width: '33%',
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

const PrePersonalizacion = () => {
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [formData, setFormData] = useState({
        textoSuperior: '',
        textoInferior: '',
        botonIzquierdo: '',
        botonIzquierdoColor: '',
        botonDerecho: '',
        botonDerechoColor: '',
        textoPieDeFormulario: '',
        mensajeConfirmacion: '',
        preRegistroCerrado: '',
    });
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        console.log("Editor Content 1:", content1);
        console.log("Editor Content 2:", content2);
        console.log("Editor Content 3:", content3);
        console.log("Selected Value:", selectValue);
        console.log("Form Data:", formData);

        // Clear the form
        setContent1('');
        setContent2('');
        setContent3('');
        setSelectValue('');
        setFormData({
            textoSuperior: '',
            textoInferior: '',
            botonIzquierdo: '',
            botonDerecho: '',
            textoPieDeFormulario: '',
            mensajeConfirmacion: '',
            preRegistroCerrado: '',
        });
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto superior</Typography>
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
                                    <Typography style={{ fontSize: 18 }}>Texto superior</Typography>
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto inferior</Typography>
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
                                    <Typography style={{ fontSize: 18 }}>Texto inferior</Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Boton Izquierdo</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <TextField
                                                name="botonIzquierdo"
                                                value={formData.botonIzquierdo}
                                                onChange={handleInputChange}
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                            </div>
                                            <div className={classes.cajon2}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="botonIzquierdoColor"
                                                    name="botonIzquierdoColor"
                                                    value={formData.botonIzquierdoColor}
                                                    onChange={handleInputChange}
                                                    //error={!!formErrors.botonIzquierdoColor}
                                                    //helperText={formErrors.botonIzquierdoColor}
                                                />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Boton Izquierdo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                name="botonIzquierdo"
                                                value={formData.botonIzquierdo}
                                                onChange={handleInputChange}
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="botonIzquierdoColor"
                                                name="botonIzquierdoColor"
                                                value={formData.botonIzquierdoColor}
                                                onChange={handleInputChange}
                                                //error={!!formErrors.botonIzquierdoColor}
                                                //helperText={formErrors.botonIzquierdoColor}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Boton Derecho</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <TextField
                                                name="botonDerecho"
                                                value={formData.botonDerecho}
                                                onChange={handleInputChange}
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                                
                                            </div>
                                            <div className={classes.cajon2}>
                                            <Input
                                                type='color'
                                                style={{width:'95%'}}
                                                color='primary'
                                                id="botonDerechoColor"
                                                name="botonDerechoColor"
                                                value={formData.botonDerechoColor}
                                                onChange={handleInputChange}
                                                //error={!!formErrors.botonDerechoColor}
                                                //helperText={formErrors.botonDerechoColor}
                                            />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Boton Derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                                                name="botonDerecho"
                                                value={formData.botonDerecho}
                                                onChange={handleInputChange}
                                                style={{ width: '80%' }}
                                                color="primary"
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="botonDerechoColor"
                                                name="botonDerechoColor"
                                                value={formData.botonDerechoColor}
                                                onChange={handleInputChange}
                                                //error={!!formErrors.botonDerechoColor}
                                                //helperText={formErrors.botonDerechoColor}
                                            />
                                            </div>
                                        </>
                                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto pie de formulario</Typography>
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
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Texto pie de formulario</Typography>
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
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Mensaje de confirmación</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="mensajeConfirmacion"
                                        value={formData.mensajeConfirmacion}
                                        onChange={handleInputChange}
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Mensaje de confirmación</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="mensajeConfirmacion"
                                        value={formData.mensajeConfirmacion}
                                        onChange={handleInputChange}
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </>
                        )}

                        {isDesktop ? (
                            <div className={classes.alineado}>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Pre registro cerrado</Typography>
                                </div>
                                <div className={classes.cajones}>
                                    <TextField
                                        name="preRegistroCerrado"
                                        value={formData.preRegistroCerrado}
                                        onChange={handleInputChange}
                                        style={{ width: '80%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={classes.element}>
                                    <Typography style={{ fontSize: 18 }}>Pre registro cerrado</Typography>
                                </div>
                                <div className={classes.alineadoMovile}>
                                    <TextField
                                        name="preRegistroCerrado"
                                        value={formData.preRegistroCerrado}
                                        onChange={handleInputChange}
                                        style={{ width: '100%' }}
                                        color="primary"
                                        id="outlined-basic"
                                        variant="outlined"
                                    />
                                </div>
                            </>
                        )}

                        <div className={classes.alineado}>
                            <div className={classes.roots}>
                                <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                                    <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                                    Guardar Votación
                                </Button>
                                <Button style={{ marginTop: 20 }} variant="contained" color="primary">
                                    <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                                    Desactivar
                                </Button>
                                <Button style={{ marginTop: 20 }} variant="contained" color="primary" >
                                    <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                                    Eliminar Usuario
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default PrePersonalizacion;

/*import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    makeStyles
  } from '@material-ui/core';
  import React, { useState, useRef } from 'react';
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
  
  const PrePersonalizacion = () => {
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);
    const editor4 = useRef(null);
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');
    const [content4, setContent4] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [formData, setFormData] = useState({
        textoSuperior: '',
        textoInferior: '',
        botonIzquierdo: '',
        botonDerecho: '',
        textoPieDeFormulario: '',
        mensajeConfirmacion: '',
        preRegistroCerrado: '',
    });
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  
    const handleSelectChange = (event) => {
      setSelectValue(event.target.value);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      console.log("Editor Content 1:", content1);
      console.log("Editor Content 2:", content2);
      console.log("Editor Content 3:", content3);
      console.log("Editor Content 4:", content4);
      console.log("Selected Value:", selectValue);
      console.log("Mensaje de Confirmación:", formData.mensajeConfirmacion);
      console.log("Pre Registro Cerrado:", formData.preRegistroCerrado);
  
      // Clear the form
      setContent1('');
      setContent2('');
      setContent3('');
      setContent4('');
      setSelectValue('');
      setFormData({
        mensajeConfirmacion: '',
        preRegistroCerrado: '',
      });
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
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto superior</Typography>
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
                    <Typography style={{ fontSize: 18 }}>Texto superior</Typography>
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
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Texto inferior</Typography>
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
                    <Typography style={{ fontSize: 18 }}>Texto inferior</Typography>
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
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Boton Izquierdo</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                                            </div>
                                            <div className={classes.cajon2}>
                                                <Input
                                                    type='color'
                                                    style={{width:'95%'}}
                                                    color='primary'
                                                    id="fondoTextoLetra"
                                                    name="fondoTextoLetra"
                                                    value={formData.fondoTextoLetra}
                                                    onChange={handleChange}
                                                    error={!!formErrors.fondoTextoLetra}
                                                    helperText={formErrors.fondoTextoLetra}
                                                />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Boton Izquierdo</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />  
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTextoLetra"
                                                name="fondoTextoLetra"
                                                value={formData.fondoTextoLetra}
                                                onChange={handleChange}
                                                error={!!formErrors.fondoTextoLetra}
                                                helperText={formErrors.fondoTextoLetra}
                                            />
                                            </div>
                                        </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Boton Derecho</Typography>
                                            </div>
                                            <div className={classes.cajon1}>
                                            <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                                                
                                            </div>
                                            <div className={classes.cajon2}>
                                            <Input
                                                type='color'
                                                style={{width:'95%'}}
                                                color='primary'
                                                id="fondoTextoAdminLetra"
                                                name="fondoTextoAdminLetra"
                                                value={formData.fondoTextoAdminLetra}
                                                onChange={handleChange}
                                                error={!!formErrors.fondoTextoAdminLetra}
                                                helperText={formErrors.fondoTextoAdminLetra}
                                            />
                                        
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                        <div className={classes.element}>
                                                <Typography style={{fontSize: 18}}>Boton Derecho</Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <Input
                                                type='color'
                                                style={{width:'100%'}}
                                                color='primary'
                                                id="fondoTextoAdminLetra"
                                                name="fondoTextoAdminLetra"
                                                value={formData.fondoTextoAdminLetra}
                                                onChange={handleChange}
                                                error={!!formErrors.fondoTextoAdminLetra}
                                                helperText={formErrors.fondoTextoAdminLetra}
                                            />
                                            </div>
                                        </>
                                        )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Mensaje de confirmación</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Mensaje de confirmación</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <TextField
                      name="mensajeConfirmacion"
                      value={formData.mensajeConfirmacion}
                      onChange={handleInputChange}
                      style={{ width: '100%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </div>
                </>
              )}
  
              {isDesktop ? (
                <div className={classes.alineado}>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18, marginLeft: 15 }}>Pre registro cerrado</Typography>
                  </div>
                  <div className={classes.cajones}>
                    <TextField
                      name="preRegistroCerrado"
                      value={formData.preRegistroCerrado}
                      onChange={handleInputChange}
                      style={{ width: '80%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className={classes.element}>
                    <Typography style={{ fontSize: 18 }}>Pre registro cerrado</Typography>
                  </div>
                  <div className={classes.alineadoMovile}>
                    <TextField
                      name="preRegistroCerrado"
                      value={formData.preRegistroCerrado}
                      onChange={handleInputChange}
                      style={{ width: '100%' }}
                      color="primary"
                      id="outlined-basic"
                      variant="outlined"
                    />
                  </div>
                </>
              )}
  
              <div className={classes.alineado}>
                <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                  <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                  Guardar Votación
                </Button>
                <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                  <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                  Desactivar
                </Button>
                <Button style={{ marginTop: 20 }} variant="contained" color="primary" onClick={handleSave}>
                  <i className="material-icons" style={{ fontSize: 20, marginRight: 5 }}>star</i>
                  Eliminar Usuario
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    );
  };
  
  export default PrePersonalizacion;*/