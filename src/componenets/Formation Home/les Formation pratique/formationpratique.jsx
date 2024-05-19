
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import courspic  from '../../../assets/image/plan.png'



import axios from 'axios';
import NoData from '../../profile Apprenant/mes groupes/nodata';
import Modal from '../../AdminDash/Apprenant/create apprenant form/modal/modal';




function FormationPratiqueTable() {
   
    const [formation, setFormation] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const handleShowForm = (formationid) => {
        const form =<p>gg</p>;
        setModalContent(form);
        setModalOpen(true);
      };
   
    useEffect(() => {
        // URL of the API endpoint


        fetch(`http://localhost:3500/formation/formationPratique`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                 return response.json()
            })
            .then(data => {
                console.log(data)
                setFormation(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    },1000);
  

    if (isLoading) return <p>Loading...</p>;
    if (error) return <NoData></NoData>;
    if (!formation) return <NoData></NoData>
 
  console.log(formation)
 
  return (
    <div className='grid p-12 grid-cols-2 md:grid-cols-3 gap-7'>
         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
  {(formation && formation.length > 0)? formation.map((item)=> (
  <div className=" w-[400px] rounded-xl overflow-hidden shadow-lg bg-white ">
  <img
    className=" h-[300px] w-full" 
    src={courspic}
    alt="Sunset in the mountains"
  />
  <div className="px-6 py-4">
    <h1 className='text-bold'>Nom :{item.nom}</h1>
    <h1 className='text-bold'>Prix :{item.prix} par mois</h1>
    <h1 className='text-bold'>Domaine :{item.domain}</h1>
    <h1 className='text-bold'>Durée :{item.duree} heurs</h1>
    <h1 className='text-bold'>Date de début :{item.dateDebut.split('T')[0]}</h1>
    <h1 className='text-bold'>Date de Fin :{item.dateFin.split('T')[0]}</h1>
    
  </div>
  <div className="px-6 pt-4 pb-2">
    <button  onClick={()=>handleShowForm(item._id)} className="inline-block bg-blue-800 hover:bg-blue-950 rounded-full px-3 py-2 text-lg font-semibold text-amber-500 mr-2 mb-2">
      Participer
    </button>
   
   
  </div>
</div>)
):<p></p>}


</div>
  )
}

export default FormationPratiqueTable