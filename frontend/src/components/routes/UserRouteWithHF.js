import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { LoadingToRedirect } from './LoadingToRedirect';
import Header from '../nav/Header';


export const UserRouteWithHF = ({children, ...rest}) =>{
    const user = useSelector(state=>state.user)
    // user && user.token?
    return <> <Header/>
    <Route {...rest} render= {()=> children} /></>
    // <div><LoadingToRedirect/></div>
}

