import React from "react";
import {TextInput} from "../components/common/TextInput/TextInput";

export const EstimateTableHeader = (setData) => {
  return [{Header: "Регион", accessor: "city"},
    {Header: "Кол-во рекламных поверхностей", accessor: "ao_count"},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц, руб., без НДС", accessor: "price",  Cell: (props) => (<TextInput/>)},
    {Header: "Длительность размещения, мес.", accessor: "duration" ,  Cell: (props) => (<TextInput />)},
    {Header: "Скидка объем + период", accessor: "discount",  Cell: (props) => (<TextInput/>)},
    {Header: "Стратегическая скидка", accessor: "strategic_discount",  Cell: (props) => (<TextInput/>)},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц после скидок, руб., без НДС", accessor: "discount_price"},
    {Header: "Итого, бюджет, руб., без НДС", accessor: "final_price"},
    // {Header: "Трафик (посещения)", accessor: "traffic"},
    {Header: "OTS (контакты)", accessor: "ots_contacts",  Cell: (props) => (<TextInput/>)},
    {Header: "Охват (люди)", accessor: "coverage_people",  Cell: (props) => (<TextInput/>)},
    {Header: "ОРТ (руб.)", accessor: "cpt",  Cell: (props) => (<TextInput/>)}
  ]
}
