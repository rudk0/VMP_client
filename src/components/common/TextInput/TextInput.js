import React  from "react";
import './TextInput.scss'
import {cn} from "@bem-react/classname";
const textInputCn = cn('text-input')
export const TextInput = props =>{
  const {name, type, label, onChange}=props
  return (
    <label className={textInputCn('label')}> {label}
      <input className={textInputCn('input')} type={type} name={name}  onChange={e=>onChange(e)} {...props}/>
    </label>
  )
}