import React, { useEffect, useState } from 'react'
import './Dash.css'
import logo from '../../assets/image/schoolLogo.png'
import Aside from './Aside/aside'
import Apprenant from './Apprenant/apprenant'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../Log in/Login'

function Dash() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const token = JSON.parse(localStorage.getItem('token'));
  const userinfo = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    
    const verifyCookie = async () => {
      if (!token) {
        return navigate("/login");
      }
      
      if(userinfo.role !== "admin"){
        navigate("/login");
      }
      setUser(userinfo);
      
    };
    verifyCookie();
  }, []);
 
  return (
    <div>
      <Aside></Aside>
      
      <Outlet></Outlet>
    </div>

  )
}

export default Dash