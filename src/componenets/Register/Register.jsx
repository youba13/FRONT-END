import React, { useEffect, useState ,useRef} from 'react';
import './Register.css'

import axios from 'axios';
import logo from '../../assets/image/Fichier 2.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Modal from '../AdminDash/Apprenant/create apprenant form/modal/modal';
import SuccesOp from '../AdminDash/Apprenant/create apprenant form/modal/succesOp';
function Register() {
  const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)

    const [formData, setFormData] = useState({
        password: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        adress: '',
        numTelephone: '',
        email: '',
        niveau: '',
        filiere: '',
        annee: '' // This is simplified, adjust if your schema is more complex
    });
  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/apprenant', formData);
            console.log('Registration Success:', response.data);
            setModalContent(<SuccesOp message={"votre compte a été crée avec succée"}></SuccesOp>)
            setModalOpen(true)
            setFormData({ password: '',
            nom: '',
            prenom: '',
            dateNaissance: '',
            adress: '',
            numTelephone: '',
            email: '',
            niveau: '',
            filiere: '',
            annee: '' })
            
            
            // Handle post success (e.g., redirect or clear form)
        } catch (error) {
            console.error('Registration Error:', error);
            // Handle errors here (e.g., show error message)
        }
    };

    return (
        <div className=''>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
        <Header></Header>
        <section  className="registration-section my-p ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 w-auto lg:py-0">
    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
    >
      <img
        className="w-24 h-24 mr-2 mt-5"
        src={logo}
        alt="logo"
      />
     
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
         Créer un compte
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
            <div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black "
            >
              Votre Nom
            </label>
            <input
              type="text" name="nom" value={formData.nom} onChange={handleInputChange} required placeholder="Nom" 
              className="bg-gray-50 border  text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Votre Prenom
            </label>
            <input
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} required placeholder="Prenom"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Date De Naissance
            </label>
            <input
              
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleInputChange} required 
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Votre Adress
            </label>
            <input
              
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="adress" value={formData.adress} onChange={handleInputChange} required placeholder
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Votre Numéro de Téléphone
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="numTelephone" value={formData.numTelephone} onChange={handleInputChange} required 
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Votre Email
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email" name="email" value={formData.email} onChange={handleInputChange} required 
            />
          </div>
          </div>
          <div>
          <h2 className='text-black'>Niveau Académique :</h2>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Niveau
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="niveau" value={formData.niveau} onChange={handleInputChange} required 
            />
          </div>
          <div>
            <label
              htmlFor="filiere"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Filiére
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="filiere" value={formData.filiere} onChange={handleInputChange}  
            />
          </div>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Année
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="annee" value={formData.annee} onChange={handleInputChange} required 
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mot de passe
            </label>
            <input
              type="password" name="password" value={formData.password} onChange={handleInputChange} required 
              placeholder="••••••••"
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            />
          </div>
          </div>
          </div>
          <div>
         
          <br/><br/>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Comfirmer
          </button>
          <br/><br/>
          <p className="text-sm font-light text-black">
           
            <Link
              to='/login'
              className="font-bold  text-blue-400 hover:underline dark:text-primary-500"
            >
              Vous avez déja un compte ?
            </Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

        <Footer></Footer>
        </div>
        );
}

export default Register