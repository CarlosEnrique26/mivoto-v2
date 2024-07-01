import React, { useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme"
import { StateProvider, useStateValue } from "./context/store";
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
import PrePrincipal from "./componentes/user/tool/preregister/components/prePrincipal";
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
import Sonido from "./componentes/user/tool/mantenimiento/Sonido";
import Usuarios from "./componentes/user/tool/mantenimentoUsuario/Usuarios";
import Email from "./componentes/user/tool/mantenimiento/Email";
import Votaciones from "./componentes/user/tool/mantenimiento/Votaciones";
import Empresas from "./componentes/user/tool/mantenimiento/Empresas";
import Perfiles from "./componentes/user/tool/mantenimentoUsuario/Perfiles";
import Roles from "./componentes/user/tool/mantenimentoUsuario/Roles";
import NavButtonsPr from "./componentes/user/tool/preregister/NavButtonsPr";
import PrePersonalizacion from "./componentes/user/tool/preregister/components/prePersonalizacion";
import PreCampos from "./componentes/user/tool/preregister/components/preCampos";
import RutaSegura from "./componentes/navegacion/RutaSegura";
import { loginUser } from "./actions/LoginAction";
import { VotationContext, VotationProvider } from "./context/VotationContext";


function App() {
    const [{sesionUsuario}, dispatch] = useStateValue();
    const [ iniciaApp, setIniciaApp] = useState(false);
    

    useEffect(() => {
        if(!iniciaApp) {
          loginUser(dispatch).then(response =>{
            setIniciaApp(true);
          }).catch(error => {
            setIniciaApp(true);
          })
        }
    },[iniciaApp])
  /*
    useEffect(() => {
      if (!iniciaApp) {
        setIniciaApp(true);
      }
    }, [iniciaApp]);
    */
    return (
        <Router>
        <MuiThemeProvider theme={theme}>
        <VotationProvider>
          <Grid container>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/auth/registrarusuario" component={RegistrarUsuario} />
              <Route exact path="/auth/passrecovery" component={PassRecovery} />
              <RutaSegura exact path="/auth/profileuser" component={() => (
              <>
                <AppNavbar />
                <ProfileUser />
              </>
            )} />
              <RutaSegura exact path="/auth/pagprincipal" component={() => (
                <>
                  <AppNavbar />
                  <PagPrincipal />
                </>
              )} />
              <Route exact path="/auth/listpreregister" component={() => (
                <>
                  <AppNavbar />
                  <ListPreRegister />
                </>
              )} />
              <RutaSegura exact path="/auth/preprincipal" component={() => (
                <>
                  <AppNavbar />
                  <PrePrincipal />
                </>
              )} />
              <RutaSegura exact path="/auth/prepersonalizacion" component={() => (
                <>
                  <AppNavbar />
                  <PrePersonalizacion />
                </>
              )} />
              <RutaSegura exact path="/auth/precampos" component={() => (
                <>
                  <AppNavbar />
                  <PreCampos />
                </>
              )} />
              <RutaSegura exact path="/auth/preregister" component={() => (
                <>
                  <AppNavbar />
                  <PreRegister />
                </>
              )} />
              <RutaSegura exact path="/auth/mail" component={() => (
                <>
                  <AppNavbar />
                  <Mail />
                </>
              )} />
              <RutaSegura exact path="/auth/sonido" component={() => (
                <>
                  <AppNavbar />
                  <Sonido />
                </>
              )} />
              <RutaSegura exact path="/auth/email" component={() => (
                <>
                  <AppNavbar />
                  <Email />
                </>
              )} />
              <RutaSegura exact path="/auth/votaciones" component={() => (
                <>
                  <AppNavbar />
                  <Votaciones />
                </>
              )} />
              <RutaSegura exact path="/auth/empresas" component={() => (
                <>
                  <AppNavbar />
                  <Empresas />
                </>
              )} />
              <RutaSegura exact path="/auth/usuario" component={() => (
                <>
                  <AppNavbar />
                  <Usuarios />
                </>
              )} />
              <RutaSegura exact path="/auth/perfiles" component={() => (
                <>
                  <AppNavbar />
                  <Perfiles />
                </>
              )} />
              <RutaSegura exact path="/auth/roles" component={() => (
                <>
                  <AppNavbar />
                  <Roles />
                </>
              )} />
              <RutaSegura exact path="/auth/indexdirect" component={() => (
                <>
                  <AppNavbar />
                  <IndexDirect />
                </>
              )} />
              <RutaSegura exact path="/auth/indexdiferido" component={() => (
                <>
                  <AppNavbar />
                  <IndexDiferido />
                </>
              )} />
              <RutaSegura exact path="/auth/indexjuegos" component={() => (
                <>
                  <AppNavbar />
                  <IndexJuegos />
                </>
              )} />
              <RutaSegura exact path="/auth/soporte" component={() => (
                <>
                  <AppNavbar />
                  <IndexDiferido />
                </>
              )} />
              <RutaSegura exact path="/auth/botonesnavegacion" component={() => (
                <>
                  <AppNavbar />
                  <NavButtons />
                </>
              )} />
              <RutaSegura exact path="/auth/votacion" component={() => (
                <>
                  <AppNavbar />
                  <Votacion />
                </>
              )} />
              <RutaSegura exact path="/auth/question" component={() => (
                <>
                  <AppNavbar />
                  <Question />
                </>
              )} />
              <RutaSegura exact path="/auth/controls" component={() => (
                <>
                  <AppNavbar />
                  <Controls />
                </>
              )} />
              <RutaSegura exact path="/auth/controlesdif" component={() => (
                <>
                  <AppNavbar />
                  <ControlesDif />
                </>
              )} />
              <RutaSegura exact path="/auth/controlesj" component={() => (
                <>
                  <AppNavbar />
                  <ControlesJ />
                </>
              )} />
              <RutaSegura exact path="/auth/botonesnavegaciondif" component={() => (
                <>
                  <AppNavbar />
                  <NavButtonsDif />
                </>
              )} />
              <RutaSegura exact path="/auth/botonesnavegacionj" component={() => (
                <>
                  <AppNavbar />
                  <NavButtonsJ />
                </>
              )} />
              <RutaSegura exact path="/auth/botonesnavegacionpr" component={() => (
                <>
                  <AppNavbar />
                  <NavButtonsPr />
                </>
              )} />
            </Switch>
          </Grid>
          </VotationProvider>
        </MuiThemeProvider>
      </Router>
    )
}

export default App;
   //<Route exact path="/auth/pagprincipal" component={PagPrincipal}/>