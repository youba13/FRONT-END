import React, { useState } from 'react'
import './apprenantAside.css'
import logo from "./images/schoolLogo.png"
import studenticon from "../../assets/image/student.png"
import { Link, Routes, useNavigate } from 'react-router-dom'
import Apprenant from '../AdminDash/Apprenant/apprenant'

function ApprenantAside() {
    const navigate = useNavigate()
   const [showformation ,setshowformation]  = useState(false)
   const apprenant = JSON.parse(localStorage.getItem('user'));
   const Logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
}
   
 
  return (
   
    <div className='admin-dash'>
    <nav className="border-none fixed top-0 z-50 w-full school-color-blue border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover-link-aside focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
              <img
                src={logo}
                className="h-12 w-12 me-3"
                alt="tatwir academy logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Tatwir Academy
              </span>
            </a>
          </div>
        
          <div className="flex items-center">
            <button 
            onClick={Logout}
            className='p-2 bg-orange-400 rounded-md hover:bg-orange-500'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    {/*PAIMENTS DIV*/}
  
    {/*            */}
    <aside
      id="logo-sidebar"
      className=" border-none fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full school-color-blue border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto school-color-blue dark:bg-gray-800">
        <div className='w-full h-auto flex flex-col justify-center items-center mb-7'>
           <img
            src={studenticon}
            className=' h-44 w-full'
           />
           <h3>{apprenant.nom + " "+apprenant.prenom}</h3>
        </div>
        <ul className="space-y-2 font-medium">
            
          <li>
            <Link
              to="/profilestudent/home"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profilestudent/mesgroupes"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Mes Groupes</span>
            </Link>
          </li>
          <li>
            <button
              onClick={()=> setshowformation(!showformation)}
              type="button"
              className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover-link-aside dark:text-white dark:hover:bg-gray-700"
              
              
            >
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Formations
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul style={(showformation == false)?{display:"none"}:{display:"block"}}  className="py-2 space-y-2">
              <li>
                <Link
                 to='/profilestudent/formationcourdesoutien'
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover-link-aside dark:text-white dark:hover:bg-gray-700"
                >
                  Cours De Soutien
                </Link>
              </li>
              <li>
                <Link
                  to="/profilestudent/formationpratique"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover-link-aside dark:text-white dark:hover:bg-gray-700"
                >
                  Formation Pratique
                </Link>
              </li>
              <li>
                <Link
                  to="/profilestudent/fromationdelangue"
                  className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover-link-aside dark:text-white dark:hover:bg-gray-700"
                >
                  Formation De Langue
                </Link>
              </li>
            </ul>
          </li>
          <li>
            
            <Link
             to="/profilestudent/contact"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Contacter l'école</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profilestudent/mespaiements"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Mes Paiements</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profilestudent/bibliotheque"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Bibliothéque</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profilestudent/moncompte"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
             <svg
                className="w-5 h-5 group-hover:text-gray-900 text-white transition duration-75  hover-link-aside dark:hover-link-aside"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Mon Compte</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profilestudent/emploitemps"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover-link-aside dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-6 h-6 text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Emploi de Temps</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </aside>
   
    </div>
    
  
  )
}

export default ApprenantAside