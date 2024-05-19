
import React, { useState } from 'react';
import axios from 'axios';
function ApprenantForm({ onClose }) {
   
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
      alert("compte a été crée avec succee");
      
      onClose()
      // Handle post success (e.g., redirect or clear form)
  } catch (error) {
      console.error('Registration Error:', error);
      // Handle errors here (e.g., show error message)
  }
};

  // Handle input change
 

  return (
    <div style={{maxHeight:"620px"}} className="overflow-y-auto w-full bg-white md:mt-0 sm:max-w-md xl:p-0  ">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Créer un Apprenant
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
            <div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black "
            >
              Nom
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
              Prenom
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
              Your Date De Naissance
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
              Adress
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
            Numéro de Téléphone
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
            Email
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
             Filiere
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
              Password
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
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-400 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-lighttext-sm  text-black"
              >
                I accept the{" "}
               
              </label>
            </div>
          </div>
          <br/><br/>
          <button
            type="submit"
            className="w-full text-amber-500 bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Create an account
          </button>
          
         
          </div>
        </form>
    </div>
  </div>
  );
}
export default ApprenantForm;