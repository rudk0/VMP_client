import React from "react";
import {cn} from '@bem-react/classname'
import './Select.scss';
import Select from 'react-select';

const selectCN = cn('select');
export const Sel = props => {
    const {label, options, defaultValue} = props;
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            textAlign: 'left'
        }),
    }
    return (<label className={selectCN('label')}>{label}
            <Select styles={customStyles} options={options} defaultValue={defaultValue} className={selectCN('item')}/>
        </label>
    );
};
