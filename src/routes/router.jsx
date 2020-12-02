import { BrowserRouter, Switch, Route } from "react-router-dom";

import Capilares from "../pages/capilares";
import Faciales from "../pages/faciales"
import Maquillaje from "../pages/maquillaje"
import Peinados from "../pages/peinados"
import Iniciar from "../pages/iniciar"
import Registrarse from "../pages/registrarse"
import Home from "../pages/home";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/capilares" exact>
                    <Capilares />
                </Route>
                <Route path="/faciales" exact>
                    <Faciales />
                </Route>
                <Route path="/maquillaje" exact>
                    <Maquillaje />
                </Route>
                <Route path="/peinados" exact>
                    <Peinados />
                </Route>
                <Route path="/iniciar" exact>
                    <Iniciar />
                </Route>
                <Route path="/registrarse" exact>
                    <Registrarse />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}


export default Router;