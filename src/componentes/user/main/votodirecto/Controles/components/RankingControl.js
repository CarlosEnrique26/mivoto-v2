import React from 'react';
import { Grid, Typography, Checkbox, MenuItem, Select, InputLabel, FormControl, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import style from "../../../../../Tool/Style";
import { Bar } from 'react-chartjs-2'; // Importa el gráfico de barras de react-chartjs-2
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Registra los componentes necesarios para el gráfico de barras
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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
    chartContainer: {
        width: '100%',
        maxWidth: 600,
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const RankingControl = () => {
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

    // Data and options for the Bar chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barContainer}>
                <Grid style={style.gridcontainer}>
                    <div>
                        <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                            <div className={`${classes.buttonContainer} ${isDesktop ? classes.horizontal : ''}`}>
                                <div className={classes.groupalineado}>
                                    <div className={classes.chartContainer}>
                                        <Typography variant="h6" style={{ marginBottom: 16 }}>
                                            Gráfico de Barras
                                        </Typography>
                                        <Bar data={data} options={options} />
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

export default RankingControl;