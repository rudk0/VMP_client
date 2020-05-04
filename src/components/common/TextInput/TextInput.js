import React  from "react";
import './TextInput.scss'
import {cn} from "@bem-react/classname";
const textInputCn = cn('text-input')
export const TextInput = props =>{
  const {  name, type, label, onChange, onFocusOut}=props
  return (
    <label className={textInputCn('label')}> {label}
      <input type={type} onBlur={onFocusOut ? e=>{e.persist(); onFocusOut(e)}: null} className={textInputCn('input')}  name={name}  onChange={onChange ? e=>onChange(e) : null} {...props}/>
    </label>
  )
}