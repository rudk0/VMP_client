import React from "react";
import {cn} from '@bem-react/classname'
import './Select.scss';
import Select from 'react-select';

const selectCN = cn('select');
export const Sel = props => {
  const {label, options, onChange, name, value} = props;
  const defaultValue = options.find((el) => el.value === value);
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      textAlign: 'left'
    }),
  }
  return (<div className={selectCN('container')}><label className={selectCN('label')}>{label}</label>
      <Select name={name} onChange={(e) => {
        e.name = name;
        typeof onChange === "function" && onChange(e)
      }} styles={customStyles} options={options} defaultValue={defaultValue}
              className={selectCN('item')}/>
    </div>
  );
};
