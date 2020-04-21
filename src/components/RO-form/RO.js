import React from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import Select from 'react-select';
import {Link} from "react-router-dom";
import {listsApi} from "../../api/getlists";


const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' }
];


const roCN = cn('ro');
export const RO = () => {
  return (<div className={roCN('container')}>
    <h2 className={roCN('label')}>Формирование списка РО</h2>
    <form method={'post'}>
    <div className={roCN('list-container')}>
      <label className={roCN('label1')}>Тип объекта:
      <Select options = {options} defaultValue={options[0]} className={roCN('select')}/>
      </label>
      <label className={roCN('label1')}>Город:
      <Select options = {listsApi.getTypes(localStorage.getItem('authToken')).types} className={roCN('select')}/>
      </label>
      <label className={roCN('label1')}>Статус объекта:
      <Select options = {options} className={roCN('select')}/>
      </label>
      <label className={roCN('label1')}>Сегмент:
      <Select options = {options} className={roCN('select')}/>
      </label>
      <label className={roCN('label1')}>Формат размещения:
      <Select options = {options} className={roCN('select')}/>
      </label>
      <label className={roCN('label1')}>Договор:
      <Select options = {options} className={roCN('select')}/>
      </label>
    </div>

    <Link to={"/main"}>
    <button className={roCN('btn')}>Отмена</button>
      </Link>
    <button type="submit" className={roCN('btn2')}>Сформировать список</button>
    </form>
  </div>
)

};