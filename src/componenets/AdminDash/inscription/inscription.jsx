import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NoData from '../../profile Apprenant/mes groupes/nodata';
import Navdashboard from '../navdash/navdash';

function Inscription() {
    const [inscritptions ,setInscriptions]= useState([])
    const fetchInscriptions=  async () => {
        fetch('http://localhost:3500/inscriptions')
          .then(response => response.json())
          .then(data => {setInscriptions(data) 
        })
          .catch(error => console.error('Error fetching data: ', error));
      };
      useEffect(()=>{
        fetchInscriptions();
        const interval = setInterval(fetchInscriptions, 1000); // Fetch every 5 seconds
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      },[])
      const deletePaiement = async (inscriptionid) => {
        try {
            const response = await fetch(`http://localhost:3500/inscriptions/${inscriptionid}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                
                alert("operation completed")
            } else {
                throw new Error('Failed to delete the inscriptions.');
            }
        } catch (error) {
            console.error('Error deleting inscription:', error);
        }
    };
    const confirmInscription = async (id) => {
      const response = await fetch(`http://localhost:3500/inscriptions/comfirmerinscription`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({inscription : id})
      });
      if (response.ok) {
         alert("inscription a été confirmée")
          
      } else {
          console.error('Failed to comfirme inscription');
      }
  };
  return (
    <div>
        <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
      <Navdashboard></Navdashboard>
    </div>
    <div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Les Inscriptions  :</h1>
      
    </div>
    <div className=' p-2 h-96 border bg-white   overflow-x-auto overflow-y-auto'>
   
   {inscritptions?inscritptions.map((item)=>(<div className=" my-3 w-full mx-auto p-4 rounded-md shadow-lg bg-gray-50">
        <h1 className="text-2xl font-bold text-indigo-500 mb-4">Inscription</h1>
        <p className="text-gray-700 text-left mb-4"><span className='text-bold'>Apprenant </span> :{item.apprenant.nom} {item.apprenant.prenom} <span className='text-bold ml-8'>group :</span> {item.group.nom} </p>
        <p className="text-gray-700 text-left mb-4"><span className='text-bold'>Email :</span> {item.apprenant.email} <span className='text-bold ml-8'>Numéro De Téléphone :</span> {item.apprenant.numTelephone} </p>

        <div className="text-right">
            <button 
                 onClick={()=> confirmInscription(item._id)}
                className="inline-block hover:bg-green-500 bg-green-400 py-2 px-4 mr-4 text-white rounded-md font-semibold uppercase text-sm ">Comfirmer
            </button>
            <button 
                onClick={()=> deletePaiement(item._id)}
                className="inline-block hover:bg-red-600 bg-red-500 py-2 px-4 text-white rounded-md font-semibold uppercase text-sm ">Supprimer
            </button>
        </div>
    </div>)):<NoData></NoData> }
   
   
    

  </div>
</div>

     
    </div>
  </main>
  </div>
  )
}

export default Inscription