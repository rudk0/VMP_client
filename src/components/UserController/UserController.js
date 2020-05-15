import React, {useEffect} from "react";
import './UserController.scss'
import {cn} from "@bem-react/classname";
import {Link} from "react-router-dom";
import {Button} from "../common/Button/Button";
import {AoTable} from "../AO-table/AoTable";
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../../redux/Users/userSlice";
import {usersSelector} from "../../redux/Users/userSelector";
import {usersTableHeader} from "../../const/UsersConst";

const userCN = cn('user');
export const UserController = ({columns, data}) =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.getUsers())
  }, [dispatch]);
const users = useSelector(usersSelector);
  return (<div className={userCN('container')}>
      <h2 className={userCN('label')}>Список пользователей</h2>
        <div className={userCN('list-container')}>
        <AoTable columns={usersTableHeader()} data={users}></AoTable>
        </div>
      <Link to={"/userCreate"}>
         <Button variant='submit'>Создать нового пользователя</Button>
      </Link>
        <Link to={"/main"}>
          <Button variant="discard">Назад</Button>
        </Link>
    </div>

  )
}