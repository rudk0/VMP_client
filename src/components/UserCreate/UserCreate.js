import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './UserCreate.scss';
import {Sel as Select} from "../common/Select/Select";
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {TextInput} from "../common/TextInput/TextInput";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector} from "../../redux/ao/aoSelectors";

const userEditCN = cn('user-edit');

export const UserCreate = () => {

  const options = [
    { value: 'ROLE_ADMIN', label: 'Администратор' },
    { value: 'ROLE_USER', label: 'Пользователь' }
  ]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getCities());
  }, [dispatch]);
  const cities = useSelector(aoCitySelector).map(item => {
    return {value: item.id, label: item.city}
  })
function handleForm() {

}
  return (<div className={userEditCN('container')}>
      <h2 className={userEditCN('label')}>Создание пользователя</h2>
      <form onSubmit={(e) => {
        handleForm(e);
      }}>
        <div className={userEditCN('list-container')}>
          <div className={userEditCN('line')}>

              <TextInput type="text" name="name"
                         label="Имя:" required={true}/>
              <TextInput type="text" name="surname"
                         label="Фамилия:" required={true}/>
            <TextInput type="text" name="address"
                       label="Отчество:" required={true}/>
              <TextInput type="text" name="address"
                         label="Логин:" required={true}/>
              <Select label={"Город:"}
                      options={cities} className={userEditCN('select')}/>
            <TextInput type="password" name="address"
                       label="Пароль:" required={true}/>
            <Select label={"Роль:"}
                    options={options} className={userEditCN('select')}/>
          </div>
        </div>
        <Link to={"/users"}>
          <Button variant="discard">Отмена</Button>
        </Link>
        <Button type="submit" variant="submit">Сохранить пользователя</Button>
      </form>
    </div>
  )
};
