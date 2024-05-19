import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import NavdashboardApprenant from '../navdash/navdash';
import TimetableDisplay from './TimeTbale';
import Modal from '../Apprenant/create apprenant form/modal/modal';

import AddEventForm from './EmploiForm';

function EmploiTemps() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null)
  const [groups,setGroups] =useState([])
  useEffect(() => {
    async function fetchGroups() {
        try {
            // Fetch the initial list of groups
            const response = await axios.get('http://localhost:3500/group');
            const groupsData = response.data;
            setGroups(groupsData)
         
        } catch (error) {
            console.error('Error fetching groups or formateurs:', error);
        }
    }

    fetchGroups();
}, []);
  const ShowForm = () => {
      const form =<AddEventForm onClose={setModalOpen}></AddEventForm>;
      setModalContent(form);
      setModalOpen(true);
    };

  return (
    <div>
       <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>    
    <main className="bg-gray-200 p-4 md:ml-60 min-h-[100vh] pt-20">
<div>
  
</div>
<div className="  rounded-lg border-gray-300 dark:border-gray-600    mb-2">
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
<div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
  <h1> L'Emplois du Temps  :</h1>
  <div className='flex justify-between w-96 items-center'>
        <label for='group'>Groupe :</label>
      <select id='group' className="w-[100px] px-2 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
        
        <option ></option>
        <option ><a href='#group2'>Groupe2</a></option>
        <option ><a href='#group1'>Groupe1</a></option>
    
      </select>
      <button onClick={()=> ShowForm()} className='bg-blue-900 hover:bg-blue-950 p-2 rounded-md text-amber-500'>Ajouter Emploi</button>
      
      </div></div>
<div className='min-h-[100vh]  border bg-white   overflow-x-auto overflow-y-auto'>
{groups.map((group)=>(
        <TimetableDisplay groupName={group.nom} id='group2' ></TimetableDisplay>
      ))}

</div>
</div>
 
 
</div>
</main>
</div>
  )
}

export default EmploiTemps