import React from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import Select from 'react-select';
import {Link} from "react-router-dom";
import axios from 'axios';
import {API_URL} from "../../api/baseAPI";

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' }
];


let state = {
  types: []
}
function componentDidMount() {
  axios.get(API_URL+'ao_list_types')
      .then(res => {
        const types = res.data;
        this.setState({types});
      })
}
componentDidMount();
const roCN = cn('ro');
export const RO = () => {
  return (<div className={roCN('container')}>
    <h2 className={roCN('label')}>Формирование списка РО</h2>
    <form method={'post'}>
    <div className={roCN('list-container')}>
      <p className={roCN('label1')}>Тип объекта:</p>
      <Select options = {options} defaultValue={options[0]} className={roCN('select')}/>
      <p className={roCN('label1')}>Город:</p>
      <Select options = {state.types} className={roCN('select')}/>
      <p className={roCN('label1')}>Статус объекта:</p>
      <Select options = {options} className={roCN('select')}/>
      <p className={roCN('label1')}>Сегмент:</p>
      <Select options = {options} className={roCN('select')}/>
      <p className={roCN('label1')}>Формат размещения:</p>
      <Select options = {options} className={roCN('select')}/>
      <p className={roCN('label1')}>Договор:</p>
      <Select options = {options} className={roCN('select')}/>
    </div>

    <Link to={"/main"}>
    <button className={roCN('btn')}>Отмена</button>
      </Link>
    <button type="submit" className={roCN('btn2')}>Сформировать список</button>
    </form>
  </div>
)

};