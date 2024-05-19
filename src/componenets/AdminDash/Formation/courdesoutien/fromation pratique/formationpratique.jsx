import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react';
import Modal from '../../../Apprenant/create apprenant form/modal/modal';
import NoData from '../../../../profile Apprenant/mes groupes/nodata';
import CourDeSoutienForm from './addFormationForm';
import GroupesFormation from './groupesformation';
import Navdashboard from '../../../navdash/navdash';
function FormationPratiqueAdmin() {
  const [salles, setSalles] = useState([]);
  const [formateur ,setFormateur] =useState("hhh")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null)
  const ShwoAddFormationForm = () => {
    const form = <CourDeSoutienForm></CourDeSoutienForm>
    setModalContent(form);
    setModalOpen(true);
  };
  const ShowEditForm = (id) => {
    const form = <p>Edit form</p>
    setModalContent(form);
    setModalOpen(true);
  }; 
  const ShowGroups = (id) => {
    const form = <GroupesFormation  formationid={id}></GroupesFormation>
    setModalContent(form);
    setModalOpen(true);
  };
  useEffect(() => {
      const fetchSalles = async () => {
          try {
              const response = await axios.get('http://localhost:3500/formation/formationPratique');
              setSalles(response.data); // assuming the server responds with an array of salles
              setLoading(false);
              
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };
     

      const intervalId = setInterval(fetchSalles, 1000); // 5000 milliseconds = 5 seconds

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
  }, );
  const  deleteItem= async (id)=> {
    try {
        const response = await fetch(`http://localhost:3500/formation/formationPratique/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log("operation completed")
            alert("romm deleted") // Refresh table after successful deletion
            
        } else {
            console.error('Failed to delete item');
        }
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}


  return (
    <div>
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
<div>
  <Navdashboard></Navdashboard>
</div>
<div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
<div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
  <h1 className='text-bold'> Les Formations Pratiques:</h1>
  <button onClick={()=>ShwoAddFormationForm()} type="button" className="text-yellow-500 bg-blue-900 hover:bg-blue-950 focus:ring-4 font-bold focus:outline-none focus:ring-primary-300 py-2.5 px-5 me-2 mb-2 text-sm  rounded-lg border border-gray-200  focus:z-10  focus:ring-gray-100 ">Ajouter Formation</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
</div>
<div className='h-96 border bg-white   overflow-x-auto overflow-y-auto'>
 {(salles.length > 0)?(   
   <div>
           
            <table  className=" w-full text-lg  text-left rtl:text-right text-black-500 ">
                <thead className="text-xs text-yeallow-400 uppercase bg-blue-950 text-yellow-500">
                    <tr>
                        <th scope="col" class="px-6 py-3">Nom</th>
                        <th scope="col" class="px-6 py-3">Domain</th>
                        <th scope="col" class="px-6 py-3">Descriptions</th>
                        <th scope="col" class="px-6 py-3">Nombre d inscriptions</th>
                        <th scope="col" class="px-6 py-3">Prix</th>
                        <th scope="col" class="px-6 py-3">Nombre de groupes</th>
                        <th scope="col" class="px-6 py-3">Spécialité</th>

                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {salles.map(item => (
                        <tr key={item._id}>
                            <td className="px-6 py-4">{item.nom}</td>
                            <td className="px-6 py-4">{item.domain}</td>
                            <td className="px-6 py-4">{item.description}</td>
                            <td className="px-6 py-4">{item.inscriptions.length}</td>
                            <td className="px-6 py-4">{item.prix}</td>
                            <td className="px-6 py-4">{item.groups.length}</td>
                            <td className="px-6 py-4">{item.specialite}</td>
                            <td className=" flex justify-between px-6 py-4">
                                <button onClick={()=> ShowEditForm(item._id)} className='mr-2  text-white bg-green-400 p-2 rounded-lg hover:bg-green-500'  target="_blank" rel="noopener noreferrer">Edit</button>
                                <button onClick={()=> deleteItem(item._id)} className=' mr-2 text-white bg-red-500 p-2 rounded-lg hover:bg-red-600'  target="_blank" rel="noopener noreferrer">Delete</button>
                                <button onClick={()=> ShowGroups(item._id)} className='  text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600'  target="_blank" rel="noopener noreferrer">Groupes</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>):<NoData></NoData>}
</div>
</div>

 
</div>
</main>
</div>
  )
}

export default FormationPratiqueAdmin