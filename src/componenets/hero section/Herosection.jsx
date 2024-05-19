import React from 'react'
import './Herosection.css'
import svgpic from '../../assets/image/Coding-workshop.png'
import { Link } from 'react-router-dom'

function Herosection() {
  return (
    <div className='herosection-container'>
        <section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      
      <h4 className="mb-4  font-bold tracking-tight leading-none xl:text-2xl dark:text-white">
        Obtenez Votre
      </h4>
      <h4 className="mb-4 text-1xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Certificat
      </h4>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Des formations Pratique– des cours de soutien – Résidentielles reconnues, qui propulsent votre qualification
      </p>
      <Link
        to="/register"
        className="herosection-button-inscription inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Inscription
      </Link>
      <Link
        to="/login"
        href="#"
        style={{
          marginLeft: '10px',
        }}
        className="herosection-button-connexion inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Connexion
      </Link>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src={svgpic}
        alt="mockup"
      />
    </div>
  </div>
 
</section>

    </div>
  )
}

export default Herosection