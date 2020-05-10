import React from "react";
import {UsersApi} from "../api/UserAPI";
import {store} from '../redux/store'
import {usersActions} from "../redux/Users/userSlice";
import '../../src/components/common/Button/Button.scss';
import {cn} from "@bem-react/classname";

const btnCN = cn('btn');
export const usersTableHeader = () => {
  return ([{Header: "Имя", accessor: "firstname"}, {Header: "Фамилия", accessor: "lastname"}, {
    Header: "Логи",
    accessor: "login"
  }, {Header: "Роль", accessor: "roles.role"}, {
    Header: "Город",
    accessor: "cities.city"
  }, {
    Header: 'Удаление', accessor: 'id',
    Cell: ({value}) => (<button className={btnCN('delete')} onClick={()=>{
      if (window.confirm("Вы уверены, что хотите удалить?")){
        UsersApi.deleteUser(value).then((data) => store.dispatch(usersActions.getUsers()))
      }
    }}>Удалить</button>)
  }
  ])
}