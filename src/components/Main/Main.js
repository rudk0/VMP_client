import React from "react";
import {cn} from '@bem-react/classname'
import './Main.scss';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";

const mainCN = cn('main');
export  const Main = () =>{
    const dispatch = useDispatch();
    return (<div className={mainCN('container')}>
        <h2 className={mainCN('label')}>Главная страница</h2>
        <div className={mainCN('btn-container')}>
            <Link to={"/ro"}>
        <button className={mainCN('btn')}>Сформировать список РО</button>
            </Link>
        <button className={mainCN('btn')}>Создать коммерческое предложение</button>
        <button className={mainCN('btn')} >Создать рекламный объект</button>
        </div>
    </div>)

};