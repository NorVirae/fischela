import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts } from '../../functions/productFunction';
import { Card, Avatar } from 'antd';
import {Image, Transformation} from 'cloudinary-react';
import { Carousel, Rate, Slider } from 'antd';
import { Link } from 'react-router-dom';



import { EditOutlined, DeleteOutlined, SettingOutlined, } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import NairaFormat from '../../functions/NairaFormater';
import Cookies from 'js-cookie';
import SearchNav from '../../components/nav/SearchNav';
const BgElement = Element.BgElement;


const { Meta } = Card;

const SearchPage = (props)=>{
    const [priceRange, setPriceRange] = useState([500, 200000])
    const SearchNav = (prop) => {
        return (<nav className={""}> Search Parameters:
            <ul className = {"nav flex-column"}>
                <li className={"nav-item m-2 p-2 border"}>
                    <Rate count={5} value={3} onChange={e=>console.log(e)} style={{width:'100%'}} /> <hr/>
                    Search by Ratings
                    </li>
    
                    <li className={"nav-item m-2 p-2 border"}>
                    <label>{NairaFormat(eval(priceRange[0]))}</label>
                    <Slider range={{draggableTrack:true}} defaultValue={priceRange} value={priceRange} max={1000000} mark={{40:5}} onChange={e=>{setPriceRange(e)}} style={{width:'100%'}} /> 
                    <label>{NairaFormat(eval(priceRange[1]))}</label><hr/>
                    Search by Price
                    </li>
    
            </ul>
    
        </nav>)
    
    
    }

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



const [keyword, setKeyword] = useState('')
let count = 0


const handleSearchChange = (e) =>{
  e.preventDefault()
  setKeyword(e.target.value.toLowerCase())
}

const searched = (keyword)=>(c)=>c.title.toLowerCase().includes(keyword)


  const [products, setProducts]  = useState([{title:'Dell Latitude Laptop', category:18, subcategory:128, price:"60000", rating:5, description:'core i5, 33 inches screen, 500GB HDD,'},
                                              {title:'Bread and Egg', category:13, subcategory:123, price:"550", rating:4, description:'2 eggs and one yale bread'},
                                            {title:"Versace Trouser", category:14, subcategory:124, price:"2500", rating:5, description:"Black slim fit"},
                                              {title:"surrati perfume", category:15, subcategory:125, price:"5000", rating:3, description:"apple smell oud"},
                                            {title:"Rice and Chicken", category:16, subcategory:126, price:"1700", rating:1, description:"Rice with salad and roasted chicken"},
                                            {title:"Chukason", category:16, subcategory:126, price:"50000", rating:1, description:"he likes eating fish"},

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
          
          <div className="row justify-content-center">

              <div className="col-lg-3">
                  <SearchNav/>
              </div>

              

            <div className={"col-lg-9"}>


                

                <div className={'form-group col-lg-12'}>
            <input autoFocus className="form-control" value={keyword} placeholder={"Filter"} onChange={handleSearchChange}/>
            <hr/>
            Results: {count} items...
            </div>

                <div className={'row'}>
                
              {/* {products ? products.map(prod => (<Card
                className={'border blue-shadow m-1 p-1'}
                 hoverable
                onClick={e=>props.history.push("/product/info/"+prod.slug)}

                style={{ width:200 }}
                cover={<img className ={"img-fluid"} src={""}
                // publicId={prod.images[0].public_id} version="1573726751" cloud_name={config.cloud_name} secure="true" 
                alt="Casual Jacket" 
                // height="150" width="200" crop="thumb" 
                />
            }  

            
                   >
                       
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
        } */}

        {/* testing search begin*/}

        

        {products?products.filter(searched(keyword)).map((prod)=>{
                count += 1
                return  <Card
                className={'border blue-shadow m-1 p-1'}
                 hoverable
                style={{ width:200 }}
                cover={<img className ={"img-fluid"} src={require('../../images/comingSoon/Fischelaltd.png')} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
            } 
                   >  
                    <Rate count={5} value={prod.rating} onChange={e=>console.log(e)} style={{width:'100%'}} /> (2)

                <Meta className='m-0 p-0 bold' title={NairaFormat(prod.price)} />
                  
                <Meta className='m-0 p-0 bold' title={prod.title} description={prod.description} />
            </Card>

                }):null}
          {/* {JSON.stringify(products)} */}
        {/* test search end */}
{/* product 1 */}
          {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

      {/* product 2 */}

      {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

        {/* product 3 */}
{/* 
        <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

        {/* product 4 */}

        {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

      {/* product 5 */}
{/* 
      <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
      </Card> */}

        {/* product 6 */}
{/* 
        <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}
        {/* product 7 */}
        {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

      {/* product 8 */}

      {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

        {/* product 9 */}

        {/* <Card
            className={'border blue-shadow m-1 p-1'}
             hoverable
            style={{ width:200 }}
            cover={<img className ={"img-fluid"} src={'../images/Fischelaltd.png'} version="1573726751"   alt="Casual Jacket" height="150" width="200" />
        } 
               >  
            <Meta className='m-0 p-0 bold' title={'Laptops'} description={NairaFormat(70000)} />
        </Card> */}

        </div>
        </div>
              </div>
          </div>
      
    
  


    
    
    )
    
    }
export default SearchPage