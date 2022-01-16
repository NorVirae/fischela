import React, { useState } from 'react';
import UserNav from  '../../components/nav/UserNav';


const UpdatePassword =  (props) => {
    const [password, setPassword] = useState('')

    const  handleChange = async (e)=>{
        e.preventDefault()
       
    }
    const passwordDesign = ()=> <form onSubmit={handleChange}>
            <h4>Update Password</h4>
        
        <div className={'form-group'}>
            <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <div className={'form-group'}>
        <button className={'btn-cart'} type={'submit'} >Update</button>
        </div>

    </form>

    
    return <div className="update-password">
                <div className={"container grid grid-2-20-80"}>
                    <div className={""}>
                        <UserNav/>
                    </div>
                    <div className="">{passwordDesign()}</div>
                </div> 
        </div>

}

export default UpdatePassword;