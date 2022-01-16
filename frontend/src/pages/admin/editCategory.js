import React, { useEffect, useState } from 'react';
import AdminNav from  '../../components/nav/AdminNav';

import Footer from '../../components/nav/Footer';
import {useNavigate} from "react-router-dom";

const EditCategory =  (props) => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    // const [listOfCategories, setListofCategories] = useState('')
    const authToken = "user.token"
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
    
        setCategory('')
        navigate("/d/create/category")

         
    }

    useEffect(()=>{
        
        loadCategory()

        return ()=>{}
        
    }, [])

    // const handleDelete = (slugs) =>{
    //     if (window.confirm("Delete?")){
    //         deleteCategory(slugs, authToken).then(res=>{
    //             loadCategories()
    //             toast.success("Category has been delete")



    //     }).catch(err=>{
    //         toast.error(err)
    //     })}
        // console.log(slug)
    // }

    const loadCategory = ()=> {
    //    
    }
    const updateCategoryDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Update Category</h4>
        
        <div className={'form-group'}>
            <input className="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}/>
        </div>

        <div className={'form-group'}>
        <button className={'btn-cart'} type={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="edit-category">
        <div className={" container grid grid-2-20-80"}>
            <div className={""}>
                <AdminNav/>
            </div>
            <div className="">{updateCategoryDesign()}
            
            
{/* 
                {listOfCategories?listOfCategories.map((cate)=>{
                return  <div key={cate._id} className={'alert alert-secondary'}>{cate.name}
                    <span className="btn btn-sm btn-primary float-right">
                        {<EditOutlined/>}
                    </span>

                    <span onClick={e=>handleDelete(cate.slug)} className="btn btn-sm btn-primary float-right">
                        {<DeleteOutlined/>}
                    </span>
                </div>

                }):null} */}
            
            </div>
        </div> 
       
        </div>

}

export default EditCategory;