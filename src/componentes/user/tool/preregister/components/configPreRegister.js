import React from "react";
import { Container,Grid,TextField,FormControl,InputLabel,Select,MenuItem,FormControlLabel,Checkbox} from '@material-ui/core';
import style from "../../../../Tool/Style";
//import UploadInput from "../../../../tool/UploadInput";

const ConfigPreRegister = ()=>{
    return(
        <Grid style={style.gridcontainer}>

        <Container maxWidth={false}>
                    <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TextField name="users" variant="outlined" fullWidth label="Nombre" />
                </Grid>
                <Grid item xs={12} md={12} >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                name="Isauthenticated"
                                color="primary"
                            />
                        }
                        label="Registro Único"
                    />
                </Grid>
                
                <Grid item xs={12} md={12} >
                    //UploadInput nameFile="upParticipants"  textFile="Seleccione un csv de votantes" validFile = ".csv"
                </Grid>



                <Grid item xs={12} md={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Envio de Credenciales</InputLabel>
                        <Select
                            name="mode"
                            label="Envio de Credenciales"
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>Seleccione</em>
                            </MenuItem>
                            <MenuItem value={"1"}>Primer Voto</MenuItem>
                            <MenuItem value={"2"}>Revoto</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>vincular Votación</InputLabel>
                        <Select
                            name="mode"
                            label="vincular Votación"
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>Seleccione</em>
                            </MenuItem>
                            <MenuItem value={"1"}>Primer Voto</MenuItem>
                            <MenuItem value={"2"}>Revoto</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField name="users" variant="outlined" fullWidth label="URL" />
                </Grid>
            </Grid>
        </Container>

</Grid>

    );
}
export default ConfigPreRegister;