import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './KP.scss';
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {TextInput} from "../common/TextInput/TextInput";
import {AoTable} from "../AO-table/AoTable";
import {AOApi} from "../../api/AOAPI";
import {error, notify} from "../../helpers/toaster-helper";

import {KPApi} from "../../api/KPAPI";
import {EstimateTableHeader} from "../../const/EstimateConsts";
import {KpCountMap, KpFormMap} from "../../helpers/kpHelper";
import {RO} from "../RO-form/RO";


const kpCN = cn('kp');
export const KP = () => {

  const [data, setData] = useState({selected: [], data: [], loaded: false, estimate: []});
  const setDataInEstimate = (value, field, index) => {
    let estimate = data.estimate[index];
    estimate[field] = value;
    const estimates = data.estimate;
    estimates[index] = estimate;

  }
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setData({
      ...data,
      [name]: value
    });
  }
  const changeState = (e) => {
    if (e.isSelected) {
      setData(
        state => {
          return {
            ...data,
            selected: state.selected.filter(item => item !== e.original.id)
          }
        }
      )
    } else {
      setData(state => {
        return {
          ...data,
          selected: [...state.selected, e.original.id]
        }
      });
    }
  }
  useEffect(
    () => {
      if (!data.loaded) {
        AOApi.getList()
          .then((res) => {
            notify("List formed successfully");
            setData(state => {
              return {
                ...data,
                data: res.data,
                loaded: true
              }
            })
            ;
          }).catch((err) => {
          error("Something went wrong" + err);
        })
      }
    }, [data, data.selected]
  )
  return (<div className={kpCN('container')}>
      <h2 className={kpCN('label')}>Создание КП</h2>
      <div className={kpCN('list-container')}>
        <div className={kpCN('line1')}>
          <TextInput onChange={e => handleInputChange(e)} type="text" name="name"
                     label="Коммерческое предложение:"/>
          <TextInput onChange={e => handleInputChange(e)} type="text" name="client"
                     label="Клиент:"/>
          <TextInput onChange={e => handleInputChange(e)} type="text" name="brand"
                     label="Бренд:"/>
        </div>
        <div className={kpCN('line1')}>
          <TextInput onChange={e => handleInputChange(e)} type="date" name="date_from"
                     label="Период с "/>
          <TextInput onChange={e => handleInputChange(e)} type="date" name="date_to"
                     label=" до "/>
          <TextInput onChange={e => handleInputChange(e)} type="date" name="creating_date"
                     label="Дата создания:"/>
        </div>
        <div className={kpCN('line1')}>
          <TextInput onChange={e => handleInputChange(e)} type="text" name="placing_format"
                     label="Формат:"/>
          <TextInput onChange={e => handleInputChange(e)} type="text" name="b1_price"
                     label="B1 Price"/>
        </div>
        <div className={kpCN('line')}>
          <RO changeState={changeState} isKp={true}/>
        </div>
        {data.selected.length > 0 &&
        <Button type="submit" variant="submit" onClick={e => KPApi.formEstimate(data.selected).then((response) => {
          setData(state => {
            return {
              ...data,
              estimate: response.data
            }
          })
        })}>Выбрать из списка</Button>}
      </div>
      <AoTable columns={EstimateTableHeader(setDataInEstimate)} data={data.estimate}/>
      {data.placement_fin && (<div className={kpCN('values')}> Итого, размещение: {data.placement_fin}</div>)}
      {data.placement_fin && (<div className={kpCN('values')}> Производство плакатов B1: {data.b1_price}</div>)}
      {data.price_fin && (<div className={kpCN('values')}>  Общий бюджет размещение + производство, без НДС:  {data.price_fin}</div>)}
      {data.price_vat_fin && (<div className={kpCN('values')}> Общий бюджет размещение + производство, с учётом НДС: {data.price_vat_fin}</div>)}
      <Link to={"/main"}>
        <Button variant="discard">Отмена</Button>
      </Link>
      <Button type="submit" variant="extra" onClick={e => {
        KPApi.preview(KpCountMap(data.estimate), data.b1_price).then((response) => {
          const estimate = response.data.estimateResponses
          delete response.data.estimateResponses;
          setData({
            ...data,
            ...response.data,
            estimate: estimate
          })
        })
      }}>Предварительный
        просмотр</Button>
      <Button type="submit" variant="extra" onClick={e => {
        KPApi.formKp(KpFormMap(data)).then((res) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(new Blob([res.data]));
          link.download = `${data.name}.xls`;
          link.click();
        });
      }}>Экспортировать КП в Excel</Button>
    </div>
  )

};