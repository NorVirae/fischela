import React, { useState, useEffect, useRef } from 'react';
import { deleteProduct, listProducts } from '../../functions/productFunction';
import { Link } from 'react-router-dom';

import {shopProducts} from '../../data/data'
import { useSelector } from 'react-redux';

import NairaFormat from '../../functions/NairaFormater';
import Cookies from 'js-cookie';



const SearchPage = (props)=>{

    const MultiThumbSlider = () => {
      return <div className='slider-container'>
              <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
              <input type="range" min="1" max="100" value="20" class="slider" id="myRange"></input>

      </div>
    }
    const [priceRange, setPriceRange] = useState([500, 200000])
    const SearchNav = (prop) => {
        return (<nav className={"card p-2"}> Search Parameters:
            <ul className = {"nav flex-column"}>
                    <li className={"nav-item m-2 p-2 border"}>
                      <label>{NairaFormat(eval(priceRange[0]))}</label>
                      <label>{NairaFormat(eval(priceRange[1]))}</label><hr/>
                      Search by Price
                    </li>

                    <li className={"nav-item m-2 p-2 border"}>
                      <label>{NairaFormat(eval(priceRange[0]))}</label>
                      <MultiThumbSlider />
                      <label>{NairaFormat(eval(priceRange[1]))}</label><hr/>
                      Search by Location
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

const searched = (keyword)=>(c)=>c.name.toLowerCase().includes(keyword)


  const [products, setProducts]  = useState(shopProducts)
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
    
        <div className="search-page">
          
          <div className="container grid grid-2-20-80 gap-2">

              <div className="">
                  <SearchNav/>
              </div>

              

            <div className={""}>
                <div className={'card my-1 p-2'}>
                  <input autoFocus className="form-control" value={keyword} placeholder={"Filter"} onChange={handleSearchChange}/>
                <div className={"flex justify-content-space-between"}>Results: <span>{count} items...</span></div>
            </div>

          <div className={'grid grid-5 gap-1'}>

          {products?products.filter(searched(keyword)).map((prod)=>{
                  count += 1
                  return <div onClick={e=>props.history.push("/d/product/info/"+prod.id)} className="card">
                  {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                  <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>

                  <div className="card-body">
                      <div className="card-title flex">
                          {prod.name}
                      </div>
                      <div className="rating">
                          <h6 className="lh-1">{NairaFormat(prod.price)}</h6>
                          <h6 className="text-secondary lh-1">
                              <i className="fa fa-fire pr-1"></i>Hot in Esut</h6>
                          <button className="btn lh-1">Add to Cart</button>
                      </div>
                  </div>
              </div>

                  }):null}
            
          </div>
          </div>
                </div>
            </div>
      
    
  


    
    
    )
    
    }
export default SearchPage