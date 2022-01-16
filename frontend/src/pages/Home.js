import React, { useEffect, useState } from 'react';
import logo from "../images/fischela.png";
import neighbors from "../images/Neighbours.jpg";
import {Link, useNavigate} from 'react-router-dom';
import Product1 from '../images/products/fischy.jpeg';
import shop1 from '../images/toppix.jpg';
import farm1 from '../images/farm1.jpg';
import NairaFormat from '../functions/NairaFormater';
import { listProducts } from '../functions/productFunction';
import Cookies from 'js-cookie';
import  Footer from '../components/nav/Footer'
import { deals, hotFarms, hotProducts, hotShops, shopProducts } from '../data/data';
import { useQuery, gql } from '@apollo/client';


const query = gql`
        query{
            users{
                name
                email
            }
        }
`

const Home = (props) => {

    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const {loading, data, error} = useQuery(query)

    const close = () => {
        setVisible(false)
    }

    const open = () => {
        setVisible(true)
    }

    console.log(props)
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
      const [products, setProducts]  = useState(shopProducts())
      const [shops, setShops]  = useState(hotShops())
      const [farms, setFarms]  = useState(hotFarms())

      const loadProducts = async ()=>{
    
        listProducts().then(res=>{
          setProducts(res.data)
          console.log(res.data)
    
    
        })
      }
    
      useEffect(()=>{
        
        
        // loadProducts()
    
        console.log(products)
    
        return ()=>{}
      }, [])

    return (<>
    
            

            {/* Purpose */}

            <section className="purpose">
                {/* <button onClick={e=>console.log(data)}>CLICK</button> */}
            <div className={visible?"modal show":"modal"}>
                <div className="model-content grid">
                    <div className="modal-header flex justify-content-space-between">
                        <h6>Fischela</h6>
                        <h6 className="close-btn" onClick={e=>close()}>x</h6>
                    </div>
                    <div className="main-content grid">
                        <div className="card">
                            <input placeholder="Search Location" className="form-control" onChange={""} />
                            <button className="btn btn-info">Search</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container grid grid-2 gap-2">
                    <div className="aim">
                        <h2>The Store Next Door!</h2>
                        <p>Get your orders within minutes and see products all around you,
                            In your Neighbourhood, Hostels, University, Estates,
                             streets in just a click of a button.</p>

                        <button className="btn btn-outline">Order Food</button>
                        <button onClick={e=>open()} className="btn btn-info"><i class="fas fa-location text-light"></i>Checkout your Neighbourhood!</button>

                    </div>

                    <img src={neighbors} alt="neightbors" />
                    


                </div>

                
            </section>

            {/* Products section */}
        <div className="design-wrapper">
            <section className="products">
                
                <div className="container">
                    {/*tAG */}
                <h2>#Hot and Trending Products</h2>
                    {/* start of card */}
                    <div className="grid grid-5 gap-1">
                    {products ? products.map(prod => {
                        return (<div onClick={e=>navigate("/d/product/info/"+prod.id)} className="card">
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
                        </div>)}):null}
                    {/* end of card */}
                  
                </div>
                
                </div>
            </section>

            {/* end of prodouct section */}



            {/* Shop section */}

            <section className="shops">
                
                <div className="container">
                    {/*tAG */}
                <h2>#Hot and Trending Shops</h2>
                    <div className="grid grid-5 gap-1">
                    
                    {/* start of card */}
                    {shops ? shops.map(prod => {
                        return (<div className="card" onClick={e=>navigate("/d/shop/"+prod.id)}>
                            {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                            <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
                            <div className="card-body">
                                <div className="card-title flex">
                                    {prod.name}

                                </div>
                                <div className="rating">
                                    <h6 className="text-secondary lh-1">
                                    <i className="fa fa-fire pr-1"></i>Hot in Enugu</h6>
                                </div>
                            </div>
                        </div>)}):null}
                    {/* end of card */}

                    
                    
                </div>
                
                </div>
            </section>

            {/* end of Shop section */}

            {/* Farm section */}

            <section className="farms">
                
                <div className="container">
                    {/*tAG */}
                <h2>#Hot and Trending Farms</h2>
                    <div className="grid grid-5 gap-1">
                    
                    {/* start of card */}
                    {farms ? farms.map(prod => {
                        console.log(prod.id, "HERE")
                        return (<div className="card" onClick={e=>navigate("/d/farm/"+prod.id)}>
                            {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                            <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
                            <div className="card-body">
                                <div className="card-title flex">
                                    {prod.name}

                                </div>
                                <div className="rating">
                                    <h6 className="text-secondary lh-1">
                                    <i className="fa fa-fire pr-1"></i>Hot in Enugu</h6>
                                </div>
                            </div>
                        </div>)}):null}
                    {/* end of card */}  
                    
                    </div>
                
                </div>
            </section>

            {/* end of Farm section */}



           <Footer/>
        </div>
        
     </>)
}

export default Home