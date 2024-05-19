
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import NoData from '../mes groupes/nodata';



function MesPaiementsTbale() {
    const [paiements, setPaiement] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apprenantid =JSON.parse(localStorage.getItem('user'))._id;
    useEffect(() => {
        // URL of the API endpoint


        fetch(`http://localhost:3500/apprenant/paiements/${apprenantid}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPaiement(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    },1000);
    console.log(paiements)

    if (isLoading) return <p>Loading...</p>;
    if (error) return <NoData></NoData>;
    if (!paiements) return <NoData></NoData>
 
  
  return (
    <div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   <table className="w-full text-sm text-left rtl:text-right text-black">
     <thead className="text-x text-amber-500 uppercase bg-blue-950  ">
       <tr>
         <th scope="col" className="px-6 py-3">
          Groupe
         </th>
         <th scope="col" className="px-6 py-3">
           Date
         </th>
         <th scope="col" className="px-6 py-3">
           Montant
         </th>
         <th scope="col" className="px-6 py-3">
           Note
         </th>
        
       </tr>
     </thead>
     <tbody>
     
        
       
       
        {paiements.map((item)=>(<tr className="text-black bg-white font-medium   ">
        <td className="px-6 py-4">
           {item.group}
          </td>
          <td className="px-6 py-4">
          {item.date}
          </td>
          <td className="px-6 py-4">
          {item.montant} DA
          </td>
          <td className="px-6 py-4">
          {item.notes}
          </td>
        
          
          
          
        </tr>))}
       
     
     
      </tbody>
     
   </table>
 </div>
</div>
  )
}

export default MesPaiementsTbale