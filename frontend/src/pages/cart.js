
import Cookie, { set } from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';



import { useDispatch, useSelector } from 'react-redux';

import NairaFormat from '../functions/NairaFormater';
import { SpreadQty } from '../functions/spread';
import { createOrder, updateOrder } from '../functions/orderFunctions';
import {PaystackButton} from 'react-paystack';
import { shopProducts } from '../data/data';


const Cart = (props)=>{
  const [orderSuccess, setOrderSuccess] = useState([])
  const [phone, setPhone] = useState("07025488825")
  const [name, setName] = useState("Frank Norbert Mbah")

  const [amount, setAmount] = useState(100)
  const [email, setEmail] = useState("norbertmbafrank@gmail.com")
  const publicKey = "pk_test_c0198a35cd0526b34365d6241d8c218fa33db418"

  const [checkt, setCheckt] = useState(false)
  const [total, setTotal] = useState(0)
  const [qtysy, setQtysy] = useState(0)
  const user = useSelector(state=>state.user)
  const [products, setProducts] = useState(shopProducts)
  const [emptys, setEmptys] = useState(typeof products != 'undefined' && products.length > 0?false:true)
  console.log(products)

  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    if(user && user.token){
    setCheckt(true)
    setAmount(total * 100)
    let neworder = products
    neworder.total = total
    neworder.BuyerEmail = user.email
    const authToken = user.token
    console.log(authToken)
    console.log(neworder)
    createOrder( {neworder, authToken}).then((res)=>{
      setOrderSuccess(res.data.successp)
      console.log(res.data.successp)})
    console.log("THIS IS THE PRODUCT FROM HANDLE CHECKOUT",products)}
    else{
      props.history.push({pathname:"/d/login", state:{msg:"Login to checkout", role:"cart"}})
    }
  }

  // const setProds = ({e, prod, prods})=>{
  //   let newProds = products

  //   for (let ct = 0; ct<products.length; ct++){
  //     if(newProds[ct]._id == prod._id){
  //       newProds[ct].newQty = Number(e)
  //     }
  //   }

  //   setProducts(newProds)
  //   Cookie.set("cart", {productList:products})
  //   calculateTotal()
  //   SpreadQty({prod, prods})
  //   console.log(products)
  // }
  
  // const SpreadQty = ({ prod, prods}) => {
    

  //   let qtyss = []
  //   for (let count = 1; count<=Number(prods); count++){
  //     console.log("THIS IS FROM THE COUNT",count)
  //     qtyss.push(count)
  //   }

  //   return (<Select onChange={e=>{setProds({e, prod, prods})}} value={prods.newQty} defaultValue={1} style={{ width: '50%' }} placeholder="Tags Mode" >
  //             {qtyss.map((nums)=>{return <Option key={nums} >{nums}</Option>})}
  //             </Select>)
  // }
  
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  const calculateTotal = ()=>{
    let sum = 0
    let newProd = products
    if(Cookie.getJSON('cart')){
      for (let count= 0; count<products.length; count++){
          sum = sum + (Number(products[count].price) * Number(products[count].newQty)) 
    }
    setTotal(sum)


  }
}

