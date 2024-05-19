
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function EditApprenant({ onClose , apprenantid}) {
  const [apprenant,setApprenant] = useState(null)
  console.log(apprenant)
  const [formData, setFormData] = useState({
    
    nom: '',
    prenom: '',
    dateNaissance: '',
    adress: '',
    numTelephone: '',
    email: '',
    specialite:''// This is simplified, adjust if your schema is more complex
});
  useEffect(() => {
    // Function to fetch user data
    
    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/formateur/${apprenantid}`);
            setApprenant(response.data);  // Set user data to state
            console.log(response.data)
            formData.nom =response.data.nom
            formData.prenom =response.data.prenom
            formData.dateNaissance =response.data.dateNaissance
            formData.adress =response.data.adress
            formData.numTelephone =response.data.numTelephone
            formData.email =response.data.email
            formData.specialite =response.data.specialite
        } catch (err) {
            console.log('Failed to fetch user: ' + err.message);  // Set error message to state
        }
    };

    fetchUserData();
}, []); 
  
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
    console.log(formData)
      const response = await axios.patch(`http://localhost:3500/formateur/${apprenantid}`, formData);
      console.log('Registration Success:', response.data);
      alert("compte a été modifiée avec succee");
      
      onClose()
      // Handle post success (e.g., redirect or clear form)
  } catch (error) {
      console.log('Registration Error:', error);
      // Handle errors here (e.g., show error message)
  }
};

  // Handle input change
 

  return (
    <div style={{maxHeight:"620px"}} className="overflow-y-auto w-full bg-white md:mt-0 sm:max-w-md xl:p-0  ">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Modifier le Formateur
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
              <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
             Spécialité
            </label>
            <input
            
              className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text" name="specialite" value={formData.specialite} onChange={handleInputChange} required 
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
export default EditApprenant;