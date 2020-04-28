import React, {isValidElement, useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './RoBuilder.scss';
import {Link} from 'react-router-dom';
import {Sel as Select} from '../common/Select/Select'
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {notify, error} from '../../helpers/toaster-helper'
import {
  aoCitySelector,
  aoFormatsSelector,
  aoSegmentSelector,
  aoSignificanceSelector,
  aoTypesSelector
} from "../../redux/ao/aoSelectors";
import {
  floorSelect,
  neighborsSelect,
  pocketSelect,
  possibilitySelect,
  ROBuilderInitialState
} from "../../const/AOConsts";
import {TextInput} from "../common/TextInput/TextInput";
import {ROApi} from "../../api/ROAPI";

const robuildCN = cn('robuild');
export const RoBuilder = () => {
  const [roState, setRoState] = useState(ROBuilderInitialState);

  const handleRoForm = (e) => {
    e.preventDefault();
    ROApi.postRo(roState)
      .then((data) => {
        notify("Object created successfully");
        setRoState(ROBuilderInitialState);
      }).catch((err) => {
      error("Something went wrong" + err);
    })
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getSegments())
    dispatch(aoActions.getTypes());
    dispatch(aoActions.getCities());
    dispatch(aoActions.getFormats());
    dispatch(aoActions.getSignificance());
  }, [dispatch]);
  const types = useSelector(aoTypesSelector).map(item => {
    return {value: item.id, label: item.type}
  });
  const cities = useSelector(aoCitySelector).map(item => {
    return {value: item.id, label: item.city}
  })
  const formats = useSelector(aoFormatsSelector).map(item => {
    return {value: item.id, label: item.format}
  })
  const segments = useSelector(aoSegmentSelector).map(item => {
    return {value: item.id, label: item.segment}
  })
  const significance = useSelector(aoSignificanceSelector).map(item => {
    return {value: item.id, label: item.significance}
  })
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    if (target && typeof target.value === "boolean") {
      value = target.value
    }
    setRoState({
      ...roState,
      [name]: value
    });
  }
  return (<div className={robuildCN('container')}>
    <h2 className={robuildCN('label')}>Создание РО</h2>
    <form onSubmit={(e) => {
      handleRoForm(e);
    }}>
      <div className={robuildCN('list-container')}>
        <Select onChange={(e) => handleInputChange(e)} label={"Город:"} name="city_id" value={roState.city_id}
                options={cities}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Тип объекта:"} name="mi_type_id"
                value={roState.mi_type_id} options={types}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Социальная значимость:"} name="mi_id"
                value={roState.mi_id}
                options={significance}/>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="name" value={roState.name}
                   label="Название объекта:"/>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="address" value={roState.address}
                   label="Адрес объекта:"/>
        <Select onChange={(e) => handleInputChange(e)} label={"Этаж:"} name="floor" value={roState.floor}
                options={floorSelect}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Формат размещения:"} value={roState.placing_format_id}
                name="placing_format_id"
                options={formats}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Соседи:"} value={roState.neighbors} name="neighbors"
                options={neighborsSelect}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Возможность размещения:"}
                value={roState.possibility_of_placement}
                name="possibility_of_placement"
                options={possibilitySelect}/>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="place_description" label="Описанние места:"
                   value={roState.place_description}/>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="specialist_description"
                   label="Описание специалистов:"
                   value={roState.specialist_description}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Сегмент:"} name="segment_id" options={segments}
                value={roState.segment_id}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 1:"} name="subsegment1_id"
                options={segments} value={roState.subsegment1_id}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 2:"} name="subsegment2_id"
                options={segments} value={roState.subsegment2_id}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 3:"} name="subsegment3_id"
                options={segments} value={roState.subsegment3_id}/>
        <Select onChange={(e) => handleInputChange(e)} label={"Наличие кармана (кол-во):"} name="pockets"
                options={pocketSelect} value={roState.pockets}/>
        <TextInput onChange={(e) => handleInputChange(e)} type="number" name="price" label="Закупочная цена (рубли):"
                   value={roState.price}/>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="contract" label="Договор:"
                   value={roState.contract}/>
        <label className={robuildCN('label1')}>Комментарии:
          <textarea onChange={(e) => handleInputChange(e)} name="comments" value={roState.comments}/>
        </label>
        <label className={robuildCN('label1')}>Забронировать РО:
          <input onChange={(e) => handleInputChange(e)} type="checkbox" name="reservation_status"
                 value={roState.reservation_status}/>
        </label>
        <label className={robuildCN('label1')}>с
          <input onChange={(e) => handleInputChange(e)} type="date" name="date_from" value={roState.date_from}/>
        </label>
        <label className={robuildCN('label1')}>по
          <input onChange={(e) => handleInputChange(e)} type="date" name="date_to" value={roState.date_to}/>
        </label>
        <TextInput onChange={(e) => handleInputChange(e)} type="text" name="client" label="Клиент:"/>
      </div>
      <Link to={"/main"}>
        <button className={robuildCN('btn')}>Отмена</button>
      </Link>
      <button type='submit' className={robuildCN('btn2')}>Создать объект</button>
    </form>
  </div>)

};