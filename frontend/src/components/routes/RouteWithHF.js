import React from 'react';
import {Route} from 'react-router-dom';
import Footer from '../nav/Footer';
import Header from '../nav/Header';


export const RouteWithHF = ({element, path,children, ...rest}) =>{

    return <> <Header/>
                <Route path={path} element={element} {...rest} render= {()=> children} />
        </>
}

