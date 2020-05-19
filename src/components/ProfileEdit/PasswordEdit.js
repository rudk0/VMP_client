import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {TextInput} from "../common/TextInput/TextInput";
import './PasswordEdit.scss';
import {Button} from "../common/Button/Button";
import {Link} from "react-router-dom";
import {error, notify} from "../../helpers/toaster-helper";
import {UsersApi} from "../../api/UserAPI";
const passwordEditCN = cn('password-edit')
export const PasswordEdit = props => {
  const [profileState, setState] = useState({password: ''})
  const onSubmit = e =>{
    e.preventDefault();
    UsersApi.changePassword(profileState, localStorage.id)
      .then((data) => {
        notify("Пароль успешно изменён");
        setState({password: ''});
      }).catch((err) => {
      error("Something went wrong" + err);
    })
  }
  return(< div className={passwordEditCN('container')}
  >
    <h2 className={passwordEditCN('label')}>Изменение пароля</h2>
    <form onSubmit={e => onSubmit(e)}>
    <TextInput onChange={e => setState({...profileState, password: e.target.value})} label={"Новый пароль: "} name="password" value={profileState.password}></TextInput>
      <Link to={"/main"}>
        <Button variant="discard">Отмена</Button>
      </Link>
      <Button type="submit" variant="submit">Сохранить пароль</Button>
  </form>

  </div>)
}
