import React  from "react";
import './NumberInput.scss'
import {cn} from "@bem-react/classname";
const numberInputCn = cn('number-input')
export const NumberInput = props =>{
  const {  name, type, label, onChange, required=false}=props
  return (<div className={numberInputCn('container')}>
      <label className={numberInputCn('label')}> {label}</label>
      <input required={required} type={"number"} className={numberInputCn('input')} min={0} name={name}  onChange={onChange ? e=>onChange(e) : null} {...props}/>
    </div>
  )}