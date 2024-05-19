
import React, { useState, useEffect } from 'react';
import Modal from '../../../Apprenant/create apprenant form/modal/modal';
import axios from 'axios';

import AddGroupForm from './addGroupForm';

function GroupesFormation({formationid}) {
    const [formation, setFormation] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    
    
  console.log(groups)
    useEffect(() => {
    
        const intervalId = setInterval(fetchUser, 1000); // 5000 milliseconds = 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
 
   const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:3500/formation/formationDeLangue/${formationid}`); // Change the URL as needed
            const data = await response.json();
            setFormation(data);
            fetchGroups(data.groups)
           
            
            setIsLoading(false);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setIsLoading(false);
        }
    };
    async function fetchGroups(groupIds) {
        try {
          const promises = groupIds.map(id => axios.get(`http://localhost:3500/group/${id}`));
          const groupResults = await Promise.all(promises);
          console.log(groupResults)
          const groupsWithFormateurs = await Promise.all(
            groupResults.map(async (groupResult) => {
              const group = groupResult.data;
              const formateurResponse = await axios.get(`http://localhost:3500/formateur/${group.formateur}`);
             group.formateur =formateurResponse.data
             return { ...group, formateur: formateurResponse.data };
            })
          );
          
          console.log(groupsWithFormateurs)
          setGroups(groupsWithFormateurs);
          
        } catch (error) {
          console.error('Failed to fetch groups:', error);
          
        }
      }
      
    function renderGroupesTable() {
        if (!groups || groups.length === 0) {
            return <p>No Groups found.</p>;
        }
    
        return (
            <div  className=' max-h-96 overflow-x-auto'>
            <table className='rounded-xlw-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='bg-blue-950 text-amber-500'>
                    <tr>
                        <th className='p-2'>Nom</th>
                        <th className='p-2'>Niveau</th>
                        <th className='p-2'>Nombre des Apprenants</th>
                        <th className='p-2'>Formateur</th>
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-black border '>
                    {groups.map(group => (
                        <tr key={group._id}>
                            <td  scope="col" className="px-6 py-3">{group.nom}</td>
                            <td scope="col" className="px-6 py-3 ">{group.niveau || " "}</td>
                            <td  scope="col" className="px-6 py-3">{group.apprenants.length}</td>
                            <td  scope="col" className="px-6 py-3">{group.formateur.nom+" "+group.formateur.prenom}</td>
                            <td  scope="col" className="px-6 py-3">
                                <button className='text-white p-1 bg-red-500 hover:bg-red-600 rounded-md' onClick={() => deletegroup(group._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }

    const deletegroup = async (groupId) => {
        try {
            const response = await fetch(`http://localhost:3500/group/${groupId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the payment from the local state to update UI
                setFormation(prev => ({
                    ...prev,
                    groups: prev.groups.filter(p => p._id !== groupId)
                }));
                alert("operation completed")
            } else {
                throw new Error('Failed to delete the payment.');
            }
        } catch (error) {
            console.error('Error deleting payment:', error);
        }
    };

   
    const ShowgroupForm = async()=>{
      
            const form =<AddGroupForm formation={formation}></AddGroupForm>;
            setModalContent(form);
            setModalOpen(true);
         
    }
    
    
  return (
    <div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
      
        <div className='flex justify-between py-4 my-2 items-center'>
            <h1>Les Groupes</h1>
            <button onClick={()=> ShowgroupForm()} className='p-1 text-amber-500 bg-blue-900 rounded-md hover:bg-blue-950'>Ajouter</button>
        </div>
    <div>{isLoading ? <p>Loading...</p> :renderGroupesTable()}</div>
    </div>
  )
}

export default GroupesFormation