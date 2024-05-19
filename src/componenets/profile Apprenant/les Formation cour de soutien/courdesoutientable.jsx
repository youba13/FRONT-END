
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import courspic  from '../../../assets/image/cours.jpg'



import axios from 'axios';
import NoData from '../mes groupes/nodata';
import Modal from '../../AdminDash/Apprenant/create apprenant form/modal/modal';
import GroupSelect from './participerform';



function CourDeSoutienTable() {
    const array =["a","b"]
    const [formation, setFormation] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
    const handleShowForm = (formationid) => {
        const form =<GroupSelect formation={formationid}></GroupSelect>;
        setModalContent(form);
        setModalOpen(true);
      };
    const apprenantid =JSON.parse(localStorage.getItem('user'))._id;
    useEffect(() => {
        // URL of the API endpoint


        fetch(`http://localhost:3500/formation/courDeSoutien`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
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
    if (!formation && formation.langth < 0) return <NoData></NoData>
 
  console.log(formation)
 
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
         <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
  { formation.map((item)=> (
  <div className="max-w-sm  rounded-xl overflow-hidden shadow-lg bg-white ">
  <img
    className="w-full" 
    src={courspic}
    alt="Sunset in the mountains"
  />
  <div className="px-6 py-4">
    <h1 className='text-bold'>Nom :{item.nom}</h1>
    <h1 className='text-bold'>Formateur :{item.formateur}</h1>
    <h1 className='text-bold'>Prix :{item.prix} par mois</h1>
    <h1 className='text-bold'>Niveau Academique :{item.annee+"éme année "+item.niveau+" "+item.filiere}</h1>
    <h1 className='text-bold'>Matiere :{item.matiere}</h1>
    
  </div>
  <div className="px-6 pt-4 pb-2">
    <button  onClick={()=>handleShowForm(item._id)} className="inline-block bg-blue-800 hover:bg-blue-950 rounded-full px-3 py-2 text-lg font-semibold text-amber-500 mr-2 mb-2">
      Participer
    </button>
   
   
  </div>
</div>)
)}


</div>
  )
}

export default CourDeSoutienTable