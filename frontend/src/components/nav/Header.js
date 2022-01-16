import React, {useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Cookie from 'js-cookie';
import logo from "../../images/fischela.png";
import Logo from './Logo';



const Header = ()=>{
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
                        <section className="navbar  sticky-top">
                <div className="container flex flex-column-sm justify-content-space-between">
                    <Logo/>
                    <nav>
                        <ul>
                            <li className='nv-item'><Link className='nv-link' to="/d/add/to/cart">
                                <i className='cart-icon fas fa-shopping-cart'>
                                    <div className='cart-count nv-link'>3</div></i></Link></li>
                            <li className='nv-item'><Link className='nv-link' to="/d/login"><i class="fas fa-sign-in-alt pr-1"></i>Login</Link></li>
                            <li className='nv-item'><Link className='nv-link' to="/d/register"><i class="fas fa-user-plus pr-1"></i>Register</Link></li>



                        </ul>
                    </nav>
                </div>
            </section>






        
        </>
    )
} 

export default Header;