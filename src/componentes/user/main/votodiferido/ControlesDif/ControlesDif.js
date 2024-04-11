import React,{ useState,useEffect} from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { Container,Accordion, AccordionSummary,Typography,AccordionDetails, Grid, Link, Select, Box, Button, ListItemText, Card, CardActions, CardContent, TextField, Input, useMediaQuery } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LaunchIcon from '@material-ui/icons/Launch';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ViewListIcon from '@material-ui/icons/ViewList';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import CropFreeIcon from '@material-ui/icons/CropFree';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import GroupIcon from '@material-ui/icons/Group';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssessmentIcon from '@material-ui/icons/Assessment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import GavelIcon from '@material-ui/icons/Gavel';
import VisibilityIcon from '@material-ui/icons/Visibility'; 
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ReplayIcon from '@material-ui/icons/Replay';
import CachedIcon from '@material-ui/icons/Cached';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PieChartIcon from '@material-ui/icons/PieChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import MailIcon from '@material-ui/icons/Mail';
import SendIcon from '@material-ui/icons/Send';
import BallotIcon from '@material-ui/icons/Ballot';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"; 
import questions from './components/questions.json';
import questionsLive from './components/questionsLive.json';
import style from "../../../../Tool/Style";

const ControlesDif = () => {
    const [connection, setConnection] = useState(null);

    const [lista, setLista] = useState([]);
    const [answer, setAnswers] = useState([]);
    const [namequestion, setNameQuestion] = useState("");
    const [questionid , setQuestionId] = useState("");
    const [listaLive, setListaLive] = useState([]);
    const [answerLive, setAnswersLive] = useState([]);
    const [namequestionLive, setNameQuestionLive] = useState("");
    const [questionLiveId , setQuestionLiveId] = useState("");
  
    const [form, setForm] = useState({
        input: "El mensaje ah sido copiado correctamente",
        input1: "El segundo mesaje esta en modo prueba"
    });

    useEffect(() => {
        consumejson();
        const connect = new HubConnectionBuilder()
            .withUrl("https://localhost:44378//hubs/notifyHub")
            .withAutomaticReconnect()
            .build();
    
        setConnection(connect);
        }, []);
;
    
    const consumejson = () => {
        setLista(questions);
        setListaLive(questionsLive);
    }

    

    const handleChange = (event) => { 
        const name = event.target.value;
        setQuestionId(name);
        var qs = lista.find(e => e.id == name);
        setAnswers(qs.respuestas);
        setNameQuestion(qs.question);
      };
;
    
    const sendMessage = async () => {
        if (connection) connection.send("SendMessage", "hola");
 
    };

    const copiarAlPortapapeles=()=>{
        var aux= document.createElement("input");
        aux.setAttribute("value", form.input);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);

        alert("Se copio al portapapeles");
    }
   
    const history = useHistory();
    const GraphicsPie = () => history.push('/auth/graphicspie');
    const Qr = () => history.push('/auth/qr');
    const Ranking = () => history.push('/auth/ranking');
    const GraphicsFusion = () => history.push('/auth/graphicsfusion');
    const LoginVote = () => history.push('/auth/LoginVote');
    const Questions = () => history.push('/auth/Questions');
    const Observaciones = () => history.push('/auth/Observaciones');
    

    const defaultProps = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        style: { width: '5rem', height: '5rem' },
      };
    const useStyles = makeStyles((theme) => ({
        root:   {
                flexGrow: 1,
                },
        paper:  {
                padding: theme.spacing(2),
                textAlign: 'center',
                //color: theme.palette.text.secondary,
                },
        other:  {
                padding: theme.spacing(2),
                //textAlign: 'center',
                //color: theme.palette.text.secondary,
                },
                IconsControl: {
                    margin: theme.spacing(1), // Add some margin between the buttons
                    width: '100%',
                    //transition: 'transform 0.3s ease',
                    //opacity: 10, // Initial opacity
                    //backgroundColor: activeButton === 'votacion'  ? '#ff0000' : null,
                    transition: 'transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease', // Agrega una transición suave a los cambios
                    opacity: 0.7, // Establece una opacidad inicial (semi transparente)
                    '&:hover': {
                        //transform: 'scale(1.1)', // Scale the image slightly on hover
                        //filter: 'contrast (220%)', 
                        //opacity: 1,
                        //zIndex: 9,
                        transform: 'scale(1.1)', // Escala el ícono ligeramente al hacer hover
                        filter: 'contrast(220%)', // Aumenta el contraste al hacer hover
                        opacity: 1, // Establece la opacidad a 1 al hacer hover (totalmente opaco)
                        color: 'black', // Cambia el color del ícono a negro al hacer hover 
                    }
                },  
                IconsControl1: {
                    
                    width: '50%',
                    transition: 'transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease', // Agrega una transición suave a los cambios
                    opacity: 0.7, // Establece una opacidad inicial (semi transparente)
                    '&:hover': {
                        transform: 'scale(1.1)', // Escala el ícono ligeramente al hacer hover
                        filter: 'contrast(220%)', // Aumenta el contraste al hacer hover
                        opacity: 1, // Establece la opacidad a 1 al hacer hover (totalmente opaco)
                        color: 'black', // Cambia el color del ícono a negro al hacer hover 
                    }
                },            
            }));
                const classes = useStyles();

    return (
        <Container maxWidth={false} style={style.barSup} >
            <Container maxWidth={false} style={style.barContainer}>
                <Grid style={style.gridcontainer}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{background:"#56c111", color:"white"}}
                    >
                    <Typography style={{ fontSize:20}} >Control de Enlace</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Container style={{marginTop:20}} maxWidth>
                            <Grid container spacing={2}  style={{textAlign :"center"}}>
                                <Grid item xs={12} md={2}>
                                    <LaunchIcon className={classes.IconsControl} onClick={GraphicsPie} style={{ fontSize: 100 }}/>
                                    <Typography> Enlace Gráfico</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <LaunchIcon  className={classes.IconsControl} onClick={LoginVote} style={{ fontSize: 100 }} />
                                    <Typography> Enlace Votación</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <FileCopyOutlinedIcon className={classes.IconsControl} onClick={copiarAlPortapapeles} style={{ fontSize: 100 }} />
                                    <Typography> Copiar enlace Gráfica</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <FileCopyOutlinedIcon className={classes.IconsControl} onClick={copiarAlPortapapeles} style={{ fontSize: 100 }} />
                                    <Typography> Copiar enlace Votación</Typography>
                                </Grid>
                                 
                                <Grid item xs={12} md={2}>
                                <CropFreeIcon className={classes.IconsControl} onClick={Qr} style={{ fontSize: 100 }}/>
                                    <Typography> Código QR</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <SystemUpdateAltIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Consolidado de la Votación</Typography>
                                </Grid>
 
                                <Grid item xs={12} md={2}>
                                    <SyncAltIcon className={classes.IconsControl} onClick={GraphicsFusion} style={{ fontSize: 100 }}/>
                                    <Typography> Gráfico Fusión</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <QuestionAnswerOutlinedIcon className={classes.IconsControl} onClick={Questions} style={{ fontSize: 100 }} />
                                    <Typography>Preguntas</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <GroupIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Censo Votantes</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <AssessmentOutlinedIcon className={classes.IconsControl} onClick={Ranking} style={{ fontSize: 100 }} />
                                    <Typography>Ranking</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <GavelIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Resultados</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                <VisibilityOutlinedIcon className={classes.IconsControl} onClick={Observaciones} style={{ fontSize: 100 }} />
                                    <Typography>Observaciones</Typography>
                                </Grid>
                            </Grid>
                        </Container> 
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{background:"#56c111", color:"white"}}
                    >
                    <Typography style={{ fontSize:20}}  >Control de Votación</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Container style={{marginTop:20}} maxWidth>
                            <Grid container spacing={2}  style={{textAlign :"center"}}>
                                <Grid item xs={12} md={2}>
                                    <PlayCircleFilledWhiteOutlinedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Inicio</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <ArrowBackIosIcon className={classes.IconsControl1} style={{ fontSize: 100 }} />
                                    <ArrowForwardIosIcon className={classes.IconsControl1} style={{ fontSize: 100 }} />
                                    <Typography> Anterior / Siguiente</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}> 
                                    <LockOpenIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Abrir</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <LockOutlinedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Cerrar</Typography>
                                </Grid>
                                
                                <Grid item xs={12} md={2}>
                                    <ExitToAppIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Quitar Usuario</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <PowerSettingsNewIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Finalizar</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <ReplayIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Reiniciar Pregunta</Typography>
                                </Grid>
 
                                <Grid item xs={12} md={2}>
                                    <CachedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography> Reiniciar Todo</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <BarChartIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Mostrar Gráfico</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <AssessmentIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Ocultar Gráfico</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <FormatListBulletedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Mostrar Leyenda</Typography>
                                </Grid>

                                <Grid item xs={12} md={2}>
                                    <MailOutlineOutlinedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Solicitar Resultados</Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <ViewListIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Votos Recibidos : </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <GroupIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Votantes en linea : </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <SendOutlinedIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                    <Typography>Confirmación de Votos </Typography>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <ReplayIcon className={classes.IconsControl} style={{ fontSize: 100, marginRight: 10 }} />
                                    <Typography> Reiniciar Prengunta  </Typography>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                <CachedIcon className={classes.IconsControl} style={{ fontSize: 100, marginRight: 10 }} />
                                    <Typography>R. Todo </Typography>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                <SendOutlinedIcon className={classes.IconsControl} style={{ fontSize: 100, marginRight: 10 }} />
                                    <Typography>Enviar Control </Typography>
                                </Grid>
                                <Grid item xs={12} md={1}>
                                <LaunchIcon className={classes.IconsControl} style={{ fontSize: 100 }}/>
                                    <Typography>Ver Presencia </Typography>
                                </Grid>
                            </Grid>
                        </Container> 
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{color:"white"}} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{background:"#56c111", color:"white"}}
                    >
                    <Typography style={{ fontSize:20}} >Preguntas</Typography>
                    </AccordionSummary>
                    <AccordionDetails> 
                    <Container style={{marginTop:20}} maxWidth>
                            <Grid container spacing={2}  style={{textAlign :"center"}}>
                                <Grid item xs={12} md={5}>
                                <Select
                                    color="primary" 
                                    native
                                    fullWidth
                                    value={questionid}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                    >
                                    ({ lista.map((info,i) => ( 
                                        <option value={info.id}>{info.question}</option> 
                                    ))})    
                                    
                                    </Select>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <PlayCircleFilledWhiteIcon className={classes.IconsControl} style={{ fontSize: 100 }} />
                                </Grid>
                                <Grid item xs={12} md={5} borderRadius>
                                    <ListItemText>
                                        <Box borderRadius="borderRadius" {...defaultProps} value={10} fullWidth style={{ height: 200}}> 
                                            <Typography style={{ fontSize: 25, marginTop: 15}}>{namequestion}</Typography>
                                            { answer.map((info,i) => ( 
                                                <Typography style={{ fontSize: 20, marginTop: 12}} className="IconsControl">{info.value}</Typography>
                                            ))}
                                        </Box>
 
                                    </ListItemText>
                                </Grid>
                            </Grid>
                        </Container> 
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon  style={{color:"white"}} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{background:"#56c111", color:"white"}}
                        >
                        <Typography style={{ fontSize:20}} >Preguntas en Vivo</Typography>
                    </AccordionSummary>
                    <AccordionDetails> 
                    <Container maxWidth style={{marginTop:10}}  >
                        <div className={classes.root}>
                            <Grid container spacing={3} style={{textAlign :"center"}} >
                                { listaLive.map((info,i) => (
                                    <Grid item xs={4}>
                                        <Card className={classes.root} style={{ height: 310}}>
                                            <CardContent>
                                                <ListItemText>
                                                    <Box borderRadius="borderRadius" {...defaultProps} fullWidth style={{ height: 260}}> 
                                                        <Typography style={{ fontSize: 25, marginTop: 20}}>{info.question} </Typography>  
                                                        <Typography>{namequestionLive}</Typography>
                                                            { info.respuestas.map((anw,i) => ( 
                                                        <Typography style={{ fontSize: 20, marginTop: 20}} className="IconsControl">{anw.value}</Typography>
                                                            ))}
                                                    </Box>
                                                </ListItemText>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )) }
                            </Grid>
                        </div>
                    </Container>
                </AccordionDetails>
            </Accordion>
            </Grid>
            </Container>
        </Container>
    );
}
export default ControlesDif;