import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './RO.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector, aoFormatsSelector, aoSegmentSelector, aoTypesSelector} from "../../redux/ao/aoSelectors";
import {Sel as Select} from '../common/Select/Select'
import {offerSelect, reservedSelect, RoInitialState, tableAOHeader} from "../../const/AOConsts";
import {Button} from "../common/Button/Button";
import {error, notify} from "../../helpers/toaster-helper";
import {AOApi} from "../../api/AOAPI";
import {AoTable} from "../AO-table/AoTable";

const roCN = cn('ro');
export const RO = () => {
  const [roState, setRoState] = useState({filters: RoInitialState, data: [], requested: false});
  const handleRoForm = (e) => {
    e.preventDefault();
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

  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    if (target && typeof target.value === "boolean") {
      value = target.value
    }
    setRoState({
        ...roState,
        filters: {
          [name]: value
        }
      }
    );
  }

  return (<><div className={roCN('container')}>
      <h2 className={roCN('label')}>Формирование списка РО</h2>
      <form onSubmit={(e) => {
        handleRoForm(e);
      }}>
        <div className={roCN('list-container')}>
          <Select onChange={(e) => handleInputChange(e)} label={"Тип объекта:"} name="mi_type_id" options={types}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Город:"} name="city_id" options={cities}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Статус объекта:"} name="reservation_status"
                  options={reservedSelect}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Сегмент:"} name="segment_id" options={segments}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Формат размещения:"} name="placing_format_id"
                  options={formats}/>
          <Select onChange={(e) => handleInputChange(e)} label={"Договор"} name="contract" options={offerSelect}/>
        </div>
        <Link to={"/main"}>
          <Button variant="discard">Отмена</Button>
        </Link>
        <Button type="submit" variant="submit">Сформировать список</Button>
      </form>

    </div>
  {roState.requested && <AoTable columns={tableAOHeader()} data={roState.data}></AoTable>}
    </>

  )
};