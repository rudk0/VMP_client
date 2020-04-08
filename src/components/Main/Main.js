import React from "react";
import {cn} from '@bem-react/classname'
import './Main.scss';

const mainCN = cn('main');
export  const Main = () =>{
    return (<div className={mainCN('container')}>
        <h2 className={mainCN('label')}>Главная страница</h2>
        <div className={mainCN('btn-container')}>
        <button className={mainCN('btn')}>Сформировать список РО</button>
        <button className={mainCN('btn')}>Создать коммерческое предложение</button>
        <button className={mainCN('btn')}>Создать рекламный объект</button>
        </div>
    </div>)

};