import React, {useEffect} from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector, aoFormatsSelector, aoTypesSelector} from "../../redux/ao/aoSelectors";
import {Sel as Select} from '../common/Select/Select'
import {offerSelect} from "../../const/AOConsts";

const options = [
  {value: 'blues', label: 'Blues'},
  {value: 'rock', label: 'Rock'},
  {value: 'jazz', label: 'Jazz'},
  {value: 'orchestra', label: 'Orchestra'}
];
const roCN = cn('ro');
export const RO = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getTypes());
    dispatch(aoActions.getCities());
    dispatch(aoActions.getFormats());
  }, [dispatch]);
  const types = useSelector(aoTypesSelector).map(item => {
    return {value: item.type, label: item.type}
  });
  const cities = useSelector(aoCitySelector).map(item => {
    return {value: item.city, label: item.city}
  })
  const formats = useSelector(aoFormatsSelector).map(item => {
    return {value: item.city, label: item.format}
  })

  console.log(types);
  return (<div className={roCN('container')}>
      <h2 className={roCN('label')}>Формирование списка РО</h2>
      <form method={'post'}>
        <div className={roCN('list-container')}>
          <Select label={"Тип объекта:"} options={types}/>
          <Select label={"Город:"} options={cities}/>
          <Select label={"Статус объекта:"} options={options}/>
          <Select options={options} label={"Сегмент:"}/>
          <Select options={formats} label={"Формат размещения:"}/>
          <Select label={"Договор"} options={offerSelect}/>
        </div>
        <Link to={"/main"}>
          <button className={roCN('btn')}>Отмена</button>
        </Link>
        <button type="submit" className={roCN('btn2')}>Сформировать список</button>
      </form>
    </div>
  )

};