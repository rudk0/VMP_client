import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../../redux/ao/aoSlice";
import {cn} from "@bem-react/classname";
import {AoTable} from "../../AO-table/AoTable";
import {editCityTableHeaders} from "../dbEditConstants";
import {aoCitySelector} from "../../../redux/ao/aoSelectors";
import {TextInput} from "../../common/TextInput/TextInput";
import {DbApi} from "../../../api/dbEditAPI";
import {notify} from "../../../helpers/toaster-helper";
import {Button} from "../../common/Button/Button";
import {Link} from "react-router-dom";


const editCityCn = cn('edit-city')
export const CityEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getCities())
  }, [dispatch])
  const cities = useSelector(aoCitySelector);
  const [state, setState] = useState({city: ''});
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setState({
      ...state,
      [name]: value
    });
  }
  const onSubmit = e =>{
    e.preventDefault();
    DbApi.addCity(state.city).then(()=>{
      notify("Added " + state.city + " successfully");
      dispatch(aoActions.getCities())
    })
  }
  return (<div className={editCityCn('container')}>
    <form onSubmit={e => onSubmit(e)}>
      <TextInput onChange={(e) => handleInputChange(e)} name={"city"} label={"Название города"}></TextInput>
      <Button type='submit' variant='submit'>Создать</Button>
      <Link to={"/main"}>
        <Button variant="discard">Назад</Button>
      </Link>
    </form>
    <AoTable columns={editCityTableHeaders} data={cities}></AoTable>

  </div>)
}