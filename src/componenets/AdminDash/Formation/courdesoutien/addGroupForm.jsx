import React, { useEffect, useState } from 'react'
import axios from 'axios';
function AddGroupForm({onClose , formation}) {
  console.log(formation,"hhhhhhhhhhh")
  const [allFormateur, setallFormateur] = useState([]);
    const [Group ,setGroup] = useState({
      nom: "",
      typeDeFormation: formation.type,
      formation:formation._id.toString(),
      formateur: "",
      emploiTemp: "",
      niveau:""
    })
    useEffect(() => {
      const fetchInscriptions=  async () => {
          try {
              const response = await fetch(`http://localhost:3500/formateur`); // Change the URL as needed
              const data = await response.json();
              setallFormateur(data);
              
              
          } catch (error) {
              console.error('Failed to fetch user:', error);
            
          }
        };
        fetchInscriptions()
  }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGroup(prevState => ({
            ...prevState,
            [name]: value
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/Group', {formation:{type:formation.type , _id : formation._id.toString()},group:Group});
            console.log({formation:{type:formation.type , _id : formation._id.toString()},group:Group})
            alert("La Group a été ajoutée");
            setGroup({
              nom: "",
           
            formateur: "",
            emploiTemp: "",
            niveau:""})
            onClose()
            // Handle post success (e.g., redirect or clear form)
        }catch(error) {
          
          console.log({formation:{type:formation.type , _id : formation._id.toString()},group:Group})
         
            // Handle errors here (e.g., show error message)
        }
      
      };
     
  return (
    <main id="content" role="main" className="w-full  max-w-md mx-auto">
  <div className="mt-7 bg-white  rounded-xl shadow-lg  border-indigo-300">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 ">
         Ajouter Un Groupe
        </h1>
       
      </div>
      <div className="mt-5">
        <form style={{maxHeight:"450px"}} className=' overflow-y-auto' onSubmit={handleSubmit}>
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
                value={Group.nom} onChange={handleInputChange}
                  type="text"
                  id="nom"
                  name="nom"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required=""
                  aria-describedby="Nom de Group"
                />
              </div>
              
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold ml-1 mb-2 "
              >
              Niveau
              </label>
              <div className="relative">
                <input
                value={Group.niveau} onChange={handleInputChange}
                  type="text"
                  id="nom"
                  name="niveau"
                  className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                  required=""
                  aria-describedby="Nom de Group"
                />
              </div>
              
            </div>
            
           
           
           
            <div>
                    <label htmlFor="groups" className="block text-sm font-medium text-gray-700">Formateur</label>
                    <select name="formateur"  onChange={handleInputChange} value={Group.formateur} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option></option>
    {(allFormateur.length > 0)?allFormateur.map((item)=>(<option value={item._id}>{item.nom} {item.prenom}</option>)):<option selected>No Formateur Available</option>}
    
  </select>
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

export default AddGroupForm