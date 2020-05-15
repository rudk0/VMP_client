import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {TextInput} from "../common/TextInput/TextInput";
import './ProfieEdit.scss';
import {Button} from "../common/Button/Button";
import {Link} from "react-router-dom";
const profileEditCn = cn('profile-edit')
export const ProfileEdit = props => {
  const [profileState, setState] = useState({password: ''})
  const onSubmit = e =>{
    e.preventDefault();


  }
  return(< div className={profileEditCn('container')}
  >
    <h2 className={profileEditCn('label')}>Изменение пароля</h2>
    <form onSubmit={e => onSubmit(e)}>
    <TextInput onChange={e => setState({...profileState, password: e.target.value})} label={"Новый пароль: "} name="password" value={profileState.password}></TextInput>
      <Link to={"/main"}>
        <Button variant="discard">Отмена</Button>
      </Link>
      <Button type="submit" variant="submit">Сохранить пароль</Button>
  </form>

  </div>)
}
