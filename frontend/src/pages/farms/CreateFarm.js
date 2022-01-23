import React, {useState, useEffect}  from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { listCategories } from '../../functions/categoryFunctions';
import { listSubSpec } from '../../functions/subFunctions';
import Axios from 'axios';
import Cookie from 'js-cookie'
import { useMutation } from '@apollo/client';
import { createFarmQuery } from '../../constants/schemas';


const CreateFarm = (props)=>{
    const [listOfCategories, setListofCategories] = useState('')
    const [createFarmAction, createFarmResult] = useMutation(createFarmQuery)
    const loadCategories = ()=> {
        listCategories().then((res)=>{
            
            setListofCategories(res.data)
        })
    }

    useEffect(() => {

       
      return () => {
        
      };
    }, [])

    const [avail, setAvail] = useState(false)
    const authToken = "user.token"
    let imgs = []
    const [loading, setLoading] = useState(false)
    const [subs, setSubs] = useState([])
    const [values, setValues] = useState({
        name:"candies Bee Farm",
        description:"A farm for the sweetest honey",
        farmOwnerId:"dckjsknjsdnjndskjnd"
    })


    

    
    const innitialState = Cookie.get("productcreate")

    const handleSubmit = (e) => {
        //
        e.preventDefault()
        createFarmAction({variables:values})
        console.log(createFarmResult.data)
      
    }

    const handleImageUpload = (images) => {
        setLoading(true)

        console.log()
        console.log(images)
        let imageList = []
        
    }

    const handleChange = (e) => {
        //
        setValues({...values, category:e})

        setLoading(true)
        listSubSpec(e, authToken).then(res=>{
            setSubs([])

            // setValues({...values, sub:[]})

            setSubs(res.data)
            setAvail(true)
        }).catch(err=>{
            console.log(err)
            setLoading(false)
        })
    }

    const deleteImage = (e)=>{
        let ImageList = []
       let dele = Axios.post(process.env.REACT_APP_LOCALHOST+"/api/image-delete", {image:e}, {headers:{authToken}}).then(res=>{
            for (let count = 0; count<values.images.length; count++){
                    if (values.images[count].public_id != e){
                        ImageList.push(values.images[count])
                    }
            }

            setValues({...values, images:ImageList})
            Cookie.set("productcreate",{productcreate:{...values, images:ImageList}})
        }).catch(err=>console.log(err))
    }

    const productForm = ()=>(
        <form className='flex flex-column' onSubmit={handleSubmit}>
            <div className={"form-group flex flex-column"}>
                
                <label className={''}> Upload a photo of your Farm</label>
                    <input  multiple class="form-control-file" type={"file"} placeholder={"images"} onChange={e=>handleImageUpload(e.target.files)} />
            </div>

            {JSON.stringify(createFarmResult.data)}
            <div className={"form-group"}>
                {/* {values.name} */}
                <input autoFocus class="form-control" type={"text"} placeholder={"Farm name"} value={values.name} onChange={e=>{setValues({...values, name:e.target.value});Cookie.set("productcreate",{productcreate:values})}} />
            </div>

            <div className={"form-group"}>
                
                <textarea class="form-control" 
                type={"text"} 
                placeholder={"Farm description"} 
                value={values.description} 
                onChange={e=>setValues({...values, description:e.target.value})} >

                </textarea>
            </div>

            <div className={"form-group"}>
                <input class="form-control" type={"text"} placeholder={"farm owner "} value={values.farmOwnerId} onChange={e=>setValues({...values, farmOwnerId:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <button class="btn-cart" type={"submit"} onClick={handleSubmit} >
                    <i className="fas fa-plus pr-1"></i>Create Farm</button>
            </div>
        </form>
    )
    return (
        <div className={"create-product "}>
            <div className={"container grid grid-2-20-80"}>
                <div className={""}>
                    <AdminNav/>
                </div>
                <div className={""}>
                   <center> <h4>Create your Farm!</h4></center>
                    {productForm()}
                </div>
            </div>
            
        </div>
    )
}

export default CreateFarm;