import React from "react";
import {cn} from '@bem-react/classname'
import './Main.scss';
import { Link } from 'react-router-dom';

const mainCN = cn('main');
export  const Main = () =>{
    return (<div className={mainCN('container')}>
        <h2 className={mainCN('label')}>Главная страница</h2>
        <div className={mainCN('btn-container')}>
            <Link to={"/ro"}>
        <button className={mainCN('btn')}>Сформировать список РО</button>
            </Link>
            <Link to={"/kpbuilder"}>
        <button className={mainCN('btn')}>Создать коммерческое предложение</button>
            </Link>
            <Link to={"/robuilder"}>
        <button className={mainCN('btn')} >Создать рекламный объект</button>
            </Link>
        </div>
    </div>)

};