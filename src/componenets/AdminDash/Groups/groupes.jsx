import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'
import Modal from '../Apprenant/create apprenant form/modal/modal';
import ApprenantsOfGroup from './apprenantofgroup';
import ChatRoom from '../../ChatRoom';
import Navdashboard from '../navdash/navdash';
import Bibliofiles from '../../biblio';




function Groups() {
  const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const userinfo = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        async function fetchGroups() {
            try {
                // Fetch the initial list of groups
                const response = await axios.get('http://localhost:3500/group');
                const groupsData = response.data;
                console.log(groupsData)
                // Fetch each formateur for each group
                const groupsWithDetails = await Promise.all(groupsData.map(async group => {
                  // Fetch formateur details
                  const formateurResponse = await axios.get(`http://localhost:3500/formateur/${group.formateur}`);
                  // Fetch formation details
                //  const formationResponse = await axios.get(`http://localhost:3500/formation/FormationPratique/${group.formation}`);
                
                  return {
                      ...group,
                      formateurName: formateurResponse.data.nom+" "+formateurResponse.data.prenom, // assuming the formateur's name is what you want to display
                     // formationDetails: formationResponse.data // replace formation ID with detailed object
                  };
              }));
              console.log(groupsWithDetails)
              setGroups(groupsWithDetails); 
            } catch (error) {
                console.error('Error fetching groups or formateurs:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchGroups();
    }, []);
    const ShwoApprenants = async (group)=>{
      const form =<ApprenantsOfGroup group={group}></ApprenantsOfGroup>;
      setModalContent(form);
      setModalOpen(true);
    }
    const ShowChatRoom = async (id)=>{
      const form = <ChatRoom userId={userinfo._id} groupId={id}></ChatRoom>;
      setModalContent(form);
      setModalOpen(true);
     }
     const biblio = async (id)=>{
        const form = <Bibliofiles group={id}></Bibliofiles>
        setModalContent(form);
        setModalOpen(true);
       }
    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    
  return (
    <div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
<div >
  

 <Navdashboard></Navdashboard>
</div>
<div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
<div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
  <h1> Les Groups  :</h1>
   
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
                                Formateur
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
                                    <p className="text-gray-900 whitespace-no-wrap">{group.formateurName}</p>
                                </td>
                                
                                <td className="px-5 flex justify-between overflow-x-auto py-5 border-b border-gray-200 bg-white text-sm">
                                <button onClick={()=> ShowChatRoom(group._id)} href="#" className=" mr-2 font-medium bg-blue-400 text-white  p-2 rounded-lg hover:bg-blue-500">CHATROOM</button>
                                <button onClick={()=> biblio(group._id)} className="mr-2 font-medium bg-purple-500 text-white  p-2 rounded-lg hover:bg-purple-600">Bibliothéque PDF</button>

                                <button onClick={()=> ShwoApprenants(group)} className='bg-green-500 p-2 text-white hover:bg-green-600 rounded-lg'>Apprenant</button> 
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

export default Groups