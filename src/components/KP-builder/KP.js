import React from "react";
import {cn} from '@bem-react/classname'
import './KP.scss';
import Select from 'react-select';
import {Link} from "react-router-dom";


const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' }
];


const kpCN = cn('kp');
export const KP = () => {
    return (<div className={kpCN('container')}>
            <h2 className={kpCN('label')}>Создание коммерческого предложения</h2>
            <form method={'post'}>
                <div className={kpCN('list-container')}>
                    <label className={kpCN('label1')}>Тип объекта:
                        <Select options = {options} defaultValue={options[0]} className={kpCN('select')}/>
                    </label>
                </div>
                <Link to={"/main"}>
                    <button className={kpCN('btn')}>Отмена</button>
                </Link>
                <button type="submit" className={kpCN('btn2')}>Сформировать список</button>
            </form>
        </div>
    )

};