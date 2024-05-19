
import React, { useState, useEffect } from 'react';
import Modal from './create apprenant form/modal/modal';
import PaiementForm from './paiementform';



function PaiementTable({userid}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    
    

    useEffect(() => {
    
        const intervalId = setInterval(fetchUser, 1000); // 5000 milliseconds = 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://localhost:3500/apprenant/${userid}`); // Change the URL as needed
            const data = await response.json();
            setUser(data);
            
            setIsLoading(false);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            setIsLoading(false);
        }
    };
    function renderPaymentsTable() {
        if (!user || user.paiements.length === 0) {
            return <p>No payments found.</p>;
        }
    
        return (
            <div  className=' max-h-96 overflow-x-auto'>
            <table className='rounded-xlw-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='bg-blue-950 text-amber-500'>
                    <tr>
                        <th className='p-2'>group</th>
                        <th className='p-2'>Date</th>
                        <th className='p-2'>Montan</th>
                        <th className='p-2'>Notes</th>
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-black border '>
                    {user.paiements.map(paiement => (
                        <tr key={paiement._id}>
                            <td  scope="col" className="px-6 py-3">{paiement.group}</td>
                            <td scope="col" className="px-6 py-3 ">{new Date(paiement.date).toLocaleDateString()}</td>
                            <td  scope="col" className="px-6 py-3">{paiement.montant}</td>
                            <td  scope="col" className="px-6 py-3">{paiement.notes}</td>
                            <td  scope="col" className="px-6 py-3">
                                <button className='text-white p-1 bg-red-500 hover:bg-red-600 rounded-md' onClick={() => deletePaiement(paiement._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }

    const deletePaiement = async (paiementId) => {
        try {
            const response = await fetch(`http://localhost:3500/apprenant/paiementapprenant/${paiementId}/${userid}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the payment from the local state to update UI
                setUser(prev => ({
                    ...prev,
                    paiements: prev.paiements.filter(p => p._id !== paiementId)
                }));
                alert("operation completed")
            } else {
                throw new Error('Failed to delete the payment.');
            }
        } catch (error) {
            console.error('Error deleting payment:', error);
        }
    };

   
    const ShowPaiementForm = async()=>{
      
            const form =<PaiementForm userid={user._id}></PaiementForm>;
            setModalContent(form);
            setModalOpen(true);
         
    }
    
    
  return (
    <div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
      
        <div className='flex justify-between py-4 my-2 items-center'>
            <h1>Les paiements</h1>
            <button onClick={()=> ShowPaiementForm()} className='p-1 text-amber-500 bg-blue-900 rounded-md hover:bg-blue-950'>Ajouter</button>
        </div>
    <div>{isLoading ? <p>Loading...</p> :renderPaymentsTable()}</div>
    </div>
  )
}

export default PaiementTable