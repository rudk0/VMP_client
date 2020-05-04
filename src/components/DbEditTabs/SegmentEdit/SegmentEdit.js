import React, {useEffect, useState} from "react";
import {cn} from "@bem-react/classname";
import {useDispatch, useSelector} from "react-redux";
import {aoActions} from "../../../redux/ao/aoSlice";
import { aoSegmentSelector} from "../../../redux/ao/aoSelectors";
import {TextInput} from "../../common/TextInput/TextInput";
import {Button} from "../../common/Button/Button";
import {AoTable} from "../../AO-table/AoTable";
import { editSegmentsTableHeaders} from "../dbEditConstants";
import {DbApi} from "../../../api/dbEditAPI";
import {notify} from "../../../helpers/toaster-helper";
import {Link} from "react-router-dom";

const segmentEditCN = cn("segment-edit")

export const SegmentEdit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getSegments())
  }, [dispatch])
  const segments = useSelector(aoSegmentSelector);
  const [segmentState, setSegmentState] = useState({segment: ''});
  const handleInputChange = (event) => {
    const target = event.target;
    let value = (target && target.value) || event.value;
    const name = (target && target.name) || event.name;
    setSegmentState({
      ...segmentState,
      [name]: value
    });
  }

  const onSubmit = e =>{
    e.preventDefault();
    DbApi.addSegment(segmentState.segment).then(()=>{
      notify("Added " + segmentState.segment + " successfully");
      dispatch(aoActions.getSegments());
    });
  }
  return (<div className={segmentEditCN('container')}>
    <form onSubmit={e => onSubmit(e)}>
      <TextInput onChange={(e) => handleInputChange(e)} name={"segment"} label={"Название Формата"}></TextInput>
      <Button type='submit' variant='submit'>Создать</Button>
      <Link to={"/main"}>
        <Button variant="discard">Назад</Button>
      </Link>
    </form>
    <AoTable columns={editSegmentsTableHeaders} data={segments}></AoTable>

  </div>)
}