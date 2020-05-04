import React from "react";
import './Estimate.scss';
import {AoTable} from "../AO-table/AoTable";
import {EstimateTableHeader} from "../../const/EstimateConsts";

export const Estimate = () =>{
  return(<AoTable columns={EstimateTableHeader()} data={[]}></AoTable>
  )
}