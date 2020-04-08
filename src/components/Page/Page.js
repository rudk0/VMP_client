import React from "react";
import {cn} from '@bem-react/classname'
import './Page.scss';
import {Auth} from "../Auth-form/Auth";
import {Main} from "../Main/Main";
import {RO} from "../RO-form/RO";

const PageCN = cn('page');
export const Page= () =>{
    return(<div className={PageCN('container')}>
        <Auth/>
        {/*<Main/>*/}
        {/*<RO/>*/}
    </div> )
};
