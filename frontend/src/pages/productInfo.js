import Cookie from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';
import {useParams} from 'react-router-dom';


import { shopProducts } from '../data/data';
import NairaFormat from '../functions/NairaFormater';



const ProductInfo = (props)=>{
  const params = useParams()
  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}
  const emptyCart = (e)=>{
    Cookie.remove("cart")
    window.location.reload()
  }

  const DuplicateProd = (product, localProductList) => {
    console.log("THIS IS INSIDE CHECKDUP")
    let duplicated = false
    for (let count = 0; count<localProductList.length; count++){
      console.log("COMPARER", localProductList[count]._id, "COMPARED", product._id)
      if(localProductList[count]._id==product._id){
        duplicated = !duplicated
      }
    }
    return duplicated;

  }
  const AddToCart = (e)=>{
    
    let localProductList  = Cookie.get("cart")
    console.log(localProductList)
    if(!DuplicateProd(product, localProductList.productList)){
      localProductList.productList.push(product)
      Cookie.set("cart", {productList:localProductList.productList}, { expires: 7 })
      let carTs = Cookie.get("cart")


      console.log("THIS IS ADD TO CART FUNCTIONALITY",carTs.productList)
      window.location.reload()

    }

    else{
    }

    
    
  }
  const [product, setProduct]  = useState(shopProducts()[params.id])
  console.log(product)
  const loadProduct = ()=>{
    console.log(params.slug)
    readProduct(params.slug).then(res=>{
      console.log("THIS IS FROM THE PRODUCT", res.data)

      setProduct(res.data)
    })
  }

  useEffect(()=>{
    console.log(params)
    let checkCart = Cookie.get("cart")
    if (!checkCart){
      Cookie.set("cart", {productList:[]}, { expires: 7 })
    }
    loadProduct()

    return ()=>{}
  }, [])

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
            <div className='container grid grid-2-per gap-1'>
              <section className="card">
                  {product ? <div className="">
                                <div className={''}>
                        
                                    <div autoPlay infiniteLoop showArrows showStatus showThumbs={true}>                   
                                      {product.images?product.images.map(e=>{
                                          return <div><img src={e.src} /></div>}):null}
                                                  </div>        
                                             
                                </div>
                              </div>:null}
                  
              </section>
                

                

              <section className={"card p-3 flex flex-column justify-content-space-between"}>
                <div className={"detail-list flex justify-content-space-between"}>
                  Price <span className=" ">
                    {NairaFormat(product.price)}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  Price <span className=" ">
                    {product.price}
                    </span>
                </div>
                <div className={"detail-list flex justify-content-space-between"}>
                brand<span className=" ">
                    {product.brand}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                qty<span className=" ">
                  {product.qty}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                brand<span className=" ">
                    {product.brand}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  location<span className=" ">
                    {product.location}
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  color<span className=" ">
                    {product.color}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  shipping<span className=" ">
                    {product.shipping}
                    </span>
                </div>

                <div className='detail-list flex justify-content-space-between'>
               
                  <button className='btn-cart p-1 px-4'>Purchase</button>
                  {/* <button className='btn-cart p-1 px-1'>Add&nbsp;To&nbsp;Cart</button> */}
                  <button className='btn-cart p-1 px-1'>Contact&nbsp;Dealer</button>
                 

                </div>
                  
              </section>

              <section className='description'>
                  <div className={'bold '}>{NairaFormat(product.price)}</div>
                  <div className={''}>Description: <span className={""}>{product.description}</span></div>
                  <div className={''}>Contact this Dealer <span className='fab fa-whatsapp text-success fa-2x'></span></div>

              </section>
            </div>
          </section>
      </>
          
      
    
  


    
    
    )
    
    }
export default ProductInfo;