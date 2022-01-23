import React, {useState,useEffect} from 'react';
import Logo from "../../components/nav/Logo";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { createOrUpdateUser } from '../../functions/createUpdate';






const RegisterComplete = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    useEffect(()=>{

        setEmail(window.localStorage.getItem("registerEmail", email))

    },[])

    
    const handleSubmuit = async (e) =>{
        e.preventDefault()
   
    }

    const formRegister = () => <form onSubmit={handleSubmuit}>
            <input placeholder ={"Input e-mail again"} className={"form-control"} name={email} value={email} onChange={e=>setEmail(e.target.value)} type={'email'}  />
            <br/>
            <input placeholder="set new password" className={"form-control"} onChange={e=>setPassword(e.target.value)} type={'password'} autoFocus />

            <button className={"btn-register"} type={"submit"}>Register Complete</button>
        </form>
    return (
    <div className={"register-complete p-5"}>
        <Link className='text-info ml-5' to={"/"}>{"<< back"}</Link>

        <div className={"container flex flex-column justify-content-center align-items-center"}>
            <Logo/>
            <div className={"card p-2"}>
            <center> <h4>Complete Registration!</h4></center>
                {formRegister()}
            </div>
        </div>
    </div>

    
    
    )
    
    }
export default RegisterComplete;