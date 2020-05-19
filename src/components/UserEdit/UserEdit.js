import React, {useEffect, useState} from "react";
import {cn} from '@bem-react/classname'
import './UserEdit.scss';
import {Sel as Select} from "../common/Select/Select";
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {TextInput} from "../common/TextInput/TextInput";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";
import {aoCitySelector} from "../../redux/ao/aoSelectors";
import {userInitialState} from "../../const/UsersConst";
import {error, notify} from "../../helpers/toaster-helper";
import {UsersApi} from "../../api/UserAPI";

const userEditCN = cn('user-edit');

export const UserEdit = () => {
  const [userState, setUserState] = useState(userInitialState);
  const options = [
    { value: 'admin', label: 'Администратор' },
    { value: 'ROLE_USER', label: 'Пользователь' }
  ]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getCities());
  }, [dispatch]);
  const cities = useSelector(aoCitySelector).map(item => {
    return {value: item.id, label: item.city}
  })
  const handleForm = (e) => {
    e.preventDefault();
    UsersApi.createUser(userState)
      .then((data) => {
        notify("Object created successfully");
        setUserState(userInitialState);
      }).catch((err) => {
      error("Something went wrong" + err);
    })
  }
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    if (target && typeof target.value === "boolean") {
      value = target.value
    }
    setUserState({
      ...userState,
      [name]: value
    });
  }
  return (<div className={userEditCN('container')}>
      <h2 className={userEditCN('label')}>Изменение пользователя</h2>
      <form onSubmit={(e) => {
        handleForm(e);
      }}>
        <div className={userEditCN('list-container')}>
          <div className={userEditCN('line')}>

            <TextInput onChange={(e) => handleInputChange(e)} type="text" name="firstName"
                       label="Имя:" required={true}/>
            <TextInput onChange={(e) => handleInputChange(e)} type="text" name="lastName"
                       label="Фамилия:" required={true}/>
            <TextInput onChange={(e) => handleInputChange(e)} type="text" name="login"
                       label="Логин:" required={true}/>
            <Select onChange={(e) => handleInputChange(e)} label={"Город:"} name={"city_id"}
                    options={cities} className={userEditCN('select')}/>
            <TextInput onChange={(e) => handleInputChange(e)} type="password" name="password"
                       label="Пароль:" required={true}/>
            <Select onChange={(e) => handleInputChange(e)} label={"Роль:"} name={"role"}
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
