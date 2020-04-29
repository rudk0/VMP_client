import React, {useEffect} from "react";
import './AoTable.scss'
import {useDispatch} from "react-redux";
import {aoActions} from "../../redux/ao/aoSlice";

export const AoTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(aoActions.getList());
  }, [dispatch]);
}