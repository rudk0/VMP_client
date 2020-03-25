import React from "react";
import {cn} from '@bem-react/classname'
import './Auth.scss';


const authCN = cn('auth');
export  const Auth = () =>{
    return (<div className={authCN('container')}>
        <h1 className={authCN('label')}>Авторизация</h1>
        <label htmlFor="uname" className={authCN('form-label')}><b>Логин</b></label>
        <input type="text" name="login" placeholder="Введите логин" className={authCN('form')}></input>
        <label htmlFor="password"className={authCN('form-label')}><b>Пароль</b></label>
        <input type="password" name="password" placeholder="Введите пароль" className={authCN('form')}></input>
        <button type="submit" className={authCN('login-btn')}>Войти</button>
    </div>)

};