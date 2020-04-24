import React, {useEffect} from "react";
import {cn} from '@bem-react/classname'
import './RoBuilder.scss';
import { Link } from 'react-router-dom';
import {Sel as Select} from '../common/Select/Select'
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {
    aoCitySelector,
    aoFormatsSelector,
    aoSegmentSelector,
    aoSignificanceSelector,
    aoTypesSelector
} from "../../redux/ao/aoSelectors";
import {floorSelect, neighborsSelect, pocketSelect, possibilitySelect} from "../../const/AOConsts";

const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' }
];

const robuildCN = cn('robuild');
export const RoBuilder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(aoActions.getSegments())
        dispatch(aoActions.getTypes());
        dispatch(aoActions.getCities());
        dispatch(aoActions.getFormats());
        dispatch(aoActions.getSignificance());
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
    const significance = useSelector(aoSignificanceSelector).map(item => {
        return {value: item.significance, label: item.significance}
    })
    return (<div className={robuildCN('container')}>
        <h2 className={robuildCN('label')}>Создание РО</h2>
        <form method={'post'}>
        <div className={robuildCN('list-container')}>
            <Select label={"Город:"} options = {cities} />
            <Select label={"Тип объекта:"} options = {types} />
            <Select label={"Социальная значимость:"} options = {significance} />
            <label className={robuildCN('label1')}>Название объекта:
                <input type="text" name="name" />
            </label>
            <label className={robuildCN('label1')}>Адрес объекта:
                <input type="text" name="address" />
            </label>
            <Select label={"Этаж:"} options = {floorSelect} />
            <Select label={"Формат размещения:"} options = {formats} />
            <Select label={"Соседи:"} options = {neighborsSelect} />
            <Select label={"Возможность размещения:"} options = {possibilitySelect} />
            <label className={robuildCN('label1')}>Описанние места:
                <input type="text" name="placeDescription" />
            </label>
            <label className={robuildCN('label1')}>Описание специалистов:
                <input type="text" name="specialistDescription" />
            </label>
            <Select label={"Сегмент:"} options = {segments} />
            <Select label={"Подсегмент 1:"} options = {segments} />
            <Select label={"Подсегмент 2:"} options = {segments} />
            <Select label={"Подсегмент 3:"} options = {segments} />
            <Select label={"Наличие кармана (кол-во):"} options = {pocketSelect} />
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