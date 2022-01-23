import Cookie from 'js-cookie';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';


import { shopProducts } from '../data/data';
import NairaFormat from '../functions/NairaFormater';
import {useQuery} from "@apollo/client";
import { fetchOneProductQuery } from '../constants/schemas';


const ProductInfo = (props)=>{
  const params = useParams()
  
  const {loading, data, error} = useQuery(fetchOneProductQuery, {variables:{id:params.id}})
  
  const [product, setProduct]  = useState(data)
  console.log(product)
 
  useEffect(()=>{
    console.log(params)
    if(!loading){
      console.log(error, "THIS IS THE ERRROR")
      console.log(data, "THIS IS THE DATA")
      setProduct(data.product)
    }
    return () => {

    }
  }, [loading])


    return (
      
        <>   
          <section className="">
            <div className='container flex justify-content-center bg-primary'>
              <div className="page-title text-light">Product Information</div>
            </div>
          </section>

          <hr/>
          {/* <Image key ={e.public_id} publicId={e.public_id}
                className="m-1 img-fluid" 
                version="1573726751" cloud_name={config.cloud_name}
                 secure="true" alt="Casual Jacket" height="auto" width="500" /> */}
          <section className='deal'>
            {JSON.stringify(data)}
            <div className='container grid grid-2-per gap-1'>
              <section className="card">
                  {product ? <div className="">
                                <div className={''}>
                        
                                    <div >                   
                                      {product.images?product.images.map(e=>{
                                          return <div><img src={e.src} /></div>}):null}
                                                  </div>        
                                             
                                </div>
                              </div>:null}
                  
              </section>
                

                

              <section className={"card p-3 flex flex-column justify-content-space-between"}>
                <div className={"detail-list flex justify-content-space-between"}>
                  Price <span className=" ">
                    {product?NairaFormat(product.price):"--.--"}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  Price <span className=" ">
                    {product?NairaFormat(product.price):"--.--"}
                    </span>
                </div>
                <div className={"detail-list flex justify-content-space-between"}>
                brand<span className=" ">
                    {product?product.brand:"----"}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                qty<span className=" ">
                  {product?product.qty:"---"}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                brand<span className=" ">
                    {product?product.brand:"---"}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  location<span className=" ">
                    {product?product.location:"---"}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  color<span className=" ">
                    {product?product.color:"---"}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  shipping<span className=" ">
                    {product?product.shipping:"---"}
                    </span>
                </div>

                <div className='detail-list flex justify-content-space-between'>
               
                  <button className='btn-cart p-1 px-4'>Purchase</button>
                  {/* <button className='btn-cart p-1 px-1'>Add&nbsp;To&nbsp;Cart</button> */}
                  <button className='btn-cart p-1 px-1'>Contact&nbsp;Dealer</button>
                 

                </div>
                  
              </section>

              <section className='description'>
                  <div className={'bold '}>{product?NairaFormat(product.price):"---"}</div>
                  <div className={''}>Description: <span className={""}>{product?product.description:"---"}</span></div>
                  <div className={''}>Contact this Dealer <span className='fab fa-whatsapp text-success fa-2x'></span></div>

              </section>
            </div>
          </section>
      </>
          
      
    
  


    
    
    )
    
    }
export default ProductInfo;