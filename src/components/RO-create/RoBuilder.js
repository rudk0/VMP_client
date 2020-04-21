import React from "react";
import {cn} from '@bem-react/classname'
import './RoBuilder.scss';
import Select from 'react-select';
import { Link } from 'react-router-dom';
const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' }
];

const robuildCN = cn('robuild');
export const RoBuilder = () => {
    return (<div className={robuildCN('container')}>
        <h2 className={robuildCN('label')}>Создание РО</h2>
        <form method={post}>
        <div className={robuildCN('list-container')}>
            <p className={robuildCN('label1')}>Тип объекта:</p>
            <Select options = {options} className={robuildCN('select')}/>
        </div>
        <Link to={"/main"}>
        <button className={robuildCN('btn')}>Отмена</button>
            </Link>
        <button type='submit' className={robuildCN('btn2')}>Создать объект</button>
    </form>
    </div>)

};