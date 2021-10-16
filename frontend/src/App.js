import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import "react-toastify/dist/ReactToastify.css";
import RegisterComplete from './pages/auth/RegisterComplete';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import ForgottenPassword from './pages/auth/ForgottenPassword';
import { UserRoute } from './components/routes/UserRoutes';
import Suscriber from './pages/user/Suscriber';
import WishList from './pages/user/WishList';
import UpdatePassword from './pages/user/UpdatePassword';
import AdminDashboard from './pages/user/AdminDashboard';

import { currentUser } from './functions/currentUser';
import { AdminRoute } from './components/routes/AdminRoute';
import CreateCategory from './pages/admin/createCategory';
import EditCategory from './pages/admin/editCategory';
import CreateSubCategory from './pages/admin/subCategory';
import EditSub from './pages/admin/editSub';
import Product from './pages/admin/createProduct'
import "./index.css"
import EditProduct from './pages/admin/editProduct';
import ProductInfo from './pages/productInfo';
import Cart from './pages/cart';
import CheckOut from './pages/checkOut';
import Orders from './pages/admin/Orders';
import BuyOrders from './pages/user/BuyOrders';
import SellOrders from './pages/user/SellOrders';
import { UserRouteWithHF } from './components/routes/UserRouteWithHF';
import { RouteWithHF } from './components/routes/RouteWithHF';
import SearchPage from './pages/addIns/SearchPage';

 



const App = (props)=>{
    const dispatch = useDispatch()
    // const createOrUpdateUser = async (authToken) => {
    //     console.log(process.env.REACT_APP_API)
    //     return await axios.post("http://localhost:8000/api/createupdateuser", {},
    //         {headers:{authToken}})
    // }
    useEffect(()=>{
        const unsuscribe = auth.onAuthStateChanged(async (user)=>{
            console.log(user)
            if(user){
            const idTokenResult = await user.getIdTokenResult()
                currentUser(idTokenResult.token).then((res)=>{
                    console.log('FROM THE APP JS SPECTRUM',res)
                    dispatch({
                        type:"LOGGED_IN_USER", payload:{email:user.email, token:idTokenResult.token, 
                            name: res.data.name,
                            picture: res.data.picture}
                    })
                }).catch((err)=>{
                    console.log(err)
                })
                
            }
            
        })

        return () => unsuscribe()
    },[])

    const ComingSoon = ()=>(
        <div className="container-fluid">
            <div className="row justify-content-center">
                
                <div className={"col-lg-12"}><img className={"img-fluid"} src={require("./images/comingSoon/Fischelaltd.png")}/></div>
                
                <div style={{position:"relative"}} className="col-lg-4 p-5 m-5 border blue-shadow">
                <center>Contact form!</center>
                <form  action={"mailto:fischelaltd@gmail.com"} method="post" enctype="text/plain">
                    <fieldset className="form-group">

                        <input placeholder="name" className="form-control" name="name" type="text"/>

                    </fieldset>
                    <fieldset className="form-group">
                    <textarea placeholder="Type in Your message..." className="form-control" name="mail" type="mail"></textarea>
                        
                    </fieldset>

                    <fieldset className="form-group">
                    <button className="btn btn-outline-info col-lg-12" name="mail" type="mail">Submit</button>
                        
                    </fieldset>
                </form>
                </div>
                </div>
                </div>
    )


    return (
    
    <div>

        {/* <ComingSoon/> */}
        <ToastContainer/>

        <Switch>
        <RouteWithHF path={"/"} component={Home} exact={true}/>
        <Route path={"/d/login"} component={Login} exact={true}/>
        <Route path={"/d/register"} component={Register} exact={true}/>
        <Route path={"/d/register/complete"} component={RegisterComplete} exact={true} />
        <Route path={"/d/forgotten/password"} component={ForgottenPassword} exact={true} />
        <RouteWithHF path={"/d/product/info/:slug"} component={ProductInfo} exact={true} />
        <RouteWithHF path={"/d/add/to/cart"} component={Cart} exact={true} />
        <RouteWithHF path={"/d/checkout"} component={CheckOut} exact={true} />
        <RouteWithHF path={"/d/search"} component={SearchPage} exact={true} />




        {/* <UserRoute path={"/user/suscriber"} component={Suscriber} exact={true} /> */}
        <UserRouteWithHF path={"/d/wish/list"} component={WishList} exact={true} />
        <UserRouteWithHF path={"/d/update/password"} component={UpdatePassword} exact={true} />
        <UserRouteWithHF path={"/d/user/suscriber"} component={Suscriber} exact={true} />
        <UserRouteWithHF path={"/d/user/suscriber"} component={Suscriber} exact={true} />
        <UserRouteWithHF path={"/d/buy/orders"} component={BuyOrders} exact={true} />
        <UserRouteWithHF path={"/d/sell/orders"} component={SellOrders} exact={true} />



        <AdminRoute path={"/d/admin/dashboard"} component={AdminDashboard} exact={true} />
        <AdminRoute path={"/d/create/category"} component={CreateCategory} exact={true} />
        <AdminRoute path={"/d/edit/category/:slug"} component={EditCategory} exact={true} />
        <AdminRoute path={"/d/create/sub"} component={CreateSubCategory} exact={true} />
        <AdminRoute path={"/d/edit/sub/:slug"} component={EditSub} exact={true} />
        <AdminRoute path={"/d/create/product"} component={Product} exact={true} />
        <AdminRoute path={"/d/edit/product/:slug"} component={EditProduct} exact={true} />
        <AdminRoute path={"/d/list/orders"} component={Orders} exact={true} />







        






        </Switch>

    </div>

    
    
    )
    
    }
export default App