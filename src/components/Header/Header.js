import React from "react";
import {cn} from '@bem-react/classname'
import './Header.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const headerCN = cn('header');
export  const Header = props =>{
    return (<Router>
        <div className={headerCN('container')}>
<h1 className={headerCN('label')}>Vita Media Planer</h1>
            <Switch>
                <Route path={"/main"}>
                    <div className={headerCN('info')}>
                    <p className={headerCN('login')}>Логин: Агата_Рудько</p>
                    <button className={headerCN('btn')}>Выйти</button>
                    </div>
                </Route>
                <Route path={"/ro"}>
                    <div className={headerCN('info')}>
        <p className={headerCN('login')}>Логин: Агата_Рудько</p>
        <button className={headerCN('btn')}>Выйти</button>
                    </div>
                </Route>
            </Switch>
    </div>
        </Router>
    )

};