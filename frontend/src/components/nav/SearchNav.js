import React from 'react';
import {Link} from 'react-router-dom';

const SearchNav = (prop) => {
    return (<nav className={""}>
        <ul className = {"nav flex-column"}>
            <li className={"nav-item m-2 border"}>
                <Link to={"/d/user/suscriber"} className={"nav-link"}>
                    History
                </Link>
                </li>

                <li className={"nav-item m-2 border"}>
                <Link to={"/d/buy/orders"} className={"nav-link"}>
                    Buy orders
                </Link>
                </li>

                <li className={"nav-item m-2 border"}>
                <Link to={"/d/sell/orders"} className={"nav-link"}>
                    Sell Orders
                </Link>
                </li>

                <li className={"nav-item m-2 border"}>
                <Link to={"/d/update/password"}  className={"nav-link"}>
                    Update Password
                </Link>
                </li>

                <li className={"nav-item m-2 border"}>
                <Link to= {"/d/wish/list"} className={"nav-link"}>
                    WishList
                </Link>
                </li>
        </ul>

    </nav>)


}

export default SearchNav;


