import React from 'react';
import {Route} from 'react-router-dom';
import Footer from '../nav/Footer';
import Header from '../nav/Header';


export const RouteWithHF = ({children, ...rest}) =>{

    return <> <Header/>
    <Route {...rest} render= {()=> children} />
    <Footer/>
    </>
}

