export const EstimateTableHeader = () => {
  return [{Header: "Регион", accessor: "city_id.city"},
    {Header: "Кол-во рекламных поверхностей", accessor: "name"},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц, руб., без НДС", accessor: "address"},
    {Header: "Длительность размещения, мес.", accessor: "placing_format_id.format"},
    {Header: "Скидка объем + период", accessor: "floor"},
    {Header: "Стратегическая скидка", accessor: "neighbors"},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц после скидок, руб., без НДС", accessor: "pockets"},
    {Header: "Итого, бюджет, руб., без НДС", accessor: "price"},
    {Header: "Трафик (посещения)", accessor: "traffic"},
    {Header: "OTS (контакты)", accessor: "contacts"},
    {Header: "Охват (люди)", accessor: "o"},
    {Header: "ОРТ (руб.)", accessor: "place_description"}
  ]
}