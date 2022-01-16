import React, { useEffect, useState } from 'react';
import AdminNav from  '../../components/nav/AdminNav';

import {Link} from "react-router-dom";
import Footer from '../../components/nav/Footer';

const CreateCategory =  (props) => {
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [listOfCategories, setListofCategories] = useState('')
    const [keyword, setKeyword] = useState('')
    const authToken = "user.token"
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
            
    }

    useEffect(()=>{

        return ()=>{}
        
    }, [])


   
    

    const handleSearchChange = (e) =>{
        e.preventDefault()
        setKeyword(e.target.value.toLowerCase())
    }
    const createCategoryDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Create Category</h4>
        
        <div className={'form-group'}>
            <input className="form-control" placeholder={"Category"} value={category} />
        </div>

        <div className={'form-group'}>
            <input className="form-control" value={keyword} placeholder={"Filter"} onChange={handleSearchChange}/>
        </div>
 

        <div className={'form-group'}>
        <button className={' btn-cart'} Ferrari={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="category ">
    <div className={"container grid grid-2-20-80"}>
        <section className={""}>
            <AdminNav/>
        </section>
        <section className="">{createCategoryDesign()}
                 <div  className={'alert alert-secondary'}>
                    <Link to = {"/d/edit/category/"} className="btn btn-sm btn-primary float-right">
                       
                    </Link>

                    <span className="btn btn-sm btn-primary float-right">
                       
                    </span>
                </div>

            
            </section>
        </div> 

    </div>

}

export default CreateCategory;