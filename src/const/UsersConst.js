import React from "react";
import {UsersApi} from "../api/UserAPI";
import {store} from '../redux/store'
import {usersActions} from "../redux/Users/userSlice";

export const usersTableHeader = () => {
  return ([{Header: "Имя", accessor: "firstname"}, {Header: "Фамилия", accessor: "lastname"}, {
    Header: "Логи",
    accessor: "login"
  }, {Header: "Роль", accessor: "roles.role"}, {
    Header: "Город",
    accessor: "cities.city"
  }, {
    Header: 'Delete', accessor: 'id',
    Cell: ({value}) => (<button onClick={(e) => UsersApi.deleteUser(value)
      .then((data) => store.dispatch(usersActions.getUsers()))}>Delete</button>)
  }
  ])
}