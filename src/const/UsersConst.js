import React, {useEffect} from "react";
import {UsersApi} from "../api/UserAPI";
import {store} from '../redux/store'
import {usersActions} from "../redux/Users/userSlice";
import '../../src/components/common/Button/Button.scss';
import {cn} from "@bem-react/classname";
import {TextInput} from "../components/common/TextInput/TextInput";
import {Sel as Select} from "../components/common/Select/Select";

const btnCN = cn('btn');
export const usersTableHeader = (cities) => {
  const options = [
    { value: 'admin', label: 'ROLE_ADMIN' },
    { value: 'ROLE_USER', label: 'ROLE_USER' }
  ]

  return ([{Header: "Имя", accessor: "firstname", Cell: (props)=>(<TextInput defaultValue={props.row.original.firstname} onFocusOut={(e) => {
  UsersApi.editUser({
    ...props.row.original,
    city_id: props.row.original.cities.id,
    role: props.row.original.roles.role,
    firstName: e.target.value
  })
}}/>)}, {Header: "Фамилия", accessor: "lastname", Cell: (props)=>(<TextInput defaultValue={props.row.original.lastname} onFocusOut={(e) => {
  UsersApi.editUser({
    ...props.row.original,
    city_id: props.row.original.cities.id,
    role: props.row.original.roles.role,
    lastName: e.target.value
  })
}}/>)}, {
    Header: "Логин",
    accessor: "login", Cell: (props)=>(<TextInput defaultValue={props.row.original.login} onFocusOut={(e) => {
  UsersApi.editUser({
    ...props.row.original,
    city_id: props.row.original.cities.id,
    role: props.row.original.roles.role,
    login: e.target.value
  })
}}/>)
  }, {Header: "Роль", accessor: "roles.role", Cell: (props)=>(<Select options={options} role={{
  value: props.row.original.roles.role,
  label: props.row.original.roles.role
}} onChange={(e) => {
  console.log(e.value);
  UsersApi.editUser({
    ...props.row.original,
    city_id: props.row.original.cities.id,
    role: e.value
  })
}}/>)}, {
    Header: "Город",
    accessor: "cities.city", Cell: (props) => (<Select
      onChange={(e) => {
    UsersApi.editUser({
      ...props.row.original,
      city_id: e.value,
      role: props.row.original.roles.role,

    })
  }}
  options={cities} role={{value: props.row.original.cities.city, label: props.row.original.cities.city}}

  />)
  }, {Header: "Новый пароль", accessor: "password", Cell: (props) => (<TextInput onFocusOut={(e) => {
  UsersApi.editUser({
    ...props.row.original,
    city_id: props.row.original.cities.id,
    role: props.row.original.roles.role,
    password: e.target.value
  })
}}/>)},{
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        UsersApi.deleteUser(value).then((data) => store.dispatch(usersActions.getUsers()))
      }
    }}>Удалить</button>)
  }
  ])
}
export const userInitialState = {
  city_id: 1,
  firstName: '',
  lastName: "",
  login: "",
  role: "",
  password: ""
}