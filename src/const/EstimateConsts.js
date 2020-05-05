import React from "react";
import {TextInput} from "../components/common/TextInput/TextInput";

export const EstimateTableHeader = (setData) => {
  return [{Header: "Регион", accessor: "city"},
    {Header: "Кол-во рекламных поверхностей", accessor: "ao_count"},
    {
      Header: "Стоимость размещения рекламного носителя за 1 месяц, руб., без НДС",
      accessor: "price",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'price', props.row.index)}/>)
    },
    {
      Header: "Длительность размещения, мес.",
      accessor: "duration",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'duration', props.row.index)}/>)
    },
    {
      Header: "Скидка объем + период",
      accessor: "discount",
      Cell: (props) => (<TextInput type="text"  onChange={e => setData(e.target.value, 'discount', props.row.index)}/>)
    },
    {
      Header: "Стратегическая скидка",
      accessor: "strategic_discount",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'strategic_discount', props.row.index)}/>)
    },
    {
      Header: "Стоимость размещения рекламного носителя за 1 месяц после скидок, руб., без НДС",
      accessor: "discount_price"
    },
    {Header: "Итого, бюджет, руб., без НДС", accessor: "final_price"},
    {Header: "Трафик (посещения)", accessor: "visits_traffic",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'visits_traffic', props.row.index)}/>)
      },
    {
      Header: "OTS (контакты)",
      accessor: "ots_contacts",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'ots_contacts', props.row.index)}/>)
    },
    {
      Header: "Охват (люди)",
      accessor: "coverage_people",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'coverage_people', props.row.index)}/>)
    },
    {
      Header: "ОРТ (руб.)",
      accessor: "cpt",
      Cell: (props) => (<TextInput type="number"  onChange={e => setData(parseInt(e.target.value), 'cpt', props.row.index)}/>)
    }
  ]
}
 