import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import style from "../../../Tool/Style";
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


const IndexDirect = () => {
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
        },
        linkContainer: {
            display: 'flex',
            alignItems: 'center', 
            marginBottom: '5px',
            flex: '1',
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        PieContent:{
            display: 'flex',
            marginBottom: 7,
        },
        iconContent:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        icon: {
            fontSize: 30,
            marginLeft: 'auto',
        },
        typographyColm: {
            flexDirection: 'column',
            marginLeft: 10
        },
        Contenedores: {
            border: '2px solid #C9C8C8',
            height: 330,
            borderRadius: '10px 10px 10px 10px',
            padding: 10,
        }
        
    }));

    const classes = useStyles();

    return (
        <Container maxWidth={false} style={style.barSup}>
            <Container maxWidth={false} style={style.barContainer}>
                <Grid style={style.gridcontainer}>

                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid item xs={12} md={6}>
                                    <Typography style={{ marginTop: 5, fontSize: 25 }}>Votaciones en Directo</Typography>
                                </Grid>
                                <div style={{ width: '100%', marginTop: 5 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/botonesnavegacion" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/Controls" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={12} md={4}>
                                            <div className={classes.Contenedores}>
                                                <div className={classes.PieContent}>
                                                    <div className={classes.linkContainer}>
                                                        <Typography style={{fontSize: 18}}>DEMO CUSTOMVOTE...</Typography>
                                                    </div>
                                                    <div className={classes.iconContent}>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <InsertDriveFileIcon className={classes.icon} />
                                                        </Link>
                                                        <Link to="/auth/soporte" className={classes.link}>
                                                            <SettingsIcon className={classes.icon} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>account_circle</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>mouse</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>insert_chart</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>people_alt</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                                <div className={classes.linkContainer}>
                                                    <i className="material-icons" style={{fontSize: 50}}>help</i>
                                                    <div className={classes.typographyColm}>
                                                        <Typography style={{fontSize: 18}}>DEMOSTRACION</Typography>
                                                        <Typography style={{fontSize: 13}}>DEMOSTRACION</Typography>
                                                    </div>
                                                </div>
                                            </div>
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

export default IndexDirect;