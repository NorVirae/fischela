import React from 'react';
import AdminNav from '../../components/nav/AdminNav';
import Footer from '../../components/nav/Footer';
import { orderList } from '../../data/data';
import NairaFormat from '../../functions/NairaFormater';
import {useNavigate, useParams} from 'react-router-dom';

const OrderPreview = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const ord = orderList()[params.id]

    return <>

    <div className='order-preview'>
    <span className='pl-5 prev-button' onClick={e=>navigate("/d/list/orders")}>{"<<"}back</span>{'  '}
    <h3 className='text-center'>Order Preview</h3>
        <div className='container grid grid-2-20-80'>
            <AdminNav/>
            <div className="order-sum card flex flex-column p-1 justify-content-space-between">
            
                <span className={'flex justify-content-space-between p-1'}>Product Name<span>{ ord.productName}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Price of Commodity:<span>{ NairaFormat(ord.price)}</span></span>
                <span className={'flex justify-content-space-between p-1 border'}>Amount Paid in :<span>{NairaFormat(ord.amountpaid)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Buyer Deliver :<span>{ord.BDelivery}...</span></span>
                <span className={'flex justify-content-space-between p-1'}>Seller Delivery :<span>{ord.SDelivery}...</span></span>
                <span className={'flex justify-content-space-between p-1'}>Approved :<span>{JSON.stringify(ord.approved)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Location :<span>{JSON.stringify(ord.location)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Receieved Payment :<span>{JSON.stringify(ord.paid)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Seller paid :<span>{JSON.stringify(ord.spaid)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Refund :<span>{JSON.stringify(ord.refund)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Paid :<span>{JSON.stringify(ord.paid)}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Date of Order :<span>{JSON.stringify(ord.timeOfOrder.slice(0, 10))}</span></span>
                <span className={'flex justify-content-space-between p-1'}>Time of Order :<span>{JSON.stringify(ord.timeOfOrder.slice(11, 19))}</span></span>
                <div className='flex flex-column-sm'>
                    <button className="btn-cart">Have you Delivered?</button>
                    <button className="btn-cart">Approved&nbsp;Order</button>
                    <button className="btn-cart">Confirm&nbsp;Delivery</button>
                    <button className="btn-cart">Dispatch</button>
                </div>
       
             </div>
         </div>
   
    </div>
</>
}

export default OrderPreview;