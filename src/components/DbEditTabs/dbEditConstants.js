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
  {Header: "Формат", accessor: "format"},
  {
    Header: 'Изменение', accessor: 'ids',
    Cell: (props) => (<TextInput onFocusOut={(e) => DbApi.changeFormat(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getFormats()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteFormat(value)
      .then((data) => store.dispatch(aoActions.getFormats()))}>Удалить</button>)

  }
]
export const editTypesTableHeaders = [
  {Header: "Тип", accessor: "type"},
  {
    Header: 'Изменение', accessor: 'ids',
    Cell: (props) => (<TextInput onFocusOut={(e) => DbApi.changeType(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getTypes()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteTypes(value)
      .then((data) => store.dispatch(aoActions.getTypes()))}>Удалить</button>)
  }
]
export const editSegmentsTableHeaders = [
  {Header: "Сегмент", accessor: "segment"},
  {
    Header: 'Изменение', accessor: 'ids',
    Cell: (props) => (<TextInput onFocusOut={(e) => DbApi.changeSegment(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getSegments()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteSegment(value)
      .then((data) => store.dispatch(aoActions.getSegments()))}>Удалить</button>)
  }
]
export const editSignificanceTableHeaders = [
  {Header: "Значимость", accessor: "significance"},
  {
    Header: 'Изменение', accessor: 'ids',
    Cell: (props) => (<TextInput onFocusOut={(e) => DbApi.changeSignificance(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getSignificance()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => DbApi.deleteSignificance(value)
      .then((data) => store.dispatch(aoActions.getSignificance()))}>Удалить</button>)
  }
]