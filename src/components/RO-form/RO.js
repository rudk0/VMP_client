import React, {useEffect} from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector, aoFormatsSelector, aoSegmentSelector, aoTypesSelector} from "../../redux/ao/aoSelectors";
import {Sel as Select} from '../common/Select/Select'
import {offerSelect, reservedSelect} from "../../const/AOConsts";
import {Button} from "../common/Button/Button";

const roCN = cn('ro');
export const RO = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getSegments())
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
    return {value: item.format, label: item.format}
  })
  const segments = useSelector(aoSegmentSelector).map(item => {
    return {value: item.segment, label: item.segment}
  })

  return (<div className={roCN('container')}>
      <h2 className={roCN('label')}>Формирование списка РО</h2>
      <form>
        <div className={roCN('list-container')}>
          <Select label={"Тип объекта:"} options={types}/>
          <Select label={"Город:"} options={cities}/>
          <Select label={"Статус объекта:"} options={reservedSelect}/>
          <Select label={"Сегмент:"} options={segments}/>
          <Select label={"Формат размещения:"} options={formats}/>
          <Select label={"Договор"} options={offerSelect}/>
        </div>
        <Link to={"/main"}>
          <Button variant="discard">Отмена</Button>
        </Link>
        <Button type="submit" variant="submit">Сформировать список</Button>
      </form>
    </div>
  )
};