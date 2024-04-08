import React,{useState} from "react";
import { Container,Grid,TextField,FormControlLabel,Checkbox,Select,MenuItem,Button } from '@material-ui/core';
import style from "../../../../Tool/Style";
//import UploadInput from "../../../../tool/UploadInput";
import JoditEditor from "jodit-react";

const DesignPreRegister = ()=>{
    const [config, setConfig] = useState({
        readonly: false,
        toolbar: true,
    })

    return(
        <Grid style={style.gridcontainer}>

                <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12} >
                            //UploadInput nameFile="uplogo" textFile="Seleccione un Logo" validFile = "image/*"
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <label>Texto superior</label>
                            <JoditEditor
                                config={config}
                                />
                            </Grid>
                        <Grid item xs={12} md={12}>
                                <TextField name="users" variant="outlined" fullWidth label="Texto Identificador" />
                        </Grid>

                        <Grid item xs={6} md={6} >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={false}
                                    name="Isauthenticated"
                                    color="primary"
                                />
                            }
                            label="Campo correo"
                        />
                        </Grid>

                        <Grid item xs={6} md={6} >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        name="Isauthenticated"
                                        color="primary"
                                    />
                                }
                                label="Campo teléfono"
                            />
                        </Grid>
                        
                        <Grid item xs={6} md={6}>
                                <TextField name="users" variant="outlined" fullWidth label="Botón Izquierdo" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                                <input type="color" style={{width: "100%"}} />
                        </Grid>
                        <Grid item xs={6} md={6}>
                                <TextField name="users" variant="outlined" fullWidth label="Botón Derecho" />
                        </Grid>
                        <Grid item xs={6} md={6}>
                        <input type="color" style={{width: "100%"}} />

                        </Grid>
                        <Grid item xs={12} md={12}>
                            <label>Texto Inferior</label>
                            <JoditEditor
                                config={config}
                                />
                            </Grid>
                        <Grid item xs={12} md={12}>
                            <label>Texto Pie de Formulario</label>
                            <JoditEditor
                                config={config}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <label>Mensaje de Confirmación</label>
                            <JoditEditor
                                config={config}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <label>Cerrado</label>
                            <JoditEditor
                                config={config}
                                />
                            </Grid> 
            </Grid>
        </Container>

        

</Grid>

    );
}
export default DesignPreRegister;