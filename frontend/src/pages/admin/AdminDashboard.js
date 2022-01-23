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

const AdminDashboard = (props) => {
    
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
                <h4 className={''}>Admin page!</h4>

                {/* cols beginning of products listing */}
                <section className={"grid grid-2 gap-1 my-2"}>
                    <div className='card p-2 flex gap-1'>
                        <i class="fas fa-piggy-bank fa-5x"></i>
                        <div className='flex flex-column gap-1'>
                            Wallet Balance
                            <h2 className=''>{NairaFormat(30000)}</h2>
                        </div>
                    </div>

                    <div className='card p-2 flex gap-1'>
                    <i class="fas fa-snowflake fa-5x"></i>
                        <div className='flex flex-column gap-1'>
                            Frozen Balance
                            <h2 className=''>{NairaFormat(1200)}</h2>
                        </div>
                    </div>
                                 
                </section>

                {/* function section */}

                <section className={"grid grid-5 gap-1 my-2"}>
                    <div className='card p-2 flex gap-1'>
                    <i class="fas fa-store fa-3x align-self-center"></i>
                        <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                           Create&nbsp;A&nbsp;store
                            <p className='text-small'>A virtual store with a physical location</p>
                            <i className='fas fa-plus fa-2x'></i>

                        </div>
                    </div>

                    <div className='card p-2 flex gap-1'>
                    <i class="fal fa-sheep fa-3x align-self-center"></i>
                        <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                           Create&nbsp;A&nbsp;Farm
                            <p className='text-small'>A virtual Farm with a physical location</p>
                            <i className='fas fa-plus fa-2x'></i>

                        </div>
                    </div>
                                 
                </section>

                {/* Checkout your orders */}

                <section className={"grid grid-2 gap-1 my-2"}>
                    <div className='card p-2 flex gap-1'>
                    <i class="fas fa-store fa-2x"></i>
                        <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                           Sell&nbsp;Orders
                            <p className='text-small'>A virtual store with a physical location</p>
                            <i className='fas fa-plus fa-2x'></i>

                        </div>
                    </div>

                    <div className='card p-2 flex gap-1'>
                    <i class="fal fa-sheep fa-2x"></i>
                        <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                           Buy&nbsp;Orders
                            <p className='text-small'>A virtual Farm with a physical location</p>
                            <i className='fas fa-plus fa-2x'></i>

                        </div>
                    </div>
                                 
                </section>
        {/* END OF PRODUCT LISTING */}
            </section>
            
        </section>
   
    </div>
}

export default AdminDashboard;