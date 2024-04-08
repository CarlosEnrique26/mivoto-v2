import { Grid, TextField, Typography, Checkbox} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const ColoresChart = () => {
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
            justifyContent: 'center', // Horizontally center the buttons
            alignItems: 'center', // Stack buttons vertically by default
            flexDirection: 'column', // Stack buttons vertically by default
            width: '100%', // Make buttons occupy full width
        },
        button: {
            margin: theme.spacing(1), // Add some margin between the buttons
            width: '100%'
        },
        horizontal: {
            flexDirection: 'row',
        },
        groupalineado: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'center', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        alineado: {
            display: 'flex',
            flexDirection: 'row', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        element: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'start', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2),
            width: '100%',
        },
        cajones: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements vertically in a column
            alignItems: 'end', // Center elements horizontally
            justifyContent: 'center', // Center elements vertically
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%',
        },
        largerCheckbox: {
            transform: "scale(1.5)", // Adjust the scale factor as needed for the desired size
        },
        roots: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        // pantalla moviles
        alineadoMovile: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        },
        elementMovile: {
            display: 'flex',
            flexDirection: 'column', // Arrange elements horizontally
            alignItems: 'center', // Center elements vertically
            justifyContent: 'center', // Center elements horizontally
            marginBottom: theme.spacing(2), // Add some margin between rows
            width: '100%'
        }
    }));

    
    const [value, setValue] = React.useState('female');

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
            <div>
                            <Grid item xs={12} md={12} style={{marginTop: 20}}>
                                <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                    <div className={classes.groupalineado}>
                                    {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <Typography style={{fontSize: 18, marginLeft: 15}}>Colores por defecto</Typography>
                                            </div>
                                            <div className={classes.alineado}>
                                            <FormControl component="fieldset">
                                                <Radio
                                                className={classes.largerCheckbox}/>
                                            </FormControl>
                                            </div>
                                        </div>
                                        ) : (
                                        // On smaller screens (e.g., mobile), render Typography and Checkbox separately
                                        <>
                                            <div className={classes.elementMovile}>
                                            <Typography style={{ fontSize: 18}}>
                                                Colores por defecto
                                            </Typography>
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                            <FormControl component="fieldset">
                                                <Radio
                                                className={classes.largerCheckbox}/>
                                            </FormControl>
                                            </div>
                                            </>
                                        )}

                                        {isDesktop ? (
                                        <div className={classes.alineado}>
                                            <div className={classes.element}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 1" variant="outlined" />
                                            </div>
                                            <div className={classes.alineado}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 2" variant="outlined" />
                                            </div>
                                            <div className={classes.cajones}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 3" variant="outlined" />
                                            </div>
                                        </div>
                                        ):(
                                        <>
                                            <div className={classes.elementMovile}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 1" variant="outlined" />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 2" variant="outlined" />
                                            </div>
                                            <div className={classes.alineadoMovile}>
                                                <TextField type='color' style={{width:'90%'}} color='primary' id="outlined-basic" label="OPCION 3" variant="outlined" />
                                            </div>
                                        </>
                                        )} 
                                    </div>
                                </div>
                            </Grid>  
            </div>  
    );
}

export default ColoresChart;