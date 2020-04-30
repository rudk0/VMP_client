import React from "react";
import {cn} from '@bem-react/classname'
import './Header.scss';
import {authActions} from "../../redux/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../redux/auth/authSelectors";
import {Link} from "react-router-dom";

const headerCN = cn('header');
export const Header = props => {

  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  return (<>
      <div className={headerCN('container')}>
        <Link to={'/main'}><h1 className={headerCN('label')}>Vita Media Planer</h1></Link>
        {props.isAuthorized && <div className={headerCN('info')}>
          <p className={headerCN('login')}>Логин: {user.name + " " +  user.surname}</p>
          <button className={headerCN('btn')} onClick={(e) => {
            localStorage.clear();
            dispatch(authActions.logout());
            window.location.reload();
          }}>Выйти
          </button>
        </div>}
      </div>
    </>
  )

};