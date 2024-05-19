import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react';
import NoData from '../../profile Apprenant/mes groupes/nodata';
import Modal from '../Apprenant/create apprenant form/modal/modal';

import EditAdminForm from './editadminform';
import AddAdminForm from './addadminform';
import Navdashboard from '../navdash/navdash';
function Admins() {
  const [Admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null)
  const handleShowForm = () => {
    const form = <AddAdminForm  onClose={() => setModalOpen(false)}/>
    setModalContent(form);
    setModalOpen(true);
  };
  const handleShowEditForm = (id) => {
    const form = <EditAdminForm  onClose={() => setModalOpen(false)} id={id}/>
    setModalContent(form);
    setModalOpen(true);
  };

  useEffect(() => {
      const fetchAdmins = async () => {
          try {
              const response = await axios.get('http://localhost:3500/admin');
              setAdmins(response.data); // assuming the server responds with an array of Admins
              setLoading(false);
              console.log(response.data)
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };

      const intervalId = setInterval(fetchAdmins, 1000); // 5000 milliseconds = 5 seconds

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
  }, );
  const  deleteItem= async (id)=> {
    try {
        const response = await fetch(`http://localhost:3500/admin/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log("operation completed")
            alert("admin deleted") // Refresh table after successful deletion
            
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
  <h1 className='text-bold'> Les Admins:</h1>
  <button onClick={()=>handleShowForm()} type="button" className="text-yellow-500 bg-blue-900 hover:bg-blue-950 focus:ring-4 font-bold focus:outline-none focus:ring-primary-300 py-2.5 px-5 me-2 mb-2 text-sm  rounded-lg border border-gray-200  focus:z-10  focus:ring-gray-100 ">Ajouter Admins</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
</div>
<div className='h-96 border bg-white   overflow-x-auto overflow-y-auto'>
 {(Admins.length > 0)?(   
   <div>
           
            <table  className=" w-full text-sm text-left rtl:text-right text-black-500 ">
                <thead className="text-xs text-yeallow-400 uppercase bg-blue-950 text-yellow-500">
                    <tr>
                        <th scope="col" class="px-6 py-3">Nom et Prénom</th>
                        <th scope="col" class="px-6 py-3">Email</th>
                        <th scope="col" class="px-6 py-3">Role</th>
                        

                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Admins.map(item => (
                        <tr key={item._id}>
                            <td className="px-6 py-4">{item.nom} {item.prenom}</td>
                            <td className="px-6 py-4">{item.email}</td>
                            <td className="px-6 py-4">{item.role}</td>
                            
                            <td className="px-6 py-4">
                                <button onClick={()=> handleShowEditForm(item._id)} className=' mr-4 text-white bg-green-400 p-2 rounded-lg hover:bg-green-500'  target="_blank" rel="noopener noreferrer">Edit</button>
                                <button onClick={()=> deleteItem(item._id)} className='text-white bg-red-500 p-2 rounded-lg hover:bg-red-600'  target="_blank" rel="noopener noreferrer">Delete</button>

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

export default Admins