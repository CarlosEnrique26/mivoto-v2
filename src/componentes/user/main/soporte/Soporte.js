import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../Tool/Style";

const Soporte = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 450
        },
        espacios: {
            [theme.breakpoints.up("md")]: {
                marginTop: "10%"
            }
        },
        barContain1: {
            backgroundColor: "white",
            width: "30%",
            minHeight: 500,
            height: "auto",
            margin: "auto",
            marginTop: 10,
            border: '2px solid #C9C8C8',
            borderRadius: '10px 10px 10px 10px',
        }
    }));

    const classes = useStyles();

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barContain}>
                <Grid style={style.gridcontainer}>

                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid item xs={12} md={6}>
                                    <Typography style={{ marginTop: 5, fontSize: 25 }}>Soporte</Typography>
                                </Grid>
                                <div style={{ width: '100%', marginTop: 5 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div style={{ border: '2px solid #C9C8C8', height: 350, borderRadius: '10px 10px 10px 10px' }}></div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>

                </Grid>
            </Container>
        </Container>
    );
}

export default Soporte;