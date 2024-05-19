import React, { useEffect,useState  } from 'react'
import { useNavigate} from 'react-router-dom';

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
  const Logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
}
  return (
    <div>hello formateur {user.nom+" "+user.prenom}
    <button 
    onClick={Logout}
    >
Logout
    </button>
    </div>
  )
}

export default FormateurProfile