export const EstimateTableHeader = () => {
  return [{Header: "Регион", accessor: "city"},
    {Header: "Кол-во рекламных поверхностей", accessor: "ao_count"},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц, руб., без НДС", accessor: "price"},
    {Header: "Длительность размещения, мес.", accessor: "duration"},
    {Header: "Скидка объем + период", accessor: "discount"},
    {Header: "Стратегическая скидка", accessor: "strategic_discount"},
    {Header: "Стоимость размещения рекламного носителя за 1 месяц после скидок, руб., без НДС", accessor: "discount_price"},
    {Header: "Итого, бюджет, руб., без НДС", accessor: "final_price"},
    // {Header: "Трафик (посещения)", accessor: "traffic"},
    {Header: "OTS (контакты)", accessor: "ots_contacts"},
    {Header: "Охват (люди)", accessor: "coverage_people"},
    {Header: "ОРТ (руб.)", accessor: "cpt"}
  ]
}