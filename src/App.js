import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Redirect, Switch} from "react-router-dom";
import {NonAuthorizedRoute} from "./components/NonAuthorizedRoute";
import {AuthorizedRoute} from "./components/AuthorizedRoute";
import {Routes} from "./const/Routes";
import {Auth} from "./components/Auth-form/Auth";
import {Main} from "./components/Main/Main";
import {RO} from "./components/RO-form/RO";
import {connect} from "react-redux";
import {isAuthorizedSelector} from "./redux/auth/authSelectors";
import {RoBuilder} from "./components/RO-create/RoBuilder";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {KP} from "./components/KP-builder/KP";

function App(props) {
  const {isAuthorized, location} = props;
  toast.configure();
  return (
    <div className="App">
      <Header isAuthorized={isAuthorized}/>
      <Switch location={location}>
        <NonAuthorizedRoute exact={true} path={'/login'} component={Auth} isAuthorized={isAuthorized}/>
        <AuthorizedRoute path={Routes.Ro} component={RO} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.RoBuilder} component={RoBuilder} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.KpBuilder} component={KP} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.Main} component={Main} isAuthorized={isAuthorized} withNavigation/>
        <Redirect to={Routes.Main}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
});

export default connect(mapStateToProps)(App);
