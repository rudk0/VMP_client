import {store} from "../../redux/store";
import React from "react";
import {aoActions} from "../../redux/ao/aoSlice";
import {DbApi} from "../../api/dbEditAPI";
import {TextInput} from "../common/TextInput/TextInput";

export const editCityTableHeaders = [
  {Header: "Город", accessor: "city"},
  {
    Header: 'Изменение', accessor: 'ids',
    Cell: (props) => (<TextInput onFocusOut={(e) => DbApi.changeCity(props.row.original.id, e.target.value)
  .then((data) => store.dispatch(aoActions.getCities()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteCity(value)
      .then((data) => store.dispatch(aoActions.getCities()))}>Удалить</button>)
  }

]
export const editFormatsTableHeaders = [
  {Header: "Формат", accessor: "format"}, {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteFormat(value)
      .then((data) => store.dispatch(aoActions.getFormats()))}>Удалить</button>)

  }
]
export const editTypesTableHeaders = [
  {Header: "Тип", accessor: "type"}, {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteTypes(value)
      .then((data) => store.dispatch(aoActions.getTypes()))}>Удалить</button>)
  }
]
export const editSegmentsTableHeaders = [
  {Header: "Сегмент", accessor: "segment"}, {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteSegment(value)
      .then((data) => store.dispatch(aoActions.getSegments()))}>Удалить</button>)
  }
]
export const editSignificanceTableHeaders = [
  {Header: "Значимость", accessor: "significance"}, {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteSignificance(value)
      .then((data) => store.dispatch(aoActions.getSignificance()))}>Удалить</button>)
  }
]