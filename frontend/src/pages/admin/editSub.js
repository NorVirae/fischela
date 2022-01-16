import React, { useEffect, useState } from 'react';
// import UserNav from  '../../components/nav/UserNav';
import AdminNav from  '../../components/nav/AdminNav';

import {updateCategory, deleteCategory, listCatgories, readCategory, listCategories} from '../../functions/categoryFunctions'
import {readSub, updateSub} from '../../functions/subFunctions';

import Footer from '../../components/nav/Footer';
import {useNavigate, useParams} from "react-router-dom";

const EditSub =  (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [parent, setParent] = useState('')
    const [listOfCategories, setListOfCategories] = useState('')


    const [loading, setLoading] = useState(false)

    const [sub, setSub] = useState('')
    
    // const [listOfCategories, setListofCategories] = useState('')
    const authToken ="user.token"
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        updateSub(params.slug,sub,parent, authToken).then((res)=>{
            // loadCategories()

        }).catch(err=>{
            setLoading(false)
        })

        setCategory('')
        navigate("/d/create/sub")

         
    }

    useEffect(()=>{
        loadSub()
        loadCategories()

        return ()=>{}
        
    }, [])

    

    const loadSub = ()=> {
        readSub(params.slug).then(res=>{
            setSub(res.data.name)
            setParent(res.data.parent)
        })
    }

    const loadCategories = ()=> {
        listCategories().then(res=>{
            setListOfCategories(res.data)
        })
    }

    const updateCategoryDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Update Sub-Category</h4>
        
            <div className={'form-group'}>
        <select onChange={(e)=>{setParent(e.target.value)}} placeholder={"Category"} className="form-control p-2">
        {listOfCategories?listOfCategories.map((cate)=>{
                 
                 return <option className={"alert alert-secondary m-2"}  value={cate._id} selected={cate._id === parent}>{cate.name}</option>

                }):null}
            
            </select>
        </div>
        
        <div className={'form-group'}>
            <input className="form-control" value={sub} onChange={(e)=>setSub(e.target.value)}/>
        </div>

        <div className={'form-group'}>
        <button className={'btn-cart'} type={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="edit-sub">
    <div className={"container grid grid-2-20-80"}>
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

export default EditSub;