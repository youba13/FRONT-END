import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ApprenantProfile from './componenets/profile Apprenant/ApprenantProfile';


function VerifyToken() {
    const navigate = useNavigate();
  const [user, setUser] = useState("");
  const token = JSON.parse(localStorage.getItem('token'));
  const userinfo = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    
    const verifyCookie = async () => {
      if (!token) {
        return navigate("/login");
      }
      
      if(userinfo.role !== "Apprenant"){
        navigate("/login");
      }
      setUser(userinfo);
      
    };
    verifyCookie();
  }, []);
  
  return (
    
        <ApprenantProfile></ApprenantProfile>
    
  )
}

export default VerifyToken