import React, {useEffect, useState} from 'react';
import  {Link} from 'react-router-dom';


import { createOrUpdateUser } from '../../functions/createUpdate';
import Logo from '../../components/nav/Logo';

import {useLocation} from 'react-router-dom';



const Login = (props)=>{
    console.log(props)
    const location = useLocation()
    
    if (typeof location.state != 'undefined'){
    }


    
    useEffect(()=>{
        
        return ()=>{}
    }, [])
 

    const [email, setEmail] = useState('norbertmbafrank@gmail.com') 
    const [password, setPassword] = useState('calister')
    const [loading, setLoading] = useState(false)

    const googleLogin = async () => {
        
    }
    const handleSubmuit = async (e) =>{
        e.preventDefault()
   
    }

    const formRegister = () => <form className="flex flex-column" onSubmit={handleSubmuit}>
            <div className="form-group ">
                <input className={"form-control"} 
                placeholder={"your email"} name={email} 
                onChange={e=>setEmail(e.target.value)} 
                value = {email}
                type={'email'} autoFocus /></div>

            
            <div className="form-group">
                <input className={"form-control"}
                 placeholder={"your password"} name={password}
                  onChange={e=>setPassword(e.target.value)}
                  value={password}
                   type={'email'} /></div>

            <div className="form-group">
                <button 
                onClick={handleSubmuit}
                disabled = {!email || password.length < 6}
                
                
                className = {"btn-login"}
                >{loading?"loading...":"Login with email/password"}</button>
             
                
             <Link to="/d/forgotten/password" className="text-small text-info">Forgotten password?</Link>
             <Link to="/d/register" className="text-small text-info">Don't have an account? click to Register</Link>

             </div>
        </form>
    return (
    <div className={"login  mt-5"}>
        <Link className='text-info ml-5' to={"/"}>{"<< back"}</Link>
        <div className={"container flex flex-column justify-content-center align-items-center"}>
        <Logo/>

            <div className={"card p-2"}>
               <center> <h4>Login</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default Login;