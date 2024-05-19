import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect,useState } from 'react';
import NoData from '../../profile Apprenant/mes groupes/nodata';
import Navdashboard from '../navdash/navdash';
function DemandesEmploi() {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchdemandes = async () => {
          try {
              const response = await axios.get('http://localhost:3500/demmande');
              setDemandes(response.data); // assuming the server responds with an array of demandes
              setLoading(false);
              console.log(response.data)
          } catch (err) {
              setError(err.message);
              setLoading(false);
          }
      };

      fetchdemandes();
  }, []);
  return (
    <div>
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
<div>
  <Navdashboard></Navdashboard>
</div>
<div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
<div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
<div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
  <h1> Les Demandes d'emploi  :</h1>
  
</div>
<div className='h-96 border bg-white   overflow-x-auto overflow-y-auto'>
 {(demandes.length > 0)?(   
   <div>
           
            <table  className="w-full text-sm text-left rtl:text-right text-black-500 ">
                <thead className="text-xs text-yeallow-400 uppercase bg-blue-950 text-yellow-500">
                    <tr>
                        <th scope="col" class="px-6 py-3">Nom</th>
                        <th scope="col" class="px-6 py-3">Email</th>
                        <th scope="col" class="px-6 py-3">Numéero De Téléphone</th>
                        <th scope="col" class="px-6 py-3">Spécialité</th>

                        <th scope="col" class="px-6 py-3">CV</th>
                    </tr>
                </thead>
                <tbody>
                    {demandes.map(demande => (
                        <tr key={demande._id}>
                            <td className="px-6 py-4">{demande.nom}</td>
                            <td className="px-6 py-4">{demande.email}</td>
                            <td className="px-6 py-4">{demande.numTelephone}</td>
                            <td className="px-6 py-4">{demande.specialite}</td>
                            <td className="px-6 py-4">
                                <a className='text-white bg-green-400 p-2 rounded-lg hover:bg-green-500' href={`http://localhost:3500/${demande.cvPath}`} target="_blank" rel="noopener noreferrer">View CV</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>):<NoData></NoData>}
</div>
</div>

 
</div>
</main>
</div>
  )
}

export default DemandesEmploi