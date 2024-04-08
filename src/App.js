import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme"
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import Login from "./componentes/seguridad/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import PassRecovery from "./componentes/seguridad/PassRecovery";
import ProfileUser from "./componentes/seguridad/ProfileUser";
import AppNavbar from "./componentes/navegacion/AppNavbar";
import PagPrincipal from "./componentes/seguridad/PagPrincipal";
import ListPreRegister from "./componentes/user/tool/preregister/ListPreRegister";
import PreRegister from "./componentes/user/tool/preregister/PreRegister";
import Mail from "./componentes/user/tool/mail/Mail";
import IndexDirect from "./componentes/user/main/votodirecto/IndexDirect";
import IndexDiferido from "./componentes/user/main/votodiferido/IndexDiferido";
import NavButtons from "./componentes/user/main/votodirecto/components/NavButtons";
import NavButtonsDif from "./componentes/user/main/votodiferido//components/NavButtonsDif";
import Votacion from "./componentes/user/main/votodirecto/components/Votacion/Votacion";
import Question from "./componentes/user/main/votodirecto/components/Preguntas/Question";
import Controls from "./componentes/user/main/votodirecto/Controles/Controles";
import IndexJuegos from "./componentes/user/main/juegosvoto/IndexJuegos";
import NavButtonsJ from "./componentes/user/main/juegosvoto/components/NavButtonsJ";
import ControlesDif from "./componentes/user/main/votodiferido/ControlesDif/ControlesDif";
import ControlesJ from "./componentes/user/main/juegosvoto/ControlesJ/ControlesJ";


function App() {

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
            
                <Grid container>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/auth/login" component={Login}/>
                        <Route exact path="/auth/registrarusuario" component={RegistrarUsuario}/>
                        <Route exact path="/auth/passrecovery" component={PassRecovery}/>
                        <Route exact path="/auth/profileuser">
                            <AppNavbar />
                            <ProfileUser/>
                        </Route>
                        <Route exact path="/auth/pagprincipal">
                            <AppNavbar />
                            <PagPrincipal />
                        </Route>
                        <Route exact path="/auth/listpreregister">
                            <AppNavbar />
                            <ListPreRegister />
                        </Route>
                        <Route exact path="/auth/preregister">
                            <AppNavbar />
                            <PreRegister />
                        </Route>
                        <Route exact path="/auth/mail">
                            <AppNavbar />
                            <Mail />
                        </Route>
                        <Route exact path="/auth/indexdirect">
                            <AppNavbar />
                            <IndexDirect />
                        </Route>
                        <Route exact path="/auth/indexdiferido">
                            <AppNavbar />
                            <IndexDiferido />
                        </Route>
                        <Route exact path="/auth/indexjuegos">
                            <AppNavbar />
                            <IndexJuegos />
                        </Route>
                        <Route exact path="/auth/soporte">
                            <AppNavbar />
                            <IndexDiferido />
                        </Route>
                        <Route exact path="/auth/botonesnavegacion">
                            <AppNavbar />
                            <NavButtons />
                        </Route>
                        <Route exact path="/auth/votacion">
                            <AppNavbar />
                            <Votacion />
                        </Route>
                        <Route exact path="/auth/question">
                            <AppNavbar />
                            <Question />
                        </Route>
                        <Route exact path="/auth/Controls">
                            <AppNavbar />
                            <Controls />
                        </Route>
                        <Route exact path="/auth/ControlesDif">
                            <AppNavbar />
                            <ControlesDif />
                        </Route>
                        <Route exact path="/auth/ControlesJ">
                            <AppNavbar />
                            <ControlesJ />
                        </Route>
                        <Route exact path="/auth/botonesnavegaciondif">
                            <AppNavbar />
                            <NavButtonsDif />
                        </Route>
                        <Route exact path="/auth/botonesnavegacionJ">
                            <AppNavbar />
                            <NavButtonsJ />
                        </Route>
                    </Switch>
                </Grid>
            </MuiThemeProvider>
        </Router>
    )
}

export default App;
   //<Route exact path="/auth/pagprincipal" component={PagPrincipal}/>