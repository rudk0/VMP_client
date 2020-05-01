import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {TextInput} from "../common/TextInput/TextInput";
const profileEditCn = cn('profile-edit')
export const ProfileEdit = props => {
  const [profileState, setState] = useState({password: ''})
  const onSubmit = e =>{
    e.preventDefault();


  }
  return(< div className={profileEditCn('container')}
  ><form onSubmit={e => onSubmit(e)}>
    <TextInput onChange={e => setState({...profileState, password: e.target.value})} label={"New password: "} name="password" value={profileState.password}></TextInput>
  </form>

  </div>)
}
