import React, {useState} from 'react';
import Logo from '../../components/nav/Logo';
import { Link } from 'react-router-dom';






const ForgottenPassword = (props)=>{
    const [email, setEmail] = useState('')
    const [loading, setLoading]  = useState(false)

    const handleSubmit = () =>{
        console.log("got submitted")
    }

    const config = {
        url:process.env.REACT_APP_RESET_PASSWORD_LINK,
        handleCodeInApp:false
    }

    const resetPassword = async (e) =>{
        e.preventDefault()

        
        


    }
    
    
    
    return <>
        <div className="forgotten-password mt-5">
            
        <Link className='text-info ml-5' to={"/"}>{"<< back"}</Link>
            
            <div className={"container flex flex-column justify-content-center align-items-center"}>
                <Logo/>
                <div className='card p-2'>
                <center><h4>Password Reset</h4></center>
                <form onSubmit={handleSubmit}>
                    <input autoFocus placeholder='Type in new password!' className = {'form-control'} type={"email"} onChange={e=>setEmail(e.target.value)} />
                    <button onClick={resetPassword} className='btn-register' disabled={!email}>{loading?"loadind...":"Reset Password"}</button>
                </form>
                </div>
            </div>
        
        </div>

    </>
    
    
    
    
    }
export default ForgottenPassword;