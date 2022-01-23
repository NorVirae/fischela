import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = (prop) => {

        return (<nav className={"sidebar"}>
        <ul className = {"flex flex-column justify-content-space-between"}>

        <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/admin/dashboard"} className={"sd-link"}>
                <i class="fas fa-columns pr-1"></i>Dashboard
                </Link>
            </li>
            <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/list/history"} className={"sd-link"}>
                <i class="fa fa-list-alt pr-1" aria-hidden="true"></i>History
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/create/product"} className={"sd-link"}>
                    Products
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/list/orders"} className={"sd-link"}>
                    Orders
                </Link>
            </li>

            <li className={"sd-item p-2 mb-2"}>
                <Link to= {"/d/edit/product/:slug"} className={"sd-link"}>
                    Edit Product
                </Link>
            </li>
            <li className={"sd-item p-2 mb-2"}>
                <Link to= {"/d/admin/shops"} className={"sd-link"}>
                    Shop
                </Link>
            </li>
            <li className={"sd-item p-2 mb-2"}>
                <Link to= {"/d/admin/farms"} className={"sd-link"}>
                   Farms
                </Link>
            </li>

            

        </ul>

        </nav>)



}

export default UserNav;


