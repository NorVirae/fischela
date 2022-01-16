import React from 'react'
import { useNavigate } from 'react-router-dom';
import logoImg from "../../images/fischela/fischela.svg";

const Logo = () => {

    const navigate = useNavigate()

                   return  <div className="flex logo-container">
                        <img onClick={e=>navigate("/")} className={"logo"} src={logoImg} alt='fisch logo' />
                        <div onClick={e=>navigate("/")} className='logo-text'>ischela</div>
                    </div>
}
export default Logo;