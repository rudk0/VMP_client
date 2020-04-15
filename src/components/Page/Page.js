import React from "react";
import {cn} from '@bem-react/classname'
import './Page.scss';
import {Auth} from "../Auth-form/Auth";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Main} from "../Main/Main";
import {RO} from "../RO-form/RO";

const PageCN = cn('page');
export const Page= () =>{
    return(<Router>
        <div className={PageCN('container')}>
        <Switch>
            <Route path="/login">
                <Auth />
            </Route>
            <Route path="/main">
                <Main />
            </Route>
            <Route path="/ro">
                <RO />
            </Route>
        </Switch>
    </div>
    </Router>)
};
