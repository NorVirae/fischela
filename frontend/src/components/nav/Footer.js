import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Menu, Avatar, Badge} from 'antd';
import { HomeFilled, SettingOutlined, LoginOutlined, UserOutlined, LogoutOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import firebase  from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie'

const {SubMenu} = Menu;

const Footer = ()=>{
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
        <Menu onClick={handleClick} selectedKeys={[current]} mode={"vertical"}>
        <Menu.Item key={"home"} 
        // icon={<HomeFilled /> }
        >
          <Link to={"/"} className="h6 pb-0">&copy; Copyright Fischela Group 2021 All Rights Reserved</Link>
        </Menu.Item>
      </Menu>
        </>
    )
} 

export default Footer;