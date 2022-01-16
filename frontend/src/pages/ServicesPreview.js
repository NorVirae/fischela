
import Cookie from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts, readProduct } from '../functions/productFunction';






import { shopProducts } from '../data/data';
import NairaFormat from '../functions/NairaFormater';



const ServicePreview = (props)=>{
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
    
    let localProductList  = Cookie.getJSON("cart")
    console.log(localProductList)
    if(!DuplicateProd(product, localProductList.productList)){
      localProductList.productList.push(product)
      Cookie.set("cart", {productList:localProductList.productList}, { expires: 7 })
      let carTs = Cookie.getJSON("cart")


      console.log("THIS IS ADD TO CART FUNCTIONALITY",carTs.productList)
      window.location.reload()

    }

    else{
    }

    
  }
  const [product, setProduct]  = useState(shopProducts()[2])
  console.log(product)
  const loadProduct = ()=>{
    console.log(props.match.params.slug)
    readProduct(props.match.params.slug).then(res=>{
      console.log("THIS IS FROM THE PRODUCT", res.data)

      setProduct(res.data)
    })
  }

  useEffect(()=>{
    console.log(props.match.params)
    let checkCart = Cookie.getJSON("cart")
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
              <div className="page-title text-light">Services Detail</div>
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
                <h2>Job Title - Plumber</h2>
                <div className={"detail-list flex justify-content-space-between"}>
                  Gig Pay <span className=" ">
                    {NairaFormat(product.price)}
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                Location<span className=" ">
                    Enugu
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                Work time<span className=" ">
                  10:00am - 9:00pm
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                specialty<span className=" ">
                    Toilet Plumbing and fixing
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  Shop Location<span className=" ">
                    9th Mile, Enugu state
                  </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  name<span className=" ">
                    Oga Julius
                    </span>
                </div>

                <div className={"detail-list flex justify-content-space-between"}>
                  Available<span className=" ">
                    Yes
                    </span>
                </div>

                <div className='detail-list flex justify-content-space-between'>
               
                  <button className='btn-cart p-1 px-4 flex justify-content-center'>Hire</button>
                  {/* <button className='btn-cart p-1 px-1'>Add&nbsp;To&nbsp;Cart</button> */}
                  <button className='btn-cart p-1 px-1 flex justify-content-center'>Contact&nbsp;Professional</button>
                 

                </div>
                  
              </section>

              <section className='description'>
                  <div className={'bold '}>{NairaFormat(product.price)}</div>
                  <div className={''}>Description: <span className={""}>I do all Toilet and bathroom fixing, i also fix kitchen sink, i fix sock pipes and sanitary holes, am the best at what i do.</span></div>
                  <div className={''}>You can talk to this Professional on whatsapp click the icon <span className='fab fa-whatsapp text-success fa-2x'></span></div>
                  
                  <div className='review-container mt-5 flex flex-column p-1'>
                    <h3>Reviews :-</h3>
                    <div className='review p-1 m-1'>
                      <div className='review-arrow'></div>
                      <i className='fa fa-stars '></i>
                      He is always right on time 
                    </div>

                    <div className='review p-1 m-1'>
                      <div className='review-arrow'></div>

                      <i className='fa fa-stars '></i>
                      I will recommend him to any one who would really want a good fix for there home
                    </div>
                  </div>
              </section>
            </div>
          </section>
      </>
          
      
    
  


    
    
    )
    
    }
export default ServicePreview;