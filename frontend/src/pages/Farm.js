
import React, {useEffect, useState} from 'react';
import NairaFormat from '../functions/NairaFormater';
import  Footer from '../components/nav/Footer';
import { deals } from '../data/data';
import {useNavigate, useParams} from 'react-router-dom';
import FarmOwner from "../images/rice-farm-owner.jpg"
import FarmImg  from '../images/rice-farm.jpg'
import { useQuery } from '@apollo/client';
import { listOneFarmQuery } from '../constants/schemas';



const Farm = (props) => {
    const params = useParams()
    const [products, setProducts]  = useState(deals())
    const {loading, data, error} = useQuery(listOneFarmQuery, {variables:{id:params.id}})
    const [farm, setFarm] = useState()

    const navigate = useNavigate()
    console.log(params, "THIS IS THE PARAMS")

    useEffect(()=>{

        if(!loading){
            console.log("data just arrived")
            console.log(data)
            setFarm(data.farm)
        }
        return ()=>{}
    }, [loading])

   

    return (
        <>
            <div className='farm flex justify-content-center align-items-center'>
                <img src={FarmImg} className='banner-image'/>
                <div className='blue-overlay'></div>


                <div className='p-1 farm-banner flex flex-column justify-content-center align-items-center'>
                    <h3 className='farm-name z-1 my-1'>{farm?farm.name:"-------"}</h3>
                    <div className='bg-overlay z-1 p-1 flex flex-column justify-content-center align-items-center'>
                        <img src={FarmOwner} 
                        className='profile-logo z-1 my-1'/>
                        <h6 className='farm-owner'>Chidinma Ezeonu (Farm Owner)</h6>
                    </div>
                    <p className='farm-descp z-1 mt-3'>{farm?farm.description:"-------"}
                    </p>
                    
                    {/* <h2 className='z-1 arrow-more'><span className='r-90'>{"> >"}</span></h2> */}
                    <div className='action flex mt-4'>
                        <div className='z-1 card p-3 mx-1 text-info flex justify-content-space-between'>
                            <i className='fa fa-gift fa-2x'></i>
                            Checkout Deals!
                        </div>

                        <div className='z-1 card p-3 mx-1 text-info flex justify-content-space-between'>
                            <i className='fab fa-whatsapp fa-2x'></i>

                            Contact Farm Owner
                        </div>
                    </div>
                </div>

               

            </div>
            

                {/* Farm Deals */}
                
                <section className="farm-deals">
                    
                    <div className="container">
                        {/*tAG */}
                    <h2>#Best Deals on Holmes Rice Farm</h2>
                        {/* start of card */}
                        <div className="grid grid-5 gap-1">
                        {products ? products.map(prod => {

                            if (prod.farmId == params.id){
                            return (<div onClick={e=>navigate("/d/deal-preview/")} className="card">
                                {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                                <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        {prod.name}

                                    </div>
                                    <div className="rating">
                                        <h6 className="lh-1">{NairaFormat(prod.price)}</h6>
                                        <h6 className="text-secondary lh-1">Hot Deal!</h6>
                                        {/* <button className="btn lh-1">Add to Cart</button> */}
                                    </div>
                                </div>
                            </div>)}}):null}
                        {/* end of card */}
                    
                    </div>
                    
                </div>
            </section>

            <Footer />
        </>
    )
}


export default Farm