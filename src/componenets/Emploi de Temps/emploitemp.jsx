import React, { useEffect,useState } from 'react'
import axios from 'axios'
import logo from '../../assets/image/Fichier 2.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useHistory, useNavigate } from 'react-router-dom';
import TimetableDisplay from './TimeTbale'

function EmploiTempsHome() {
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
  
  return (
    <div>
      <Header></Header>
    <div className='mt-[100px]'>
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Emploi du Temps des groupes :</h1>
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
<Footer></Footer>
</div>

  )
}

export default EmploiTempsHome