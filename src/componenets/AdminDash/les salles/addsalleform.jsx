import React, { useState } from 'react'
import axios from 'axios';
function AddSalleForm({onClose}) {
    const [salle ,setSalle] = useState({
        nom :"",
        capacite :"",
        description :""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSalle(prevState => ({
            ...prevState,
            [name]: value
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          
            const response = await axios.post('http://localhost:3500/salle', salle);
            console.log('Registration Success:', response.data);
            alert("La Salle a été ajoutée");
            
            onClose()
            // Handle post success (e.g., redirect or clear form)
        } catch (error) {
            console.error('Registration Error:', error);
            // Handle errors here (e.g., show error message)
        }
      };
  return (
    <main id="content" role="main" className="w-full  max-w-md mx-auto">
  <div className="mt-7 bg-white  rounded-xl shadow-lg  border-indigo-300">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 ">
         Ajouter Une Salle
        </h1>
       
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold ml-1 mb-2 "
              >
              Nom
              </label>
              <div className="relative">
                <input
                value={salle.nom} onChange={handleInputChange}
                  type="nom"
                  id="nom"
                  name="nom"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required=""
                  aria-describedby="Nom de Salle"
                />
              </div>
              
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold ml-1 mb-2 "
              >
                Capacité
              </label>
              <div className="relative">
                <input
                value={salle.capacite} onChange={handleInputChange}
                  type="number"
                  id="capacite"
                  name="capacite"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required=""
                  aria-describedby="Cpacité"
                />
              </div>
              
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold ml-1 mb-2 "
              >
                Déscription
              </label>
              <div className="relative">
                <input
                value={salle.description} onChange={handleInputChange}
                  type="description"
                  id="description"
                  name="description"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required=""
                  aria-describedby="Déscription"
                />
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                Please include a valid email address so we can get back to you
              </p>
            </div>
            
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Ajouter
            </button>
            <button
              onClick={onClose}
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Anuller
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
 
</main>

  )
}

export default AddSalleForm