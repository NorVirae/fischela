import React, { useState, useEffect,  } from 'react';
import AdminNav from '../../components/nav/AdminNav'
import { deleteProduct, listProducts } from '../../functions/productFunction';




import NairaFormat from '../../functions/NairaFormater';
import { hotShops, shopProducts } from '../../data/data';
import Footer from '../../components/nav/Footer';
import { useNavigate } from 'react-router-dom';
const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}




const Shops = (props) => {
    const [products, setProducts]  = useState(hotShops())
    const [empty, setEmpty] = useState(false)
    const navigate = useNavigate()

    // const authToken = user.token
    const authToken = "dhbvdjvdjv";

    const handleDelete = (slug) =>{
        deleteProduct(slug, authToken).then(res=>{console.log(res)
            loadProducts()
        })

    }
    


    const loadProducts = ()=>{
        listProducts().then(res=>{
            setProducts(res.data)
            console.log(res.data)
        })
    }


    useEffect(() => {

        // loadProducts()

        console.log(products, "thIs IS ProduCts FRoM ADMIN ROUtE")
      return () => {
        
      };
    }, [])
    return <div className="admin">

                <section className={"container grid grid-2-20-80 gap-2"}>
                    <div className={""}>
                            <AdminNav className={""}/>
                    </div>


            

            <section className="product-list"> 
                <h4 className={''}>Admin page!</h4>

                {/* cols beginning of products listing */}
                {!empty?<div className={"grid grid-5 gap-1 "}>
                                
                                <div onClick={e=>navigate("/d/admin/create/shops")} className="card  flex  flex-column justify-content-center align-items-center p-3">
                                    <span className='fas fa-plus p-1'></span> Create&nbsp;Shop 
                                </div>

                {products ? products.map(prod => {
                            console.log(prod.shopOwnerId)
                            if (prod.shopOwnerId == 0){
                                return (
                                <div className="card">
                                    {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                                    <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>

                                    <div className="card-body">
                                        <div className="pb-1 card-title flex justify-content-center align-items-center">
                                            {prod.name}
                                        </div>
                                        <div className="flex ">
                                            <div onClick={e=>navigate("/d/admin/edit/shops")} className=" btn-edit p-1 mr-1 flex justify-content-center"><i class="fas fa-edit"></i>Edit</div>
                                        </div>
                                    </div>
                                </div>)}}):null}
                        {/* end of card */}            
                </div>:<div className='flex flex-column justify-content-center align-items-center empty-shop'>
                    <div className='empty-shop-header'>You don't have a shop!</div>
                     <img className='empty-shop-img' src='https://cdn.pixabay.com/photo/2014/04/02/11/16/shopping-305728_960_720.png' />
                     <button onClick={e=>navigate("/d/admin/create/shops")} className='btn-empty-shop'><i class="fas fa-plus"></i> Create one</button>
                     </div>}
        {/* END OF PRODUCT LISTING */}
            </section>
            
        </section>
   
    </div>
}

export default Shops;