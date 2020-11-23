import { BrowserRouter, Switch, Route } from "react-router-dom";

import Capilares from "../pages/capilares"

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/capilares" exact="">
                    <Capilares/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}


export default Router;