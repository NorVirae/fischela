import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import SidebarThumb from './SidebarThumb';

const AdminNav = ({className}) => {
    const [hide, setHide] = useState(true)
    
    const hideSidebar = () => {
        console.log("i Was clicked")
        setHide(!hide)
        // if (hide){
        //     const hideIt = setInterval(()=>{ console.log("i waited 2 sec")}, 2000 )
        // }
    }
    return (<> <SidebarThumb onClick={e=>hideSidebar()}/>
        <nav className={cx("sidebar", {"sidebar-open":!hide}, {"sidebar-close":hide}, className)}>
        <ul className = {"flex flex-column justify-content-space-between"}>
                
            {/* <div onClick={e=>hideSidebar()} className='btn-close hide-lg m-1'>x</div> */}
            <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/admin/dashboard"} className={"sd-link"}>
                <i class="fas fa-columns pr-1"></i>Dashboard
                </Link>
            </li>
            <li className={"sd-item mb-2 p-2"}>
                <Link to={"/d/create/category"} className={"sd-link"}>
                <i class="fa fa-list-alt pr-1" aria-hidden="true"></i>Category
                </Link>
            </li>


            



                {/* <li className={"nav-item"}>
                <Link to={"/d/update/password"}  className={"nav-link"}>
                    Password
                </Link>
                </li> */}

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/edit/category/:slug"} className={"sd-link"}>
                    Edit Category
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/create/sub"} className={"sd-link"}>
                    Sub-Category
                </Link>
            </li>

            <li className={"sd-item mb-2 p-2"}>
                <Link to= {"/d/edit/sub/:slug"} className={"sd-link"}>
                    Edit Sub-Category
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

    </nav></>)


}

export default AdminNav;


