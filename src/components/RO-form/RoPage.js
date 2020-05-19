import React from 'react';
import {RO} from "./RO";
import {cn} from "@bem-react/classname";
const roCN = cn('ro');

export const RoPage = ()=>{
  return (
    <div className={roCN('container')}>
    <h2 className={roCN('label')}>Формирование списка рекламных объектов</h2>
      <RO/>
    </div>

  )
}