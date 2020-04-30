import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../../redux/ao/aoSlice";
import {aoTypesSelector} from "../../../redux/ao/aoSelectors";
import {TextInput} from "../../common/TextInput/TextInput";
import {Button} from "../../common/Button/Button";
import {AoTable} from "../../AO-table/AoTable";
import {editTypesTableHeaders} from "../dbEditConstants";
import {DbApi} from "../../../api/dbEditAPI";
import {notify} from "../../../helpers/toaster-helper";

const typeEditCN = cn("type-edit")

export const TypeEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getTypes())
  }, [dispatch])
  const types = useSelector(aoTypesSelector);
  const [typeState, setTypeState] = useState({type: ''});
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setTypeState({
      ...typeState,
      [name]: value
    });
  }

  const onSubmit = e =>{
    e.preventDefault();
    DbApi.addType(typeState.type).then(()=>{
      notify("Added " + typeState.type + " successfully");
      dispatch(aoActions.getTypes());
    });
  }
  return (<div className={typeEditCN('container')}>
    <form onSubmit={e => onSubmit(e)}>
      <TextInput onChange={(e) => handleInputChange(e)} name={"type"} label={"Название Типа"}></TextInput>
      <Button type='submit' variant='submit'>Создать</Button>
    </form>
    <AoTable columns={editTypesTableHeaders} data={types}></AoTable>

  </div>)
}