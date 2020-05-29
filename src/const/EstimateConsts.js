import React from "react";
import {TextInput} from "../components/common/TextInput/TextInput";
import {NumberInput} from "../components/common/NumberInput/NumberInput";
// ao_count: 1
// city: "Итого"
// coverage_people: 1
// cpt: 1
// discount: null
// discount_price: null
// duration: null
// final_price: 0.0099
// ots_contacts: 1
// price: null
// strategic_discount: null
// visits_traffic: 1
export const EstimateTableHeader = (setData) => {
  return [{Header: "Регион", accessor: "city"},
    {Header: "Кол-во рекламных поверхностей", accessor: "ao_count"},
    {
      Header: "Стоимость размещения рекламного носителя за 1 месяц, руб., без НДС",
      accessor: "price",
      Cell: (props) => (props.row.original.city !== "Итого"  ?  <NumberInput onChange={e => setData(parseInt(e.target.value), 'price', props.row.index)}/> : props.row.original.price)
    },
    {
      Header: "Длительность размещения, мес.",
      accessor: "duration",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput onChange={e => setData(parseInt(e.target.value), 'duration', props.row.index)}/>: props.row.original.duration)
    },
    {
      Header: "Скидка объем + период",
      accessor: "discount",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <TextInput type={'text'} onChange={e => setData(e.target.value, 'discount', props.row.index)}/>: props.row.original.discount)
    },
    {
      Header: "Стратегическая скидка",
      accessor: "strategic_discount",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput onChange={e => setData(parseInt(e.target.value), 'strategic_discount', props.row.index)}/>: props.row.original.strategic_discount)
    },
    {
      Header: "Стоимость размещения рекламного носителя за 1 месяц после скидок, руб., без НДС",
      accessor: "discount_price"
    },
    {Header: "Итого, бюджет, руб., без НДС", accessor: "final_price"},
    {Header: "Трафик (посещения)", accessor: "visits_traffic",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput onChange={e => setData(parseInt(e.target.value), 'visits_traffic', props.row.index)}/>: props.row.original.visits_traffic)
      },
    {
      Header: "OTS (контакты)",
      accessor: "ots_contacts",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput  onChange={e => setData(parseInt(e.target.value), 'ots_contacts', props.row.index)}/>: props.row.original.ots_contacts)
    },
    {      Header: "Охват (люди)",
      accessor: "coverage_people",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput  onChange={e => setData(parseInt(e.target.value), 'coverage_people', props.row.index)}/>: props.row.original.coverage_people)
    },
    {
      Header: "CPT (руб.)",
      accessor: "cpt",
      Cell: (props) => (props.row.original.city !== "Итого"  ? <NumberInput  onChange={e => setData(parseInt(e.target.value), 'cpt', props.row.index)}/> :props.row.original.cpt )
    }
  ]
}
 