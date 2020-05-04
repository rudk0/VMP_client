import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './KP.scss';
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {TextInput} from "../common/TextInput/TextInput";
import {AoTable} from "../AO-table/AoTable";
import {AOApi} from "../../api/AOAPI";
import {error, notify} from "../../helpers/toaster-helper";
import {tableAOHeader} from "../../const/AOConsts";
import {Estimate} from "../Estimate/Estimate";



const kpCN = cn('kp');
export const KP = () => {
  const handleChange  =(e) => {
    console.log(e);
  }
  const [data, setData] = useState({data: [], loaded: false, selected: {}});
  useEffect(
    () => {
      if (!data.loaded) {
        AOApi.getList()
          .then((res) => {
            notify("List formed successfully");
            setData({data: res.data, loaded: true})
            ;
          }).catch((err) => {
          error("Something went wrong" + err);
        })
      }
    }, [data]
  )
  return (<div className={kpCN('container')}>
      <h2 className={kpCN('label')}>Создание КП</h2>
      <form>
        <div className={kpCN('list-container')}>
          <TextInput type="text" name="name"
                     label="Коммерческое предложение:"/>
          <TextInput type="text" name="client"
                     label="Клиент:"/>
          <TextInput type="text" name="brand"
                     label="Бренд:"/>
          <TextInput type="date" name="date_from"
                     label="Период с "/>
          <TextInput type="date" name="date_to"
                     label=" до "/>
          <TextInput type="date" name="creating_date"
                     label="Дата создания:"/>
          <TextInput type="text" name="placing_format"
                     label="Формат:"/>
          <
            AoTable data={data.data} columns={tableAOHeader()} onChange={e => handleChange(e)}/>

          <Button type="submit" variant="submit">Выбрать из списка</Button>
        </div>
        <Button type="submit" variant="submit">Добавить данные из адресной программы</Button>
        <Estimate></Estimate>
        <Link to={"/main"}>
          <Button variant="discard">Отмена</Button>
        </Link>
        <Button type="submit" variant="extra">Предварительный просмотр</Button>
        <Button type="submit" variant="extra">Экспортировать КП в Excel</Button>
      </form>
    </div>
  )

};