import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';

import TimetableDisplay from './TimeTbale';

import Modal from '../../AdminDash/Apprenant/create apprenant form/modal/modal';





function EmploiTempsFormateur() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null)
  const userinfo = JSON.parse(localStorage.getItem('user'));
  
  const [groups,setGroups] =useState([])
  const fetchGroups = async () => {
    try {
        const groupFetchPromises = userinfo.groups.map(id =>
            axios.get(`http://localhost:3500/group/${id}`)
        );
        const groupResponses = await Promise.all(groupFetchPromises);
        setGroups(groupResponses.map(response => response.data));
    } catch (err) {
        console.error('Failed to fetch groups:', err);
        
    } 
};
useEffect(() => {
    

  const interval = setInterval(fetchGroups, 1000); // Fetch every 5 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <div>
   
    <main className="bg-gray-200 p-4 md:ml-60 min-h-[100vh] pt-20">
    
    <div className="  rounded-lg border-gray-300 dark:border-gray-600   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Emploi du Temps de groupes :</h1>
      <div className='flex justify-between w-96 items-center'>
        <label for='group'>Groupe :</label>
      <select id='group' className="w-[100px] px-2 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
        
        <option ></option>
        <option ><a href='#group2'>Groupe2</a></option>
        <option ><a href='#group1'>Groupe1</a></option>
    
      </select>
      
      </div>
    </div>
    <div className=' min-h-[90vh] border bg-white   overflow-x-auto overflow-y-auto'>
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

export default EmploiTempsFormateur