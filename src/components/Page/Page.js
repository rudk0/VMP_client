import React from "react";
import {cn} from '@bem-react/classname'
import './Page.scss';
import {Auth} from "../Auth-form/Auth";

const PageCN = cn('page');
export const Page= () =>{
    return(<div className={PageCN('container')}>
        <Auth/>
    </div> )
};
