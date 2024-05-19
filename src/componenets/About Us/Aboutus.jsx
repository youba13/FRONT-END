import React from 'react'
import './Aboutus.css'
import { Link } from 'react-router-dom'
import habib from '../../assets/image/habib.jpg'
import class00 from '../../assets/image/class1.png'

function Aboutus() {
  return (
    <div className="aboutus-container">
    <section className="bg-white ">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="font-light text-black sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black ">
        Qui somme  nous ?
        </h2>
        <p className="mb-4 text-black">
        Bienvenue à Tatwir Academy! Nous offrons des cours de soutien et des camps d'entraînement variés dans différents domaines. Nos programmes sont conçus pour vous fournir les compétences nécessaires à votre réussite professionnelle et personnelle. Rejoignez-nous pour une expérience d'apprentissage enrichissante et transformative !

        </p>
        
        <div className='mt-5'>
        <a className="button-to-contact" href="/#contact">Contacter nous</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          className="w-full h-[400px]  rounded-lg"
          src={class00}
          alt="office content 1"
        />
        <img
          className="mt-4 w-full lg:mt-10 rounded-lg"
          alt="office content 2"
          src={habib}
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Aboutus