import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts } from '../functions/productFunction';
import { Card, Avatar, Rate } from 'antd';
import {Image, Transformation} from 'cloudinary-react';
import { Carousel } from 'antd';




import { EditOutlined, DeleteOutlined, SettingOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import NairaFormat from '../functions/NairaFormater';
import Cookies from 'js-cookie';
const BgElement = Element.BgElement;


const { Meta } = Card;

const Home = (props)=>{

  const onChange = (a, b, c)=>{
    // console.log(a, b, c)
  }
  

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}
  const [products, setProducts]  = useState([{title:'Dell Latitude Laptop', category:18, subcategory:128, price:"60000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,'},
  {name:'Bread and Egg', category:13, subcategory:123, price:"550", rating:4, description:'2 eggs and one yale bread'},
{name:"Versace Trouser", category:14, subcategory:124, price:"2500", rating:5, description:"Black slim fit"},
  {name:"surrati perfume", category:15, subcategory:125, price:"5000", rating:3, description:"apple smell oud"},
{name:"Rice and Chicken", category:16, subcategory:126, price:"1700", rating:1, description:"Rice with salad and roasted chicken"},
{name:"Chukason", category:16, subcategory:126, price:"50000", rating:1, description:"he likes eating fish"},

{title:"Bole", price:"1200", category:17, subcategory:127, rating:2, description:"Roasted plantain mixed with yam and potato"}])
  const loadProducts = ()=>{

    listProducts().then(res=>{
      console.log("THIS IS FROM THE PRODUCT",)
      setProducts(res.data)

    })
  }

  useEffect(()=>{
    if (!Cookies.getJSON('cart')){
      Cookies.set("cart", {productList:[]})
    }

    // loadProducts()

    return ()=>{}
  }, [])

    return (
    
        <div className="container-fluid">



            <Carousel autoplay afterChange={onChange}>
              <div>
                <h3 style={contentStyle}>A Market Place for and Only for Hungry peopele</h3>
              </div>
              <div>
                <h3 style={contentStyle}>You will Never be Hungry again</h3>
              </div>
              <div>
                <h3 style={contentStyle}> <img src={require('../images/comingSoon/Fischelaltd.png')} />Fischela is Here for You</h3>
              </div>
              <div>
                <h3 style={contentStyle}>You are Guaranteed to get all Your goods within 24 hours.</h3>
              </div>
            </Carousel>

          <div className="row  justify-content-center">

         
          <h1 className="alert alert-info display-block col-lg-12 text-center">New  Arrivals!</h1>
          
            <hr/>
          </div>

          <div  className="row justify-content-center">
                  <fieldset className={'form-group col-lg-6 p-2 border'}>
                  <EnvironmentOutlined />
                  <select autoFocus onChange={e=>props.history.push(e.target.value)} className={'form-control d-inline p-1 col-lg-4'}>
                    <option>Location</option>
                    <option value={"/location/madonna-elele"} >Madonna University Elele</option>
                    <option value={"/location/enugu-independence"} >Enugu - Independence Layout</option>
                    <option value={"/location/izuchukwu-street"} >Izuchukwu street</option>

                    </select><label className={'alert alert-info'}> Select Your location to see products closer to you in order to get goods faster</label></fieldset>
          </div>

          <div  className="row justify-content-center">

         
            
              {products ? products.map(prod => (<Card
                className={'border blue-shadow m-1 p-1'}
                 hoverable
                onClick={e=>props.history.push("/product/info/"+prod.slug)}

                style={{ width:200 }}
                cover={<img src={require("../images/comingSoon/Fischelaltd.png")} />
                // <Image className ={"img-fluid"} publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="150" width="200" crop="thumb" />
            }  

            
                   >
                  <Rate count={5} value={prod.rating} onChange={e=>console.log(e)} style={{width:'100%'}} /> (2)

                <Meta className='m-0 p-0 bold' title={NairaFormat(prod.price)} />
                <Meta className='m-0 p-0 bold' title={prod.name} description={NairaFormat(prod.price)} />

                

            </Card>
            )):
            <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card>
        }


        </div>

{/* List of Shops */}
        {/* <div className="row  justify-content-center">
          <hr/>
          <h1 className="alert alert-info display-block col-lg-12 text-center">Shops</h1>
          <hr/>
          </div> */}

      {/* <div className="row justify-content-center"> */}

              {/* shop 1 */}
          {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Debbie Abacha'} description={"sells Abacha with onions and fish"} />
        </Card> */}

      {/* shop 2 */}

      {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Johns Laptop'} description={"Sells Laptops"} />
        </Card> */}

        {/* shop 3 */}

        {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Kotc phones'} description={"Sells any Version of iphone"} />
        </Card> */}

        {/* shop 4 */}

        {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Nma Shawama'} description={"Sells Chicken and Beef sharwama"} />
        </Card> */}

      {/* shop 5 */}

      {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Mike Bread and Egg'} description={"Sells Bread and Egg"} />
        </Card> */}
          {/* </div> */}
          </div>
      
    
  


    
    
    )
    
    }
export default Home