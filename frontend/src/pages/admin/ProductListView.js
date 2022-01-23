import React, { useState, useEffect,  } from 'react';
import AdminNav from '../../components/nav/AdminNav'
import { deleteProduct, listProducts } from '../../functions/productFunction';



import NairaFormat from '../../functions/NairaFormater';
import { shopProducts } from '../../data/data';
import Footer from '../../components/nav/Footer';
import { useNavigate } from 'react-router-dom';
import {useQuery, gql} from "@apollo/client";
const config = {
    cloud_name: 'norvirae',
  api_key: '267177314333933',
  api_secret: 'qzPi3K8LNu9C66AGEPvuSW7WtP8'
}


const userQuery = gql`
    query user($id:ID!){
        user(id:$id){
            name
            phone
            id
        }
    }
`

const ProductListView = (props) => {
    
    const [products, setProducts]  = useState(shopProducts())
    const navigate = useNavigate()
    const {loading, data, error} = useQuery(userQuery, {variables:{id:"61d8698256324b191f29c240"}})

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

        loadProducts()

        console.log(products, "thIs IS ProduCts FRoM ADMIN ROUtE")
      return () => {
        
      };
    }, [])
    return <div className="admin">
                    {JSON.stringify(data)}
                <section className={"container grid grid-2-20-80 gap-2"}>
                    <div className={""}>
                            <AdminNav className={""}/>
                    </div>


            

            <section className="product-list"> 
                <h4 className={''}>Your Assets</h4>

                {/* cols beginning of products listing */}
                <div className={"grid grid-5 gap-1 "}>
                <div onClick={e=>navigate("/d/create/product")} className="card flex flex-column justify-content-center align-items-center p-2">
                                <span className='fas fa-plus p-1'></span>
                                <h5> Create&nbsp;Product</h5>
                            </div>
                {products ? products.map(prod => {
                            return (<div className="card">
                                {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                                <img src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>

                                <div className="card-body">
                                    <div className="pb-1 card-title flex justify-content-center align-items-center">
                                        {prod.name}
                                    </div>
                                    <div className="flex ">
                                        <div onClick={e=>navigate("/d/edit/product/"+prod.id)} className=" btn-edit p-1 mr-1 flex justify-content-center">Edit</div>
                                        <div className=" btn-delete p-1 flex justify-content-center">Delete</div>
                                    </div>
                                </div>
                            </div>)}):null}
                        {/* end of card */}            
                </div>
        {/* END OF PRODUCT LISTING */}
            </section>
            
        </section>
   
    </div>
}

export default ProductListView;