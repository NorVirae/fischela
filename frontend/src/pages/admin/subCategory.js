import React, { useEffect, useState } from 'react';
import AdminNav from  '../../components/nav/AdminNav';

import {createSub, deleteSub, listSubs} from '../../functions/subFunctions';
import {listCategories} from '../../functions/categoryFunctions';

import {Link} from "react-router-dom";
import Footer from '../../components/nav/Footer';

const CreateSubCategory =  (props) => {
    const [sub, setSub] = useState('')

    const [parent, setParent] = useState('')
    const [loading, setLoading] = useState(false)
    const [listOfCategories, setListofCategories] = useState('')
    const [listOfSubs, setListOfSubs] = useState('')

    const [keyword, setKeyword] = useState('')
    const authToken = "user.token"
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        createSub(sub, parent, authToken).then((res)=>{
            loadSubs()

        }).catch(err=>{
            setLoading(false)
        })
        setSub('')
    }

    useEffect(()=>{
        loadSubs()
        loadCategories()

        return ()=>{}
        
    }, [])

    const searched = (keyword)=>(c)=>c.name.toLowerCase().includes(keyword)

    const handleDelete = (slugs) =>{
        if (window.confirm("Delete?")){
            deleteSub(slugs, authToken).then(res=>{
                loadSubs()



        }).catch(err=>{
        })}
        // console.log(slug)
    }

    const loadSubs = ()=> {
        listSubs().then((res)=>{
            
            setListOfSubs(res.data)
            
        })
    }

    const loadCategories = () =>{
        listCategories().then((res)=>{
            
            setListofCategories(res.data)
            
        })
    }

    const handleSearchChange = (e) =>{
        e.preventDefault()
        setKeyword(e.target.value.toLowerCase())
    }
    
    const createSubDesign = ()=> <form onSubmit={handleSubmit}>
            <h4>Create Sub-Category</h4>
        <div className={'form-group'}>
        <label>Set Category</label>
        <select onChange={(e)=>{setParent(e.target.value)}} placeholder={"Category"} className="form-control p-2">
        <option className={"alert alert-secondary m-2"}>Please Select</option>
        {listOfCategories?listOfCategories.map((cate)=>{
                 
                 return <option className={"alert alert-secondary m-2"}  value={cate._id}>{cate.name}</option>

                }):null}
            
            </select>
        </div>
        <div className={'form-group'}>
            <input className="form-control" placeholder={"Sub-Category"} value={sub} onChange={(e)=>setSub(e.target.value)}/>
        </div>

        <div className={'form-group'}>
            <input className="form-control" value={keyword} placeholder={"Filter"} onChange={handleSearchChange}/>
        </div>
 

        <div className={'form-group'}>
        <button className={'btn-cart'} type={'submit'} >Save</button>
        </div>

    </form>

    
    return <div className="subcategory">
    <div className={"container grid grid-2-20-80"}>
        <div className={"col-md-2"}>
            <AdminNav/>
            </div>
            <div className="col offset-md-2">{createSubDesign()}
            
            

                {listOfSubs?listOfSubs.filter(searched(keyword)).map((cate)=>{
                return  <div key={cate._id} className={'alert alert-secondary'}>{cate.name}
                    <Link to = {"/d/edit/sub/"+cate.slug} className="btn btn-sm btn-primary float-right">
                    </Link>

                    <span onClick={e=>handleDelete(cate.slug)} className="btn btn-sm btn-primary float-right">
                    </span>
                </div>

                }):null}
            
            </div>
        </div> 
    
        </div>

}

export default CreateSubCategory;