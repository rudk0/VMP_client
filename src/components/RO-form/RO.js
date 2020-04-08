import React from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';

const roCN = cn('ro');
export  const RO = () =>{
    return (<div className={roCN('container')}>
        <h2 className={roCN('label')}>Формирование списка РО</h2>
        <div className={roCN('list-container')}>
            <p className={roCN('label1')}>Тип объекта:</p>
            <select className={roCN('select')}>
                <option selected value="all">Все объекты</option>
            </select>
            <p className={roCN('label1')}>Город:</p>
            <select className={roCN('select')}>
                <option selected value="all">Все города</option>
            </select>
            <p className={roCN('label1')}>Статус объекта:</p>
            <select className={roCN('select')}>
                <option selected value="all">Все объекты</option>
            </select>
            <p className={roCN('label1')}>Сегмент:</p>
            <select className={roCN('select')}>
                <option selected value="lor">ЛОР</option>
            </select>
            <p className={roCN('label1')}>Формат размещения:</p>
            <select className={roCN('select')}>
                <option selected value="b1">В1</option>
            </select>
            <p className={roCN('label1')}>Договор:</p>
            <select className={roCN('select')}>
                <option selected value="yes">Да</option>
            </select>
        </div>
        <button className={roCN('btn')}>Отмена</button>
        <button className={roCN('btn2')}>Сформировать список</button>
    </div>)

};