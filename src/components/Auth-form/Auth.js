import React from "react";
import {cn} from '@bem-react/classname'
import './Auth.scss';
import 'axios';
import {authActions} from "../../redux/auth/authSlice";
import {useDispatch} from "react-redux";

const authCN = cn('auth');
export  const Auth = () =>{
    const dispatch = useDispatch();
    function handleForm(e) {
        e.preventDefault();
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        dispatch(authActions.auth({login, password}));
    }
    return (<div className={authCN('container')}>
        <div className={authCN("login")}>
            <h1 className={authCN('label')}>Вход в систему VMP🌈⛹</h1>
            <form method="post" onSubmit={(e)=>handleForm(e)}>
                <input id="login" type="text" name="u" placeholder="Введите логин" required="required" className={authCN('form')}/>
                <input id="password"  type="password" name="p" placeholder="Введите пароль" required="required" className={authCN('form')}/>
                <button type="submit" className={authCN("login-btn")}>Войти</button>
            </form>
        </div>
    </div>)

};