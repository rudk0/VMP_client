import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector, aoFormatsSelector, aoSegmentSelector, aoTypesSelector} from "../../redux/ao/aoSelectors";
import {Sel as Select} from '../common/Select/Select'
import {
  floorSelect,
  offerSelect,
  pocketSelect,
  reservedSelect,
  RoInitialState,
  tableAOHeader
} from "../../const/AOConsts";
import {Button} from "../common/Button/Button";
import {error, notify} from "../../helpers/toaster-helper";
import {AOApi} from "../../api/AOAPI";
import {AoTable} from "../AO-table/AoTable";

const roCN = cn('ro');
export const RO = props => {
  const [roState, setRoState] = useState({filters: RoInitialState, data: [], requested: false});
  const {changeState, isKp} = props;
  const handleRoForm = (e) => {
    e && e.preventDefault();
    AOApi.getList(roState.filters)
      .then((data) => {
        notify("List formed successfully");
        setRoState({
          ...roState,
          data: data.data, requested: true
        });
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

  }, [dispatch]);
  useEffect(()=>{
    window.scrollTo(0,document.body.scrollHeight);
  }, [roState.data]);
  const types =[{value: '', label: 'Все'}, ... useSelector(aoTypesSelector).map(item => {
    return {value: item.id, label: item.type}
  })];
  const cities = [{value: '', label: 'Все'}, ...useSelector(aoCitySelector).map(item => {
    return {value: item.id, label: item.city}
  })]
  const formats =[ {value: '', label: 'Все'}, ... useSelector(aoFormatsSelector).map(item => {
    return {value: item.id, label: item.format}
  })]
  const segments =[ {value: '', label: 'Все'}, ...useSelector(aoSegmentSelector).map(item => {
    return {value: item.id, label: item.segment}
  })]
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    if (target && typeof target.value === "boolean") {
      value = target.value
    }
    let filters = {
      ...roState.filters,
      [name]: value
    }
    if (value===''){
      delete filters[name];
    }
    setRoState({
        ...roState,
        filters
      }
    );
  }

  return (<>
      <form onSubmit={(e) => {
        handleRoForm(e);
      }}>
        <div className={roCN('list-container')}>
          <div className={roCN('line')}>
          <Select onChange={(e) => handleInputChange(e)} label={"Тип объекта:"} name="mi_type_id" options={types} value={types[0]}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Город:"} name="city_id" options={cities} value={cities[0]}/>
          </div>
          <div className={roCN('line')}>
          <Select onChange={(e) => handleInputChange(e)} label={"Статус объекта:"} name="reservation_status" value={reservedSelect[0]}
                  options={reservedSelect}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Сегмент:"} name="segment_id" options={segments} value={segments[0]}/>
          </div>
          <div className={roCN('line')}>
          <Select onChange={(e) => handleInputChange(e)} label={"Формат размещения:"} name="format_id" value={formats[0]}
                  options={formats}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Договор:"} name="contract" options={offerSelect} value={offerSelect[0]}/>
          </div>
          <div className={roCN('line')}>
            <Select onChange={(e) => handleInputChange(e)} label={"Этаж:"} name="floor" value={floorSelect[0]}
                    options={floorSelect}/>
            <Select onChange={(e) => handleInputChange(e)} label={"Наличие карманов:"} name="pockets" value={pocketSelect[0]}
                    options={pocketSelect}/>
          </div>
        </div>
        <Link to={"/main"}>
          {!isKp && <Button variant="discard">Отмена</Button>}
        </Link>
        <Button type="submit" variant="submit">Сформировать список</Button>
      </form>
      {roState.requested && <AoTable columns={tableAOHeader(handleRoForm)} data={roState.data} checkbox={isKp} changeState={typeof changeState === "function" && (e => changeState(e))}></AoTable>}

    </>

  )
};