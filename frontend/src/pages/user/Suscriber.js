import React from 'react';
import Footer from '../../components/nav/Footer';
import UserNav from '../../components/nav/UserNav'
const Suscriber = (props) => {
    return <div className="user-dashboard">
        <div className={"container grid grid-2-20-80"}>
                <div className={""}>
                    <UserNav/>
                </div>
    
           
                <section>This is the suscribers page!</section>
            </div> 
       
        </div>
}

export default Suscriber;