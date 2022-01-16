import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = (prop) => {

        return (<nav className={"sidebar"}>
        <ul className = {"flex flex-column justify-content-space-between"}>

        <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/user/suscriber"} className={"sd-link"}>
                    History
                </Link>
            </li>
            <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/buy/orders"} className={"sd-link"}>
                    Buy orders
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/sell/orders"} className={"sd-link"}>
                    Sell Orders
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/update/password"} className={"sd-link"}>
                    Update Password
                </Link>
            </li>

        </ul>

        </nav>)



}

export default UserNav;


