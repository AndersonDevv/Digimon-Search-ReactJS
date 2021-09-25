
import { Switch, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Digimons from '../pages/digimons/Digimons';
import Sobre from '../pages/sobre/Sobre';

export default function Rotas(){
    return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/digimons">
            <Digimons />
        </Route>

        <Route exact path="/sobre">
            <Sobre />
        </Route>
    </Switch>
    )
}