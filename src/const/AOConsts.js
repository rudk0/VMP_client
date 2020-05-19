
import React from "react";
export const offerSelect = [
  {value: '', label: 'Все'},
  {
    value: true, label: 'Да',
  },
  {
    value: false, label: 'Нет'
  }
]
export const reservedSelect = [
  {value: '', label: 'Все'},
  {
    value: true, label: 'Зарезервирован'
  },
  {
    value: false, label: 'Не зарезервирован'
  }

]
export const floorSelect = [
  {value: '', label: 'Все'},
  {
    value: 1, label: '1 этаж'
  },
  {
    value: 2, label: '2 этаж'
  },
  {
    value: 3, label: '3 этаж'
  },
  {
    value: 4, label: '4 этаж'
  },
  {
    value: 5, label: '5 этаж'
  },
  {
    value: 6, label: '6 этаж'
  },
  {
    value: 7, label: '7 этаж'
  },
  {
    value: 8, label: '8 этаж'
  },
  {
    value: 9, label: '9 этаж'
  },
  {
    value: 10, label: '10 этаж'
  },
  {
    value: 11, label: '11 этаж'
  },
  {
    value: 12, label: '12 этаж'
  },
  {
    value: 13, label: '13 этаж'
  },
  {
    value: 14, label: '14 этаж'
  },
  {
    value: 15, label: '15 этаж'
  },
  {
    value: 16, label: '16 этаж'
  },
  {
    value: 17, label: '17 этаж'
  },
  {
    value: 18, label: '18 этаж'
  },
  {
    value: 19, label: '19 этаж'
  },
  {
    value: 20, label: '20 этаж'
  }

]
export const pocketSelect = [
  {value: '', label: 'Все'},
  {
    value: 0, label: 'Нет карманов'
  },
  {
    value: 1, label: '1 карман'
  },
  {
    value: 2, label: '2 кармана'
  }
]
export const neighborsSelect = [
  {value: '', label: 'Все'},
  {
    value: true, label: 'Да',
  },
  {
    value: false, label: 'Нет'
  }
]
export const possibilitySelect = [
  {value: '', label: 'Все'},
  {
    value: true, label: 'Да',
  },
  {
    value: false, label: 'Нет'
  }
]
export const ROBuilderInitialState = {
  address: '',
  city_id: 1,
  client: '',
  comments: "",
  contract: "",
  date_from: "",
  date_to: "",
  floor: 1,
  mi_id: 1,
  mi_type_id: 1,
  name: "",
  neighbors: true,
  photo: "",
  place_description: "",
  placing_format_id: 0,
  pockets: 0,
  possibility_of_placement: true,
  price: 0,
  reservation_status: true,
  segment_id: 0,
  specialist_description: "",
  subsegment1_id: null,
  subsegment2_id: null,
  subsegment3_id: null
}

export const RoInitialState = {
}
export const tableAOHeader = () => {
  return [{Header: "Город", accessor: "city_id.city"}, {Header: "Объект", accessor: "name"}, {
    Header: "Объект фактический адрес",
    accessor: "address"
  }, {Header: "Формат размещения", accessor: "placing_format_id.format"}, {
    Header: "Этаж",
    accessor: "floor"
  },  {Header: "Соседи", accessor: "neighbors", Cell: (props) =>(<div>{props.row.original.neighbors? "Есть" : "Нет" }</div>)}, {Header: "Кол-во карманов", accessor: "pockets"}, {
    Header: "Цена, руб",
    accessor: "price"
  },{Header: "Возможность размещения", accessor: "possibility_of_placement", Cell: (props) =>(<div>{props.row.original.possibility_of_placement? "Есть" : "Нет" }</div>)},
    {
    Header: "Описание места",
    accessor: "place_description"
  }]
}