import React  from "react";
import './TextInput.scss'
import {cn} from "@bem-react/classname";
const textInputCn = cn('text-input')
export const TextInput = props =>{
  const {  name, type, label, onChange, onFocusOut, required=false}=props
  return (<div className={textInputCn('container')}>
    <label className={textInputCn('label')}> {label}</label>
      <input required={required} type={type} onBlur={onFocusOut ? e=>{e.persist(); onFocusOut(e)}: null} className={textInputCn('input')}  name={name}  onChange={onChange ? e=>onChange(e) : null} {...props}/>
    </div>
  )
}