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
import { listProductQuery } from '../constants/schemas';
import AllProductsComp from '../components/homepage/AllProducts';
import AllShopsComp from '../components/homepage/AllShops';
import AllFarmsComp from '../components/homepage/AllFarms';


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

      const AllProducts = useQuery(listProductQuery)
      const AllShops = useQuery(listProductQuery)
      const AllFarms = useQuery(listProductQuery)


     
    
      useEffect(()=>{
        
        
        // loadProducts()
        if(!AllProducts.loading){
            console.log("data received")
            console.log(AllProducts.data)
            setProducts(AllProducts.data.products)
        }
    
    
        return ()=>{}
      }, [AllProducts.loading])

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
            <AllProductsComp />

            {/* end of prodouct section */}

            <AllShopsComp />

            {/* Farm section */}

            <AllFarmsComp />

            {/* end of Farm section */}



           <Footer/>
        </div>
        
     </>)
}

export default Home