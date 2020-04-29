export const offerSelect = [
  {
    value: true, label: 'Да',
  },
  {
    value: false, label: 'Нет'
  }
]
export const reservedSelect = [
  {
    value: true, label: 'Зарезервирован'
  },
  {
    value: false, label: 'Не зарезервирован'
  }

]
export const floorSelect = [
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
  }

]
export const pocketSelect = [
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
  {
    value: true, label: 'Да',
  },
  {
    value: false, label: 'Нет'
  }
]
export const possibilitySelect = [
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
  subsegment1_id: 0,
  subsegment2_id: 0,
  subsegment3_id: 0
}

export const RoInitialState = {}
export const tableAOHeader = () => {
  return [{Header: "Город", accessor: "city_id.city"}, {Header: "Объект", accessor: "name"}, {
    Header: "Объект фактический адрес",
    accessor: "address"
  }, {Header: "Формат размещения", accessor: "placing_format_id.format"}, {
    Header: "Этаж",
    accessor: "floor  "
  }, , {Header: "Соседи", accessor: "neighbors"}, {Header: "Кол-во карманов", accessor: "pockets"}, {
    Header: "Цена, руб",
    accessor: "price"
  }, {
    Header: "Описание места",
    accessor: "place_description"
  }]
}