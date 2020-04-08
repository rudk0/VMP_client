import React from "react";
import {cn} from '@bem-react/classname'
import './Header.scss';
import {Link} from "react-router-dom";

const headerCN = cn('header');
export  const Header = props =>{
    return (<div className={headerCN('container')}>
<h1 className={headerCN('label')}>Vita Media Planer</h1>
        {/*<p className={headerCN('login')}>Логин: Агата_Рудько</p>*/}
        {/*<button className={headerCN('btn')}>Выйти</button>*/}
    </div>)

};