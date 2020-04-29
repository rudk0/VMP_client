import React from "react";
import {cn} from '@bem-react/classname'
import './KP.scss';
import {Sel as Select} from "../common/Select/Select";
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";


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
                  <Select label={"Тип объекта:"} name="mi_type_id" options={options} />
              </div>
              <Link to={"/main"}>
                  <Button variant="discard">Отмена</Button>
              </Link>
              <Button type="submit" variant="submit">Сформировать список</Button>
          </form>
      </div>
    )

};