let componentProps = {
  email,
  amount,
  metadata: {
    name,
    phone,
  },
  publicKey,
  text: "Pay Now",
  onSuccess: (result) =>{
    console.log("MONEY RESULT", result)
    updateOrder(orderSuccess, user.token).then((res)=>{
      console.log("THIS IS FROM THE PAYSTACK UPDATE",res)})
      
    alert("Thanks for doing business with us! Come back soon!!")
    },
  onClose: () => alert("Wait! You need this oil, don't go!!!!"),
}


  const insertNewQty = () => {
    let newProd = products
    for (let count= 0; count<products.length; count++){
      if (!newProd[count].newQty){
        newProd[count].newQty = 1}
  }
    setProducts(newProd)
  }


  useEffect(()=>{
    insertNewQty()
    console.log(products)
    calculateTotal()
    return()=>{}
  },[])

  return  <div>
              <div className = {"cart"}>
                <h3 className='ml-4'> Cart Items...</h3>
                <div className = {"container grid grid-2-80-20  gap-1"}>
                {checkt?
            <section className={"check-out hide-lg"}>
                <div className="card p-1">
                    {!checkt?<PaystackButton className={"btn-checkout"} {...componentProps} />:<button disabled={emptys}  onClick={handleCheckout}
                    className={"btn-checkout"}>{"Continue to Check Out"}</button>}
                    <ul className='flex flex-column justify-content-space-between cart-list'>
                  {products?products.map(prod=>{
                  
                  return <li className={"flex justify-content-space-between chk-out-item py-1"}>
                      
                      {prod.name +"~~ x "+prod.newQty}<span className="">
                        {NairaFormat(prod.price)}
                        </span>
                      </li>}):null}
                    
                   
                    </ul>

                    <div className={"flex justify-content-space-between chk-out-item pt-2"}>
                      
                      Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                     
                  </div>
            </section>:null}


            {!checkt? <section className={"pay hide-lg"}>
              Input your Delivery address
                <div className="card p-1">
                   

                    <fieldset>
                      <input value={"Nigeria"} disabled className="form-control" placeholder="Country" />
                    </fieldset>

                    <fieldset>
                      <input value={"Rivers state"} disabled className="form-control" placeholder="State" />
                    </fieldset>

                    <fieldset>
                      <input value={"Elele"}disabled  className="form-control" placeholder="City" />
                    </fieldset>

                    <fieldset>
                      <input value={"Madonna University"} className="form-control" placeholder="Place" />
                    </fieldset>


                    <div className={"flex justify-content-space-between chk-out-item pt-2"}>
                      
                      Shipping <span className="">
                        {NairaFormat(500)}
                        </span>
                      </div>

                      <div className={"flex justify-content-space-between chk-out-item pt-2 "}>
                      
                      Sub-Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                    <div className={"flex justify-content-space-between chk-out-item py-2"}>
                      
                      Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                     
                      {!checkt?<PaystackButton className={"btn-checkout"} {...componentProps} />:<button disabled={emptys}  onClick={handleCheckout}
                    className={"btn-checkout"}>{"Continue to Check Out"}</button>}
                  </div>
            </section>:null}
            {/* first ends here */}
                  <div className = {"grid gap-1"}>
                
                        {typeof products != 'undefined' && products.length > 0 ?products.map(prod=>{
                        return <div className='card flex flex-column-sm gap-1'>
                                    <div className='cart-remove p-1'>x remove</div>
                                    <img className='flex-2' src={prod.images[0].src} />
                                    <div className='flex-2 flex justify-content-center align-items-center cart-card-item' >Name | {prod.name}</div>
                                    <div className='flex-2 flex justify-content-center align-items-center cart-card-item' >
                                      <select value={prod.qty}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>5</option>
                                        <option>10</option>
                                        <option>12</option>

                                        </select></div>
                                    <div className='flex-2 flex justify-content-center align-items-center cart-card-item' >Price | {NairaFormat(prod.price)}</div>
                                    <div className='flex-2 flex justify-content-center align-items-center cart-card-item' >Shop | Mr James Shop</div>



                              </div>

                        }):<div> Cart is Empty!</div>}

            </div>
          {checkt?
            <section className={"check-out hide-sm"}>
                <div className="card p-1">
                    {!checkt?<PaystackButton className={"btn-checkout"} {...componentProps} />:<button disabled={emptys}  onClick={handleCheckout}
                    className={"btn-checkout"}>{"Continue to Check Out"}</button>}
                    <ul className='flex flex-column justify-content-space-between cart-list'>
                  {products?products.map(prod=>{
                  
                  return <li className={"flex justify-content-space-between chk-out-item py-1"}>
                      
                      {prod.name +"~~ x "+prod.newQty}<span className="">
                        {NairaFormat(prod.price)}
                        </span>
                      </li>}):null}
                    
                   
                    </ul>

                    <div className={"flex justify-content-space-between chk-out-item pt-2"}>
                      
                      Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                     
                  </div>
            </section>:null}


            {!checkt? <section className={"pay hide-sm"}>
              Input your Delivery address
                <div className="card p-1">
                   

                    <fieldset>
                      <input value={"Nigeria"} disabled className="form-control" placeholder="Country" />
                    </fieldset>

                    <fieldset>
                      <input value={"Rivers state"} disabled className="form-control" placeholder="State" />
                    </fieldset>

                    <fieldset>
                      <input value={"Elele"}disabled  className="form-control" placeholder="City" />
                    </fieldset>

                    <fieldset>
                      <input value={"Madonna University"} className="form-control" placeholder="Place" />
                    </fieldset>


                    <div className={"flex justify-content-space-between chk-out-item pt-2"}>
                      
                      Shipping <span className="">
                        {NairaFormat(500)}
                        </span>
                      </div>

                      <div className={"flex justify-content-space-between chk-out-item pt-2 "}>
                      
                      Sub-Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                    <div className={"flex justify-content-space-between chk-out-item py-2"}>
                      
                      Total<span className="">
                        {NairaFormat(total)}
                        </span>
                      </div>

                     
                      {!checkt?<PaystackButton className={"btn-checkout"} {...componentProps} />:<button disabled={emptys}  onClick={handleCheckout}
                    className={"btn-checkout"}>{"Continue to Check Out"}</button>}
                  </div>
            </section>:null}
                    </div>
                    </div>
            </div>
                    
          
      
    
  


    
    
    
    
}

export default Cart;