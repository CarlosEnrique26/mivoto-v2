import React, { useState } from "react";
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import style from "../Tool/Style";
import imagenes from '../../assets/imagenes';
import { Link } from "react-router-dom";


const PagPrincipal = (props) => {

    const useStyles = makeStyles((theme) =>({
        espacios: {
            marginTop: theme.spacing(6), // Add margin top
            [theme.breakpoints.down("sm")]: {
                marginTop: theme.spacing(2) // Adjust margin for small screens
            }
        },
        stylePrincipal: {
            display: 'flex',
            marginTop: 30,
            width: '100%', // Make cards occupy full width
            height: '100%', // Make cards occupy full height
            borderRadius: theme.spacing(2), // Adjust border radius
            border: '2px solid #C9C8C8',
            [theme.breakpoints.up("md")]: {
                height: '570px', // Adjust height for desktop screens
                width: '280px'
            }
        },
        imgHover: {
            transition: 'transform 0.3s ease',
            opacity: 0.8, // Initial opacity
            '&:hover': {
                transform: 'scale(1.1)', // Scale the image slightly on hover
                filter: 'contrast (220%)', 
                opacity: 1
            }
        }
        
    }));

    const classes = useStyles();
    
return (
    <Container component="main" maxWidth={false} justify="center" style={style.barSup}>
        <Container component="main" justify="center">
            <div style={style.stylecenter}>
                <Grid container spacing={3} className={classes.espacios}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/auth/indexdirect" style={{textDecoration: 'none'}}>
                            <Card className={classes.stylePrincipal}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="500"
                                    image={imagenes.img5}
                                    title="Contemplative Reptile"
                                    className={classes.imgHover} // Apply hover effect here
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Directo
                                    </Typography>
                                    
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/auth/indexdiferido" style={{textDecoration: 'none'}}>
                            <Card className={classes.stylePrincipal}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="500"
                                    image={imagenes.img3}
                                    title="Contemplative Reptile"
                                    className={classes.imgHover} // Apply hover effect here
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Diferido
                                    </Typography>
                                    
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/auth/indexjuegos" style={{textDecoration: 'none'}}>
                            <Card className={classes.stylePrincipal}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="500"
                                    image={imagenes.img1}
                                    title="Contemplative Reptile"
                                    className={classes.imgHover} // Apply hover effect here
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Juegos
                                    </Typography>
                                    
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/auth/soporte" style={{textDecoration: 'none'}}>
                            <Card className={classes.stylePrincipal}>
                                <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="500"
                                        image={imagenes.img2}
                                        title="Contemplative Reptile"
                                        className={classes.imgHover} // Apply hover effect here
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Soporte
                                        </Typography>
                                        
                                        </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </div>
            </Container>
        </Container>
    );
}

export default PagPrincipal;
