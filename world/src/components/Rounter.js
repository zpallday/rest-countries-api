import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorldList from './WorldList';



export default function  Rounter() {

return (
    <div className='page-view ui botton segment active tab'>
        <Switch>
            <Route path='/World' component={WorldList} />
        </Switch>
    </div>
)
}