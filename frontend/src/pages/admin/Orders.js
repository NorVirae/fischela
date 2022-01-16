import React, { useState, useEffect, useRef } from 'react';
import AdminNav from '../../components/nav/AdminNav'
import { deleteProduct, listProducts } from '../../functions/productFunction';




import { listOrders } from '../../functions/orderFunctions';
import NairaFormat from '../../functions/NairaFormater';
import { orderList } from '../../data/data';
import Footer from '../../components/nav/Footer';
import { useNavigate } from 'react-router-dom';
const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}




const Orders = (props) => {
    const authToken = "user.token"
    const navigate = useNavigate()
    


    const [orders, setOrders] = useState(orderList())
    const loadOrders = ()=>{
        listOrders().then(res=>{
            setOrders(res.data)
            console.log(res.data)
        })
    }
    useEffect(() => {
        loadOrders()
      return () => {
        
      };
    }, [])
    return <div className="orders">
                <div className={"container grid grid-2-20-80"}>
                    <div className={""}>
                            <AdminNav/>
                    </div>


            

            <div className=""> 
                <h4 className={'alert alert-secondary'}>Orders</h4>
            {/* cols */}
            <div className={"grid grid-5 gap-1"}>
                
            {orders ? orders.map((ord, index) => {
            
            return <div onClick={e=>navigate("/d/order/preview/"+index)} className="order-sum card flex flex-column p-1">
                       
                <span className={'flex justify-content-space-between  p-1'}>Product Name<span>{ ord.productName}</span></span>
                <span className={'flex justify-content-space-between  p-1'}>Price of Commodity:<span>{ NairaFormat(ord.price)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1 border'}>Amount Paid in :<span>{NairaFormat(ord.amountpaid)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Buyer Deliver :<span>{ord.BDelivery}...</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Seller Delivery :<span>{ord.SDelivery}...</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Approved :<span>{JSON.stringify(ord.approved)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Location :<span>{JSON.stringify(ord.location)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Receieved Payment :<span>{JSON.stringify(ord.paid)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Seller paid :<span>{JSON.stringify(ord.spaid)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Refund :<span>{JSON.stringify(ord.refund)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Paid :<span>{JSON.stringify(ord.paid)}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Date of Order :<span>{JSON.stringify(ord.timeOfOrder.slice(0, 10))}</span></span>
                <span className={'flex justify-content-space-between ord-hide p-1'}>Time of Order :<span>{JSON.stringify(ord.timeOfOrder.slice(11, 19))}</span></span>

                <button onClick={e=>navigate("/d/order/preview/"+index)} className="col-lg-12 btn-cart">View Order</button>
                <button className="col-lg-12 ord-hide btn-cart">Confirm Delivery</button>
                <button className="col-lg-12 ord-hide btn-cart">Dispatch</button>
                <button className="col-lg-12 ord-hide btn-cart">Approved Order</button>






                
                
                
                

            </div>
    }  ):null}
            
            </div>

            </div>
            
            </div>
         
           </div>
}

export default Orders;