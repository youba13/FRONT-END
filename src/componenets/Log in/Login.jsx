import React, { useState } from 'react'
import axios from 'axios'
import logo from '../../assets/image/Fichier 2.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link, useHistory, useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
  localStorage.removeItem("token")
    localStorage.removeItem("user")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const { data } = await axios.post('http://localhost:3500/auth', { email, password });
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
        if(data.user.role === "Apprenant"){
        navigate('/profilestudent/mesgroupes');
        }else if(data.user.role === "formateur"){
          navigate('/profileformateur/groupe');
        }
        else if(data.user.role === "admin"){
          navigate('/admin/apprenant');
        }
    } catch (error) {
       console.log("failed to login") 
       setError("Failed to Login")
    }
};
  
  return (
    <div>
      <Header></Header>
    <div className="min-h-screen bg-gray-100 text-gray-900 mt-16 flex justify-center">
  <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    <div className=" lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className='flex justify-center'>
        <img
          src={logo}
          className=""
          style={{width:"150px"}}
        />
      </div>
      <div className=" flex flex-col items-center">
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
          <p className='mt-6 text-bold text-red-500'>{error}</p>
          </div>
          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
            Connecter avec votre Email 

            </div>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
              value={email} onChange={e =>{ setEmail(e.target.value); setError("")}}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
              value={password} onChange={e => {setPassword(e.target.value); ; setError("")}}
            />
            <button type='submit' className="mt-5 tracking-wide font-semibold bg-blue-900 text-white w-full py-4 rounded-lg hover:bg-orange-400/100 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <svg
                className="w-6 h-6 -ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="8.5" cy={7} r={4} />
                <path d="M20 8v6M23 11h-6" />
              </svg>
              <span className="ml-">Connecter</span>
            </button>
            
            <p className="mt-6 text-xs text-black text-center">
            
              Vous avez pas un compte ?
              <Link to='/register' className="border-b border-gray-500 border-dotted">
               Créer un compte 
              </Link>
            
              
            </p>
            <p className="mt-6 text-xs text-black text-center">
            <button to='/register' className="border-b text-blue-500 border-dotted">
              Mot de passe oublié ?
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
    <div className="flex-1 bg-svg text-center hidden lg:flex">
      <div
        className="m-12 xl:m-16 w-20 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz")'
        }}
      ></div>
    </div>
  </div>
</div>
<Footer></Footer>
</div>

  )
}

export default Login