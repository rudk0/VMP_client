import React, {useEffect, useState} from "react";
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
import {Button} from "../common/Button/Button";
import {AOApi} from "../../api/AOAPI";

const robuildCN = cn('robuild');
export const RoBuilder = props => {
  const [roState, setRoState] = useState(ROBuilderInitialState);
  console.log(props.isEdit);
  const id = props.match.params && props.match.params.id

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
  useEffect(() => {
    if (props.isEdit) {
      ROApi.getRo(id)
        .then((res) => {
          const kek = res.data;
          setRoState({...kek})
        })
    }
  }, [id])
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
    let name = (target && target.name) || event.name;
    if (target && typeof target.value === "boolean") {
      value = target.value
    }
    if (target && target.files) {
      value = target.files[0]
      name = "photo"

    }
    setRoState({
      ...roState,
      [name]: value
    });
  }
  console.log(roState)
  return (roState.city_id>0 && <div className={robuildCN('container')}>
    <h2 className={robuildCN('label')}>Создание РО</h2>
    <form onSubmit={(e) => {
      handleRoForm(e);
    }}>
      <div className={robuildCN('list-container')}>
        <div className={robuildCN("line")}>
          <Select onChange={(e) => handleInputChange(e)} label={"Город:"} name="city_id" value={roState.city_id}
                  options={cities}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Тип объекта:"} name="mi_type_id"
                  value={roState.mi_type_id} options={types}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Социальная значимость:"} name="mi_id"
                  value={roState.mi_id}
                  options={significance}/>
        </div>
        <div className={robuildCN("line")}>
          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="name" value={roState.name}
                     label="Название объекта:" required={true}/>
          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="address" value={roState.address}
                     label="Адрес объекта:" required={true}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Этаж:"} name="floor" value={roState.floor}
                  options={floorSelect}/>
        </div>
        <div className={robuildCN("line")}>

          <Select onChange={(e) => handleInputChange(e)} label={"Соседи:"} value={roState.neighbors} name="neighbors"
                  options={neighborsSelect}/>

          <Select onChange={(e) => handleInputChange(e)} label={"Формат размещения:"} value={roState.placing_format_id}
                  name="placing_format_id"
                  options={formats}/>

          <Select onChange={(e) => handleInputChange(e)} label={"Возможность размещения:"}
                  value={roState.possibility_of_placement}
                  name="possibility_of_placement"
                  options={possibilitySelect}/>
        </div>
        <div className={robuildCN("line")}>

          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="place_description" label="Описание места:"
                     value={roState.place_description} required={true}/>
          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="specialist_description"
                     label="Описание специалистов:"
                     value={roState.specialist_description} required={true}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Сегмент:"} name="segment_id" options={segments}
                  value={roState.segment_id}/>
        </div>
        <div className={robuildCN("line")}>

          <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 1:"} name="subsegment1_id"
                  options={segments} value={roState.subsegment1_id}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 2:"} name="subsegment2_id"
                  options={segments} value={roState.subsegment2_id}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Подсегмент 3:"} name="subsegment3_id"
                  options={segments} value={roState.subsegment3_id}/>
        </div>
        <div className={robuildCN("line")}>

          <Select onChange={(e) => handleInputChange(e)} label={"Наличие кармана (кол-во):"} name="pockets"
                  options={pocketSelect} value={roState.pockets}/>
          <TextInput onChange={(e) => handleInputChange(e)} type="number" name="price" label="Закупочная цена (рубли):"
                     value={roState.price} required={true}/>
          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="contract" label="Договор:"
                     value={roState.contract} required={true}/>
        </div>
        <div className={robuildCN("line")}>

          <label className={robuildCN('label1')}>Комментарии:
            <textarea onChange={(e) => handleInputChange(e)} name="comments" value={roState.comments}/>
          </label>
          <label className={robuildCN('label1')}>Забронировать РО:
            <input onChange={(e) => handleInputChange(e)} type="checkbox" name="reservation_status"
                   value={roState.reservation_status}/>
          </label>
          <TextInput type="date" onChange={(e) => handleInputChange(e)} name="date_from" value={roState.date_from}
                     label="с"/>
          <TextInput type="date" onChange={(e) => handleInputChange(e)} name="date_to" value={roState.date_to}
                     label="по"/>
          <TextInput onChange={(e) => handleInputChange(e)} type="text" name="client" label="Клиент:" required={true}/>
        </div>
        <div className={robuildCN('line')}>
          <input onChange={e => handleInputChange(e)} type="file" name="file" id="file"
                 className={robuildCN("inputfile")}/>
          <label htmlFor="file">Choose a file</label>
        </div>
      </div>

      <Link to={"/main"}>
        <Button variant="discard">Отмена</Button>
      </Link>
      <Button type="submit" variant="submit">Создать объект</Button>
    </form>
  </div>)

};