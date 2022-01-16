import './app.css';
import {Routes, Route} from 'react-router-dom';
import MusicList from './components/BookList'

import BookList from './components/BookList';
import AddBook from './components/addBook';
import Header from './components/nav/Header';
import Footer from './components/nav/Footer';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import RegisterComplete from './pages/auth/RegisterComplete';
import { useDispatch } from 'react-redux';
import ForgottenPassword from './pages/auth/ForgottenPassword';
import { UserRoute } from './components/routes/UserRoutes';
import Suscriber from './pages/user/Suscriber';
import WishList from './pages/user/WishList';
import UpdatePassword from './pages/user/UpdatePassword';
import AdminDashboard from './pages/admin/AdminDashboard';

import { currentUser } from './functions/currentUser';
import { AdminRoute } from './components/routes/AdminRoute';
import CreateCategory from './pages/admin/createCategory';
import EditCategory from './pages/admin/editCategory';
import CreateSubCategory from './pages/admin/subCategory';
import EditSub from './pages/admin/editSub';
import Product from './pages/admin/createProduct';
import "./index.css";
import "./app.css";
import "./utilities.css";


import EditProduct from './pages/admin/editProduct';
import ProductInfo from './pages/productInfo';
import Cart from './pages/cart';
import Orders from './pages/admin/Orders';
import BuyOrders from './pages/user/BuyOrders';
import SellOrders from './pages/user/SellOrders';
import { UserRouteWithHF } from './components/routes/UserRouteWithHF';
import { RouteWithHF } from './components/routes/RouteWithHF';
import SearchPage from './pages/addIns/SearchPage';
import Farm from './pages/Farm';
import Shop from './pages/Shop';
import ShopPreview from './pages/ServicesPreview';
import FarmPreview from './pages/DealPreview';
import DealPreview from './pages/DealPreview';
import ServicePreview from './pages/ServicesPreview';
import Test from './pages/Test';
import LikeDislike from './pages/Test';
import OrderPreview from './pages/admin/orderPreview';
import Shops from './pages/shops/Shops';
import Farms from './pages/farms/Farms';
import CreateShop from './pages/shops/CreateShop';
import CreateFarm from './pages/farms/CreateFarm';
import EditFarm from './pages/farms/EditFarm';
import EditShop from './pages/shops/EditShop';
import Logo from './components/nav/Logo';







function App() {
  
  return (
      <>        
        <Routes>

            
            <Route path={"/"} element={<><Header/><Home/></>} exact={true}/>
            <Route path={"/d/login"} element={<Login/>} exact={true}/>
            <Route path={"/d/register"} element={<Register/>} exact={true}/>
            <Route path={"/d/farm/:id"} element={<><Header/><Farm/></>} exact={true}/>
            <Route path={"/d/shop/:id"} element={<><Header/><Shop/></>} exact={true}/>
            <Route path={"/d/deal-preview"} element={<><Header/><DealPreview/></>} exact={true}/>
            <Route path={"/d/service-preview"} element={<><Header/><ServicePreview/></>} exact={true}/>





            <Route path={"/d/register/complete"} element={<><Header/><RegisterComplete/></>} exact={true} />
            <Route path={"/d/test"} element={<><Header/><LikeDislike/></>} exact={true} />

            <Route path={"/d/forgotten/password"} element={<ForgottenPassword/>} exact={true} />
            <Route path={"/d/product/info/:id"} element={<><Header/><ProductInfo/></>} exact={true} />
            <Route path={"/d/add/to/cart"} element={<><Header/><Cart/></>} exact={true} />
            <Route path={"/d/search"} element={<><Header/><SearchPage/></>} exact={true} />




            <Route path={"/d/wish/list"} element={<><Header/><WishList/></>} exact={true} />
            <Route path={"/d/update/password"} element={<UpdatePassword/>} exact={true} />
            <Route path={"/d/user/suscriber"} element={<><Header/><Suscriber/></>} exact={true} />
            <Route path={"/d/buy/orders"} element={<><Header/><BuyOrders/></>} exact={true} />
            <Route path={"/d/sell/orders"} element={<><Header/><SellOrders/></>} exact={true} />



            <Route path={"/d/admin/dashboard"} element={<><Header/><AdminDashboard/></>} exact={true} />
            <Route path={"/d/admin/shops"} element={<><Header/><Shops/></>} exact={true} />
            <Route path={"/d/admin/farms"} element={<><Header/><Farms/></>} exact={true} />

            <Route path={"/d/admin/create/farms"} element={<><Header/><CreateFarm/></>} exact={true} />
            <Route path={"/d/admin/create/shops"} element={<><Header/><CreateShop/></>} exact={true} />

            <Route path={"/d/admin/edit/farms"} element={<><Header/><EditFarm/></>} exact={true} />
            <Route path={"/d/admin/edit/shops"} element={<><Header/><EditShop/></>} exact={true} />

            <Route path={"/d/order/preview/:id"} element={<><Header/><OrderPreview/></>} exact={true} />

            <Route path={"/d/create/category"} element={<><Header/><CreateCategory/></>} exact={true} />
            <Route path={"/d/edit/category/:slug"} element={<><Header/><EditCategory/></>} exact={true} />
            <Route path={"/d/create/sub"} element={<><Header/><CreateSubCategory/></>} exact={true} />
            <Route path={"/d/edit/sub/:slug"} element={<><Header/><EditSub/></>} exact={true} />
            <Route path={"/d/create/product"} element={<><Header/><Product/></>} exact={true} />
            <Route path={"/d/edit/product/:slug"} element={<><Header/><EditProduct/></>} exact={true} />
            <Route path={"/d/list/orders"} element={<><Header/><Orders/></>} exact={true} />

        </Routes>
      
    </>
  );
  // end of return
  
}

export default App;
