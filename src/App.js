import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ToastContainer} from "react-toastify";
import {Redirect, Switch} from "react-router-dom";
import {NonAuthorizedRoute} from "./components/NonAuthorizedRoute";
import {AuthorizedRoute} from "./components/AuthorizedRoute";
import {Routes} from "./const/Routes";
import {Auth} from "./components/Auth-form/Auth";
import {Main} from "./components/Main/Main";
import {RO} from "./components/RO-form/RO";
import {connect} from "react-redux";
import {isAuthorizedSelector} from "./redux/auth/authSelectors";

function App(props) {
  const {isAuthorized, location} = props;
  return (
    <div className="App">
      <Header isAuthorized={isAuthorized}/>
      <ToastContainer/>
      <Switch location={location}>
        <NonAuthorizedRoute exact={true} path={'/login'} component={Auth} isAuthorized={isAuthorized}/>
        <AuthorizedRoute path={Routes.Ro} component={RO} isAuthorized={isAuthorized} withNavigation/>
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
