import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SuccesOp from '../Apprenant/create apprenant form/modal/succesOp';
import Modal from '../Apprenant/create apprenant form/modal/modal';
import SelectApprenantToAdd from './selectApprenant';


function ApprenantsOfGroup({group}) {
     

    const [apprenants, setApprenants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const userinfo = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        const fetchApprenants = async () => {
            const apprenantDetails = [];
            for (let id of group.apprenants) {
                try {
                    const response = await axios.get(`http://localhost:3500/apprenant/${id}`);
                    // Only add the apprenant if the request was successful
                    apprenantDetails.push(response.data);
                } catch (error) {
                    // Log the error specific to this ID but continue with other IDs
                    console.error(`Error fetching apprenant with ID ${id}:`, error.message);
                }
            }
            // Update the state or data structure with the fetched apprenants
            setApprenants(apprenantDetails);
            setLoading(false);
        };

        fetchApprenants();
    }, [group]);
    const handleDelete = async (apprenantId) => {
        try {
          const response = await axios.delete(`http://localhost:3500/group/${group._id}/${apprenantId}`);
          alert('apprenant was deleted')
          console.log('Delete successful', response.data);
          
        
          
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
    if (loading) return <div>Loading...</div>;
    const ShowApprenantsTOad  = ()=>{
        
        const form = <SelectApprenantToAdd onClose={() => setModalOpen(false)} group={group}></SelectApprenantToAdd>;
        setModalContent(form);
        setModalOpen(true);
    }
    console.log(group.apprenants)
    return (
        <div className="container mx-auto p-4">
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
            <div className='flex justify-between items-center'>
            <h2 className="text-lg font-semibold mb-4">Apprenant Details</h2>
            {(userinfo.role === 'admin')?<button onClick={()=> ShowApprenantsTOad()}  className='text-lg font-semibold mb-4 bg-blue-900 p-1 rounded-lg text-amber-500'>Ajouter Apprenant</button>:<p></p>}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-blue-950 text-amber-500">
                        <tr>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Prénom</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Date Naissance</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Adresse</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Num Téléphone</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Email</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {apprenants.map(apprenant => (
                            <tr key={apprenant._id} className="text-gray-700">
                                <td className="py-3 px-4">{apprenant.nom}</td>
                                <td className="py-3 px-4">{apprenant.prenom}</td>
                                <td className="py-3 px-4">{new Date(apprenant.dateNaissance).toLocaleDateString()}</td>
                                <td className="py-3 px-4">{apprenant.adress}</td>
                                <td className="py-3 px-4">{apprenant.numTelephone}</td>
                                <td className="py-3 px-4">{apprenant.email}</td>
                                <td className="py-3 px-4">
                                    <button onClick={()=> handleDelete(apprenant._id)} className='text-white bg-red-500 p-2 rounded-lg hover:bg-red-600'>
                                        delete
                                    </button>
                                    
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ApprenantsOfGroup