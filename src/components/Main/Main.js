import React, {useEffect} from "react";
import {cn} from '@bem-react/classname'
import './Main.scss';
import { Link } from 'react-router-dom';


const mainCN = cn('main');
export const Main = () =>{
    console.log(localStorage.role);
    if (localStorage.role !== 'ROLE_ADMIN'){
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
        </div></div>)
            }else
            {return(<div className={mainCN('container')}>
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
            <Link to={'/users'}>
                <button className={mainCN('btn')} >Управление пользователями</button>
            </Link>
            <Link to={'/db'}>
                <button className={mainCN('btn')} >Управление Базой данных</button>
            </Link>
        </div>
    </div>)}};

