import React, {useState, useEffect}  from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { listCategories } from '../../functions/categoryFunctions';
import { listSubSpec } from '../../functions/subFunctions';
import Axios from 'axios';
import { createProduct, readProduct, updateProduct } from '../../functions/productFunction';
import Footer from '../../components/nav/Footer';
import {useNavigate, useParams} from 'react-router-dom';
import Alert from '../../components/infos/Alert';
import { useMutation } from '@apollo/client';
import { productUpdateQuery } from '../../constants/schemas';


const EditProduct = (props)=>{
    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState('')
    const [avail, setAvail] = useState(false)
    const authToken = "user.token"
    let imgs = []
    
    const [subs, setSubs] = useState([])

    const [listOfCategories, setListofCategories] = useState('')
    

    


    const [values, setValues] = useState({
        id:"61e53e80df723dfb0b242d01",
        name:"white shirts on dads",
        description:"the white shirt everybody desires",
        sellerId:"",
        images:["djvjdnvjdnd", "djndkcnksdmck"],
        price:5000,
        quantity:40,
        brand:"palms angels",
        shipping:true,
    })

    const [updateProductAction, updateProductResult] = useMutation(productUpdateQuery)

    const handleSubmit = (e) => {
        //
        e.preventDefault()
        // console.log(values)
        updateProductAction({variables:values})
       console.log("EDIT PRODUCT HANDLER CLICKED")
    }

    const handleFileChange = (e) => {
        console.log("handle file change clicked")
    }

    useEffect(() => {
        console.log("we are in the useEffect!")
        if (updateProductResult.loading){
            console.log("product just arrived", updateProductResult.loading)
        }
      return () => {
        
      };
    }, [updateProductResult.loading])

    const productForm = ()=>(
        <form className='flex flex-column' onSubmit={handleSubmit}>
            <Alert msg="Wow"  type='success' />
            <div className={"form-group"}>
                <label className={''}>
                    <input  
                     onChange={e=>handleFileChange(e.target.files)}
                     required
                     accept='image/*'
                     name={"files"}
                     multiple
                     class="form-control-file" 
                     type={"file"} placeholder={"Name"}  />

                    
                </label>
            </div>
            
            <div className={"form-group"}>
                <input  onChange={e=>setValues({...values, name:e.target.value})} autoFocus class="form-control" type={"text"} placeholder={"Name"} value={values.name} />
            </div>


            <div className={"form-group"}>
                
                <textarea class="form-control" 
                type={"text"} 
                placeholder={"Description"} 
                value={values.description} 
                onChange={e=>setValues({...values, description:e.target.value})} >

                </textarea>
            </div>

            
            {JSON.stringify(updateProductResult.data)}
            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"Price"} value={values.price} onChange={e=>setValues({...values, price:e.target.value})} />
            </div>

            {/* {JSON.stringify(values.images)} */}

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"quantity"} value={values.quantity} onChange={e=>setValues({...values, quantity:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"brand"} value={values.brand} onChange={e=>setValues({...values, brand:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"shipping"} value={values.shipping} onChange={e=>setValues({...values, shipping:e.target.value})} />
            </div>

        

            <div className={"form-group"}>
                
                <button class="btn-cart" type={"submit"} onClick={handleSubmit} >Save</button>
            </div>
        </form>
    )
    return (
        <div className={"edit-prod"}>
            <div className={"container grid grid-2-20-80"}>
                <div className={""}>
                    <AdminNav/>
                </div>
                <div className={""}>
                   <center> <h4 className="alert alert-info">Edit your Product!</h4></center>
                    {productForm()}
                </div>
            </div>

        </div>
    )
}

export default EditProduct