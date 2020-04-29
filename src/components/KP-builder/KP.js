import React from "react";
import {cn} from '@bem-react/classname'
import './KP.scss';
import {Sel as Select} from "../common/Select/Select";
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {TextInput} from "../common/TextInput/TextInput";


const options = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' }
];


const kpCN = cn('kp');
export const KP = () => {
    return (<div className={kpCN('container')}>
          <h2 className={kpCN('label')}>Создание КП</h2>
          <form >
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
                <Button type="submit" variant="submit">Выбрать из списка</Button>
              </div>
            <Button type="submit" variant="submit">Добавить данные из адресной программы</Button>
              <Link to={"/main"}>
                  <Button variant="discard">Отмена</Button>
              </Link>
              <Button type="submit" variant="extra">Предварительный просмотр</Button>
              <Button type="submit" variant="extra">Экспортировать КП в Excel</Button>
          </form>
      </div>
    )

};