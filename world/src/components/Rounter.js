import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorldList from './WorldList';
import Details from '../components/Details'


export default function  Rounter() {

return (
    <div className='page-view ui botton segment active tab'>
        <Switch>
            <Route path='/World' component={WorldList} />
            <Route exact path="/" component={Details} />
        </Switch>
    </div>
)
}