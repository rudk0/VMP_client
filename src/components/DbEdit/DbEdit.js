import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {CityEdit} from "../DbEditTabs/CityEdit/CityEdit";
import {FormatEdit} from "../DbEditTabs/FormatEdit/FormatEdit";
import {TypeEdit} from "../DbEditTabs/MITypesEdit/MITypesEdit";
import {SegmentEdit} from "../DbEditTabs/SegmentEdit/SegmentEdit";
import {SignificanceEdit} from "../DbEditTabs/SocSignEdit/SocSignEdit";
export const DbEdit =  () =>{
return (  <Tabs>
  <TabList>
    <Tab>Города</Tab>
    <Tab>Форматы</Tab>
    <Tab>Типы медицинских учереждений </Tab>
    <Tab>Сегменты</Tab>
    <Tab>Социальная значимость</Tab>

  </TabList>
  <TabPanel>
    <CityEdit/>
  </TabPanel>
  <TabPanel>
    <FormatEdit/>
  </TabPanel>
  <TabPanel>
    <TypeEdit/>
  </TabPanel>
  <TabPanel>
    <SegmentEdit/>
  </TabPanel>
  <TabPanel>
    <SignificanceEdit/>
  </TabPanel>
</Tabs>)
}