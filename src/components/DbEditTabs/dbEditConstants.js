import {store} from "../../redux/store";
import React from "react";
import {aoActions} from "../../redux/ao/aoSlice";
import {DbApi} from "../../api/dbEditAPI";
import {TextInput} from "../common/TextInput/TextInput";
import '../common/Button/Button.scss'
import {cn} from "@bem-react/classname";
import {UsersApi} from "../../api/UserAPI";
import {usersActions} from "../../redux/Users/userSlice";

const btnCN = cn('btn');

export const editCityTableHeaders = [
  {
    Header: 'Город', accessor: 'ids',
    Cell: (props) => (<TextInput defaultValue={props.row.original.city} onFocusOut={(e) => DbApi.changeCity(props.row.original.id, e.target.value)
  .then((data) => store.dispatch(aoActions.getCities()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        DbApi.deleteCity(value).then((data) => store.dispatch(aoActions.getCities()))
      }}}>Удалить</button>)
  }

]
export const editFormatsTableHeaders = [
  {
    Header: 'Формат', accessor: 'ids',
    Cell: (props) => (<TextInput defaultValue={props.row.original.format} onFocusOut={(e) => DbApi.changeFormat(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getFormats()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        DbApi.deleteFormat(value).then((data) => store.dispatch(aoActions.getFormats()))
      }}}>Удалить</button>)

  }
]
export const editTypesTableHeaders = [
  {
    Header: 'Тип', accessor: 'ids',
    Cell: (props) => (<TextInput defaultValue={props.row.original.type} onFocusOut={(e) => DbApi.changeType(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getTypes()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        DbApi.deleteTypes(value).then((data) => store.dispatch(aoActions.getTypes()))
      }}}>Удалить {value}</button>)
  }
]

export const editSegmentsTableHeaders = [
  {
    Header: 'Сегмент', accessor: 'ids',  Cell: (props) => (<TextInput defaultValue={props.row.original.segment} onFocusOut={(e) => DbApi.changeSegment(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getSegments()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        DbApi.deleteSegment(value).then((data) => store.dispatch(aoActions.getSegments()))
      }}}>Удалить</button>)
  }
]
export const editSignificanceTableHeaders = [
  {
    Header: 'Значимость', accessor: 'ids',
    Cell: (props) => (<TextInput defaultValue={props.row.original.significance} onFocusOut={(e) => DbApi.changeSignificance(props.row.original.id, e.target.value)
      .then((data) => store.dispatch(aoActions.getSignificance()))}/>)
  },
  {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        DbApi.deleteSignificance(value).then((data) => store.dispatch(aoActions.getSignificance()))
      }}}>Удалить</button>)
  }
]