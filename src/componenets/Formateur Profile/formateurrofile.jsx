import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import FormateurtHome from './FormateurHome';


function FormateurProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const token = JSON.parse(localStorage.getItem('token'));
  const userinfo = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    
    const verifyCookie = async () => {
      if (!token) {
        return navigate("/login");
      }
      
      if(userinfo.role !== "formateur"){
        navigate("/login");
      }
      setUser(userinfo);
      
    };
    verifyCookie();
  }, []);
  
   
  return (
    <div>
     <FormateurtHome></FormateurtHome>
    </div>
  )
}

export default FormateurProfile