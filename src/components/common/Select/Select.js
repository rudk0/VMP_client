import React from "react";
import {cn} from '@bem-react/classname'
import './Select.scss';
import Select from 'react-select';

const selectCN = cn('select');
export const Sel = props => {
  const {label, options, onChange, name, value } = props;
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      textAlign: 'left'
    }),
  }
  return(<div className={selectCN('container')}><label className={selectCN('label')}>{label}</label>
      <Select name={name} onChange={(e) => {
        e.name=name;
        onChange(e)
      }} styles={customStyles} options={options} defaultValue={options.filter(o => o.value === value)} className={selectCN('item')}/>
    </div>
  );
};
