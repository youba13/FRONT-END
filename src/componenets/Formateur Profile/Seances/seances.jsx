import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '../../AdminDash/Apprenant/create apprenant form/modal/modal';
import axios from 'axios';
import { useEffect,useState } from 'react';
import SeanceTable from '../../AdminDash/Seances/seanceTbale';
import NavdashboardApprenant from '../profile Apprenant/navdash/navdash';

function SeancesFormateur() {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const [formateur,setFormateur] = useState(null)
    const userinfo = JSON.parse(localStorage.getItem('user'));
  
    
    
    
    const fetchGroups = async () => {
        try {
            const groupFetchPromises = userinfo.groups.map(id =>
                axios.get(`http://localhost:3500/group/${id}`)
            );
            const groupResponses = await Promise.all(groupFetchPromises);
            setGroups(groupResponses.map(response => response.data));
        } catch (err) {
            console.error('Failed to fetch groups:', err);
            
        } finally {
            setLoading(false); 
        }
    };
    useEffect(() => {
        
 
      const interval = setInterval(fetchGroups, 1000); // Fetch every 5 seconds
    
      return () => clearInterval(interval);
    }, []);
   
     const ShowSeances = async (group)=>{
        const content = <SeanceTable fetchGroups={()=>fetchGroups()} group={group}></SeanceTable>
        setModalContent(content)
        setModalOpen(true)
       }
    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
<div >
  

 <NavdashboardApprenant></NavdashboardApprenant>
</div>
<div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
<div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
  <h1> Les Séances  :</h1>
   
</div>
<div className='h-96 border bg-white   overflow-x-auto overflow-y-auto'>
 <div>
    <div>
    <div className="w-full overflow-y-auto">
                <table className="w-full overflow-y-auto leading-normal">
                    <thead className='bg-blue-950'>
                        <tr className='bg-blue-950 text-amber-500 '>
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                                Nom
                            </th>
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                                Type de Formation
                            </th>
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                                Nombre des Apprenants
                            </th>
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                                Niveau
                            </th>
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                                Nombre de Séances
                            </th>
                           
                            <th className="px-5 py-5 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                              Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map(group => (
                            <tr key={group._id} className='text-bold text-lg'>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{group.nom}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{group.typeDeFormation}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{group.apprenants.length}</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{group.niveau}</p>
                                </td>
                               
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">{group.seances.length}</p>
                                </td>
                                
                                <td className="px-5 flex justify-between overflow-x-auto py-5 border-b border-gray-200 bg-white text-sm">
                                <button onClick={()=> ShowSeances(group)} href="#" className=" mr-2 font-medium bg-blue-400 text-white  p-2 rounded-lg hover:bg-blue-500">Séances</button>
                                
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>  
    </div>
 </div>
</div>
</div>

 
</div>
</main>
</div>
  )
}

export default SeancesFormateur