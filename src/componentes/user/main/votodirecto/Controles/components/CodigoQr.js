import React from 'react';
import { Grid, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import style from "../../../../../Tool/Style";
import QRCode from 'qrcode.react'; // Importa el generador de QR
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components (no necesario para el QR)
Chart.register(ArcElement, Tooltip, Legend);

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
        width: '100%',
    },
    largerCheckbox: {
        transform: "scale(1.5)",
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
    qrContainer: {
        width: '100%',
        maxWidth: 600,
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    qrImage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrLogo: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: '50%',
        overflow: 'hidden',
    },
    logo: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
}));

const CodigoQr = () => {
    const [checked, setChecked] = React.useState(true);
    const [Select0, setSelect0] = React.useState('');
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeSelect = (event) => {
        setSelect0(event.target.value);
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barContainer}>
                <Grid style={style.gridcontainer}>
                    <div>
                        <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                            <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                <div className={classes.groupalineado}>
                                    <div className={classes.qrContainer}>
                                        <Typography variant="h6" style={{ marginBottom: 16 }}>
                                            Generador de QR
                                        </Typography>
                                        <div className={classes.qrImage}>
                                            <QRCode
                                                value="https://www.customvote.es/" // URL o texto para el QR
                                                size={256} // Tamaño del QR
                                                bgColor="#ffffff" // Color de fondo
                                                fgColor="#000000" // Color del QR
                                            />
                                            {/* Aquí es donde se coloca el logo */}
                                            <div className={classes.qrLogo}>
                                                <img
                                                    src="https://via.placeholder.com/50" // URL del logo
                                                    alt="logo"
                                                    className={classes.logo}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Aquí puedes añadir el resto de tu código de renderización */}
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </Container>
    );
};

export default CodigoQr;