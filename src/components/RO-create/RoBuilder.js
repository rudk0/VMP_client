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
        <form method={'post'}>
        <div className={robuildCN('list-container')}>
            <label className={robuildCN('label1')}>Город:
            <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Тип объекта:
            <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Название объекта:
                <input type="text" name="name" />
            </label>
            <label className={robuildCN('label1')}>Адрес объекта:
                <input type="text" name="address" />
            </label>
            <label className={robuildCN('label1')}>Этаж:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Формат размещения:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Описанние места:
                <input type="text" name="name" />
            </label>
            <label className={robuildCN('label1')}>Описание специалистов:
                <input type="text" name="address" />
            </label>
            <label className={robuildCN('label1')}>Сегмент:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Подсегмент 1:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Подсегмент 2:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Подсегмент 3:
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Наличие кармана (кол-во):
                <Select options = {options} className={robuildCN('select')}/>
            </label>
            <label className={robuildCN('label1')}>Закупочная цена (рубли):
                <input type="text" name="cost" />
            </label>
            <label className={robuildCN('label1')}>Договор:
                <input type="text" name="agreement" />
            </label>
            <label className={robuildCN('label1')}>Комментарии:
                <textarea name="comment" />
            </label>
            <label className={robuildCN('label1')}>Забронировать РО:
                <input type="checkbox" name="booked" />
            </label>
            <label className={robuildCN('label1')}>с
                <input type="date" name="startdate" />
            </label>
            <label className={robuildCN('label1')}>по
                <input type="date" name="enddate" />
            </label>
            <label className={robuildCN('label1')}>Клиент:
                <input type="text" name="client" />
            </label>
        </div>
        <Link to={"/main"}>
        <button className={robuildCN('btn')}>Отмена</button>
            </Link>
        <button type='submit' className={robuildCN('btn2')}>Создать объект</button>
    </form>
    </div>)

};