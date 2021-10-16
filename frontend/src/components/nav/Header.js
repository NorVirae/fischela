import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Menu, Avatar, Badge} from 'antd';
import { HomeFilled,FireOutlined, SearchOutlined, SettingOutlined, EnvironmentOutlined, LoginOutlined, UserOutlined, LogoutOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import firebase  from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'

const {SubMenu} = Menu;

const Header = ()=>{
    const [ct, setCt] = useState("")
    let {user, cart} = useSelector((state)=>({...state}))
    
    const history = useHistory()
    const dispatch = useDispatch()
    const [current, setCurrent] = useState('home');
    const handleClick = (e)=>{
      console.log(e)
      setCurrent(e.key)
    }

    useEffect(() => {
      if(Cookie.getJSON("cart") && Cookie.getJSON("cart").productList.length>0){
          setCt(Cookie.getJSON("cart").productList.length)}
      
      return () => {
        
      };
    }, [ct])


const logout = ()=>{
    firebase.auth().signOut()
    dispatch({
      type:"LOGGED_OUT_USER",
      payload: null
    })
    history.push("/d/login")

}



    return (
        <>
        <Menu className={"sticky-top"} onClick={handleClick} selectedKeys={[current]} mode={"horizontal"}>
        <Menu.Item key={"home"} icon={<FireOutlined className={'h2'}/> }>
          <Link to={"/"} className="h3">Fischela</Link>
        </Menu.Item>

       

        {!user && (<Menu.Item key={"register"} icon={<UserOutlined /> } className={"float-right"}>
        <Link to={"/d/register"}>Register</Link>
        </Menu.Item>)}

        {!user && (<><Menu.Item key={"login"} icon={<LoginOutlined /> } className={"float-right"}>
        <Link to={"/d/login"}>Login</Link>
        </Menu.Item>

                </>
    )}

        <Menu.Item key={"cart"} icon={<span onClick={e=>history.push("/d/add/to/cart")} className="avatar-item">
                                            <Badge count={ct}>
                                            <Avatar class="text-warning" shape="square" icon={<ShoppingCartOutlined />} />
                                            </Badge>
                                            </span> } className={"float-right"}>
        </Menu.Item>

        
        
       
        {user&&(<SubMenu key={"SubMenu"} className={"float-right"} icon={<SettingOutlined />} title={user && (user.email.split("@")[0])}>
          
            <Menu.Item key={"setting:2"}><Link to={"/d/admin/dashboard"}>Admin Dashboard</Link></Menu.Item>
            <Menu.Item key={"setting:2"}><Link to={"/d/user/suscriber"}>User Dashboard</Link></Menu.Item>
            
            <Menu.Item icon={<LogoutOutlined />} onClick={logout}>LogOut</Menu.Item>
            <Menu.Item key={"cart"} icon={<span className="avatar-item">
                                            <Badge count={ct}>
                                            <Avatar shape="square" icon={<ShoppingCartOutlined />} />
                                            </Badge>
                                            </span> } className={"float-right"}>
        </Menu.Item>
    

        
          
        </SubMenu>
        
        )}
  {/* <Menu.Item key={"location"} icon={<EnvironmentOutlined /> } className={"float-right"}>
          <select onChange={e=>history.push(e.target.value)} className={'form-control d-inline p-1'}>
            <option>Location</option>
            <option value={"/location/madonna-elele"} >Madonna University Elele</option>
            <option value={"/location/enugu-independence"} >Enugu - Independence Layout</option>
            <option value={"/location/izuchukwu-street"} >Izuchukwu street</option>

            </select>
        
        </Menu.Item> */}

        <Menu.Item key={"location"} icon={<SearchOutlined /> } className={"float-right"}>
          <input onChange={e=>history.push('/d/search')} placeholder={'Search...'} className={'form-control d-inline'}/>
        
        </Menu.Item>

        
      </Menu>
        </>
    )
} 

export default Header;