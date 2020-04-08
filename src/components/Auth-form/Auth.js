import React from "react";
import {cn} from '@bem-react/classname'
import './Auth.scss';


const authCN = cn('auth');
export  const Auth = () =>{
    return (<div className={authCN('container')}>
        <div className={authCN("login")}>
            <h1 className={authCN('label')}>Вход в систему VMP</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Введите логин" required="required" className={authCN('form')}/>
                <input type="password" name="p" placeholder="Введите пароль" required="required" className={authCN('form')}/>
                <button type="submit" className={authCN("login-btn")}>Войти</button>
            </form>
        </div>
    </div>)

};