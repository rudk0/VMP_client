import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../../redux/ao/aoSlice";
import {aoFormatsSelector} from "../../../redux/ao/aoSelectors";
import {TextInput} from "../../common/TextInput/TextInput";
import {Button} from "../../common/Button/Button";
import {AoTable} from "../../AO-table/AoTable";
import { editFormatsTableHeaders} from "../dbEditConstants";
import {DbApi} from "../../../api/dbEditAPI";
import {notify} from "../../../helpers/toaster-helper";
import {Link} from "react-router-dom";

const formatEditCN = cn("format-edit")

export const FormatEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getFormats())
  }, [dispatch])
  const formats = useSelector(aoFormatsSelector);
  const [formatState, setFormatState] = useState({format: ''});
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setFormatState({
      ...formatState,
      [name]: value
    });
  }

const onSubmit = e =>{
  e.preventDefault();
  DbApi.addFormat(formatState.format).then(()=>{
    notify("Added " + formatState.format + " successfully");
    dispatch(aoActions.getFormats());
  });
}
  return (<div className={formatEditCN('container')}>
    <form onSubmit={e => onSubmit(e)}>
      <TextInput onChange={(e) => handleInputChange(e)} name={"format"} label={"Название Формата"}></TextInput>
      <Button type='submit' variant='submit'>Создать</Button>
      <Link to={"/main"}>
        <Button variant="discard">Назад</Button>
      </Link>
    </form>
    <AoTable columns={editFormatsTableHeaders} data={formats}></AoTable>

  </div>)
}