import React,{useState} from "react";
import { Container,Stepper,StepButton, Button,Step,Grid} from '@material-ui/core';
import style from '../../../Tool/Style';
import { makeStyles } from '@material-ui/core/styles';

import ConfigPreRegister from "./components/configPreRegister";
import DesignPreRegister from "./components/designPreRegister";

const PreRegister = () =>{
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        other: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        extendedIcon: {
            marginTop:10,
            marginRight: theme.spacing(1),
        },
    }));

    function getSteps() {
        return ['Configuración', 'Diseño'];
    }

        
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <ConfigPreRegister />;
            case 1:
                return <DesignPreRegister />;
            default:
                return 'Unknown stepIndex';
        }
    }
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if(activeStep === steps.length - 1){
            handleBack();
        } 
    };
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(

        <Container maxWidth={false} style={style.barSup}>
        <Container maxWidth={false} style={style.barTitle}>
            <h1 style={style.title}>Nuevo Pre Registro</h1>
            <label style={style.titleinfo}>Configuración de preregistro</label>
        </Container>
        <Container maxWidth ={false} style={style.barContain}>
                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepButton
                                onClick={handleStep(index)}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Grid style={style.gridcontainer}>
                    <Container maxWidth={false}>
                        <Grid container spacing={2}>
                                    <Grid item xs={12} md={12} >
                                        {getStepContent(activeStep)}
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{ textAlign: "left" }}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.backButton}>
                                            Anterior
                                            </Button>
                                    </Grid>
                                    <Grid item xs={6} md={6} style={{ textAlign: "right" }}>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                        </Button>
                                    </Grid>
                        </Grid>
                    </Container>
                </Grid>

            </Container>
    </Container>
    );
}

export default PreRegister;