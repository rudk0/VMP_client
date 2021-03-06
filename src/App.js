import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Redirect, Switch} from "react-router-dom";
import {NonAuthorizedRoute} from "./components/NonAuthorizedRoute";
import {AuthorizedRoute} from "./components/AuthorizedRoute";
import {Routes} from "./const/Routes";
import {Auth} from "./components/Auth-form/Auth";
import {Main} from "./components/Main/Main";
import {connect} from "react-redux";
import {isAuthorizedSelector} from "./redux/auth/authSelectors";
import {RoBuilder} from "./components/RO-create/RoBuilder";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {KP} from "./components/KP-builder/KP";
import {UserController} from "./components/UserController/UserController";
import {DbEdit} from "./components/DbEdit/DbEdit";
import {PasswordEdit} from "./components/ProfileEdit/PasswordEdit";
import {UserCreate} from "./components/UserCreate/UserCreate";
import {UserEdit} from "./components/UserEdit/UserEdit";
import {RoPage} from "./components/RO-form/RoPage";

function App(props) {
  const {isAuthorized, location} = props;
  toast.configure();
  return (
    <div className="App">
      <Header isAuthorized={isAuthorized}/>
      <Switch location={location}>
        <NonAuthorizedRoute exact={true} path={'/login'} component={Auth} isAuthorized={isAuthorized}/>
        <AuthorizedRoute path={Routes.Ro} component={RoPage} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.RoBuilder} component={RoBuilder} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.KpBuilder} component={KP} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.Users} component={UserController} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.Main} component={Main} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.db} component={DbEdit} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.ProfileEdit} component={PasswordEdit} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.UserCreate} component={UserCreate} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.UserEdit} component={UserEdit} isAuthorized={isAuthorized} withNavigation/>
        <AuthorizedRoute path={Routes.ROEdit} component={RoBuilder} isEdit={true} isAuthorized={isAuthorized} withNavigation/>

        <Redirect to={Routes.Main}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
});

export default connect(mapStateToProps)(App);
