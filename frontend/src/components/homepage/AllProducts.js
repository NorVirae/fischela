import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listProductQuery } from "../../constants/schemas";
import NairaFormat from "../../functions/NairaFormater";




const AllProductsComp = () => {
    const navigate = useNavigate()
    const {loading, data, error} = useQuery(listProductQuery)
    useEffect(() => {


        return () => {

        }
    }, [])

    return (
        <section className="products">
                
                <div className="container">
                   
                    {/*tAG */}
                <h2>#Hot and Trending Products</h2>
                    {/* start of card */}
                    <div className="grid grid-5 gap-1">
                    {data ? data.products.map(prod => {
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
    )
}

export default AllProductsComp;