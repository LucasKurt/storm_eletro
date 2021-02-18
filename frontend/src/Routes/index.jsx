import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Produtos from "../Pages/Produtos";
import Produto from "../Pages/Produto";
import NossasLojas from "../Pages/NossasLojas";
import Contatos from "../Pages/Contatos";
import Sacola from "../Pages/Sacola";
import Erro404 from "../Pages/Erro404";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Produtos" component={Produtos}/>
            <Route path="/Produto/:id/" component={Produto}/>
            <Route path="/NossasLojas" component={NossasLojas}/>
            <Route path="/Contatos" component={Contatos}/>
            <Route path="/Sacola" component={Sacola}/>
            <Route component={Erro404}/>
        </Switch>
    );
}

export default Routes;