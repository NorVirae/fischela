import React from 'react';
import {Link} from 'react-router-dom';

const AdminNav = (prop) => {
    return (<nav className={""}>
        <ul className = {"nav flex-column"}>
            <li className={"nav-item"}>
                <Link to={"/d/create/category"} className={"nav-link"}>
                    Category
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to={"/d/update/password"}  className={"nav-link"}>
                    Password
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/d/wish/list"} className={"nav-link"}>
                    Users
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/d/create/sub"} className={"nav-link"}>
                    Sub-Category
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/d/create/product"} className={"nav-link"}>
                    Products
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/d/list/orders"} className={"nav-link"}>
                    Orders
                </Link>
                </li>

                <li className={"nav-item"}>
                <Link to= {"/d/wish/list"} className={"nav-link"}>
                    Shipping
                </Link>
                </li>
        </ul>

    </nav>)


}

export default AdminNav;


