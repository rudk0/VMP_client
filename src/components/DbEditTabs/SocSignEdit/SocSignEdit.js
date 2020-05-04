import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../../redux/ao/aoSlice";
import { aoSignificanceSelector} from "../../../redux/ao/aoSelectors";
import {TextInput} from "../../common/TextInput/TextInput";
import {Button} from "../../common/Button/Button";
import {AoTable} from "../../AO-table/AoTable";
import { editSignificanceTableHeaders} from "../dbEditConstants";
import {DbApi} from "../../../api/dbEditAPI";
import {notify} from "../../../helpers/toaster-helper";
import {Link} from "react-router-dom";

const significanceEditCN = cn("significance-edit")

export const SignificanceEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getSignificance())
  }, [dispatch])
  const significances = useSelector(aoSignificanceSelector);
  const [significanceState, setSignificanceState] = useState({significance: ''});
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setSignificanceState({
      ...significanceState,
      [name]: value
    });
  }

  const onSubmit = e =>{
    e.preventDefault();
    DbApi.addSignificance(significanceState.significance).then(()=>{
      notify("Added " + significanceState.significance + " successfully");
      dispatch(aoActions.getSignificance());
    });
  }
  return (<div className={significanceEditCN('container')}>
    <form onSubmit={e => onSubmit(e)}>
      <TextInput onChange={(e) => handleInputChange(e)} name={"significance"} label={"Название Формата"}></TextInput>
      <Button type='submit' variant='submit'>Создать</Button>
      <Link to={"/main"}>
        <Button variant="discard">Назад</Button>
      </Link>
    </form>
    <AoTable columns={editSignificanceTableHeaders} data={significances}></AoTable>

  </div>)
}



