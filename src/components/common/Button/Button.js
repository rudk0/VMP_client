import React  from "react";
import {cn} from '@bem-react/classname'
import './Button.scss';

const btnCN = cn('btn');

export const Button = props => {
  const {type, variant} = props;
  return (
    <button type={type} className={btnCN(variant)}>{props.children}</button>
  )
}