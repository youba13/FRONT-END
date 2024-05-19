import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aside from '../Aside/aside'
import Modal from './create apprenant form/modal/modal';
import ApprenantForm from './create apprenant form/createApprenant';
import axios from 'axios';
import SuccesOp from './create apprenant form/modal/succesOp';
import { fetchGroup } from '../../../api/groups/groupapi';
import NoData from '../../profile Apprenant/mes groupes/nodata';
import EditApprenant from './create apprenant form/editApprenant';
import ApprenantInfo from './apprenantInfo';

import PaiementTable from './paiementtable';
import Navdashboard from '../navdash/navdash';




function Apprenant() {
    
   
    const [apprenants, setApprenants] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const handleDelete = async (apprenantId) => {
      try {
        const response = await axios.delete(`http://localhost:3500/apprenant/${apprenantId}`);
  
        console.log('Delete successful', response.data);
        const success = <SuccesOp></SuccesOp>;
        setModalContent(success);
        setModalOpen(true);
        fetchData()
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    };
    const handleShowForm = () => {
        const form = <ApprenantForm onClose={() => setModalOpen(false)} onSubmit={handleAddApprenant} />;
        setModalContent(form);
        setModalOpen(true);
      };
      const handleShowEditForm = (id) => {
        const form = <EditApprenant apprenantid={id} onClose={() => setModalOpen(false)} onSubmit={handleAddApprenant} />;
        setModalContent(form);
        setModalOpen(true);
      };
      
      const handleShowConfirmation = (message) => {
        const confirmation = (
          <div>
            <p>{message}</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        );
        setModalContent(confirmation);
        setModalOpen(true);
      };
      const handleShowInfo = (apprenant) => {
        const form = <ApprenantInfo apprenant={apprenant}></ApprenantInfo>;
        setModalContent(form);
        setModalOpen(true);
      };
      const handleShowPaiemenets = (id) => {
        const form =<PaiementTable  userid={id} ></PaiementTable>;
        setModalContent(form);
        setModalOpen(true);
      };
    const handleAddApprenant = (apprenantData) => {
        console.log(apprenantData); // Or process data, e.g., send to backend
        setModalOpen(false); // Close modal after submitting
      };

  const fetchData=  async () => {
    fetch('http://localhost:3500/apprenant')
      .then(response => response.json())
      .then(data => {setApprenants(data) 
    })
      .catch(error => console.error('Error fetching data: ', error));
  };
  useEffect(()=>{
    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  },[])
   if(!apprenants) return <NoData></NoData>
  return (
    <div>
        
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
      <Navdashboard></Navdashboard>
    </div>
    <div className="bg-white  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Les Apprenats :</h1>
      <button onClick={()=>handleShowForm()} type="button" className="text-yellow-500 bg-blue-900 hover:bg-blue-950 focus:ring-4 font-bold focus:outline-none focus:ring-primary-300 py-2.5 px-5 me-2 mb-2 text-sm  rounded-lg border border-gray-200  focus:z-10  focus:ring-gray-100 ">Ajouter Apprenant</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
    </div>
    <div className='h-96 border  overflow-x-auto overflow-y-auto'>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    
  <thead className=" text-yeallow-400 uppercase bg-blue-950 text-yellow-500">
                    <tr>
                        
                        <th scope="col" className="px-5 py-5">
                           nom et prenom
                        </th>
                        <th scope="col" className="px-5 py-5">
                            filiere
                         </th>
                        <th scope="col" className="px-5 py-5">
                            niveau
                        </th>
                        <th scope="col" className="px-5 py-5">
                            année
                        </th>
                        <th scope="col" className="px-5 py-5">
                            numero de telephone
                        </th>
                        <th scope="col" className="px-5 py-5">
                           email
                        </th>
                        <th scope="col" className="px-5 py-5">
                            Action
                        </th>
                    </tr>
                </thead>
    <tbody>
     
      
      
     
      
      {(apprenants.length > 0)?apprenants.map(apprenant =>(
      <tr key={apprenant._id} className="bg-white text-sm text-bold text-black dark:border-gray-700">
      <td className="px-6 py-4">{apprenant.nom + " "+apprenant.prenom}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.filiere}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.niveau}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.annee}</td>
        <td className="px-6 py-4">{apprenant.numTelephone}</td>
        <td className="px-6 py-4">{apprenant.email}</td>
        
       
        <td className="flex justify-between px-6 py-4 text-right">
          <button
          onClick={()=>handleShowEditForm(apprenant._id)}
           id='edit-button'
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
          >
              
            <svg className="w-8 h-8 text-gray-800 hover:text-yellow-500"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"/>
</svg>

          </button>
          <a
            onClick={()=> handleDelete(apprenant._id)}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
          >
            <svg className="w-8 h-8 text-gray-800 hover:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"/>
</svg>

          </a>
          <a
          onClick={()=> handleShowInfo(apprenant)} 
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
          >
            <svg className="w-8 h-8 text-gray-800 hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd"/>
</svg>

          </a>
          <a
              onClick={()=> handleShowPaiemenets(apprenant._id)}
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline "
          >
            <svg className="w-8 h-8 text-gray-800 hover:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
</svg>

          </a>
          
        </td>
      </tr>)):<NoData></NoData>}
     
    </tbody>
  </table>
  </div>
</div>

     
    </div>
  </main>
  </div>
  
  )
}

export default Apprenant