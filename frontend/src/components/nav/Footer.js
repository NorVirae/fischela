import React, {useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'
import Logo from './Logo';


const Footer = ()=>{
    const [ct, setCt] = useState("")
    
    const navigate = useNavigate()
    const [current, setCurrent] = useState('home');
    const handleClick = (e)=>{
      console.log(e)
      setCurrent(e.key)
    }

    useEffect(() => {
     
      
      return () => {
        
      };
    }, [ct])


const logout = ()=>{
    
    navigate("/d/login")

}



    return (
        <>
         {/* Footer starts here */}

         <section className="footer">
                <div  className="container flex justify-content-space-between">
                    <div>
                        <h5>Fischela Group</h5>
                        <h5 className='text-white ft-link'>&copy;Copyright 2021 All rights reserved</h5>

                    </div>

                    <ul className="flex text-white">
                        <li className='ft-item'><a className={"ft-link"} href={"/"}>Home</a></li>
                        <li className='ft-item'><a className={"ft-link"} href={"/"}>Register</a></li>
                        <li className='ft-item'><a className={"ft-link"} href={"/"}>About us</a></li>

                    </ul>
                </div>
            </section>
        </>
    )
} 

export default Footer;