import React, { useEffect, useState } from 'react'
import NoData from '../../profile Apprenant/mes groupes/nodata';
import axios from 'axios';







function SelectApprenantToAdd({group,onClose}) {
    
   
    const [apprenants, setApprenants] = useState([]);
    
   const fetchData=  async () => {
    fetch('http://localhost:3500/apprenant')
      .then(response => response.json())
      .then(data => {setApprenants(data) 
    })
      .catch(error => console.error('Error fetching data: ', error));
  };
  useEffect(()=>{
    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  },[])
   if(!apprenants) return <NoData></NoData>
   const addApprenantToGroup = async (idapprenant)=>{
    try {
        // Construct the URL by replacing :group and :apprenant with actual values
        const url = `http://localhost:3500/group/${group._id}/${idapprenant}`;
    
        // Send a POST request to the constructed URL
        const response = await axios.post(url);
    
        // Handle response here
        alert('done')
        onClose()
      } catch (error) {
        // Handle errors here
        console.error('Error:', error.response ? error.response.data : error.message);
      }
   }
  return (
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
  
    <div className=' border   overflow-x-auto overflow-y-auto'>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    
  <thead className="text-xs text-yeallow-400  uppercase bg-blue-950 text-yellow-500">
                    <tr className='p-4'>
                        
                        <th scope="col" className="px-6 py-4">
                           nom et prenom
                        </th>
                        <th scope="col" className="px-6 py-4">
                            filiere
                         </th>
                        <th scope="col" className="px-6 py-4">
                            niveau
                        </th>
                        <th scope="col" className="px-6 py-4">
                            année
                        </th>
                        <th scope="col" className="px-6 py-4">
                            numero de telephone
                        </th>
                        <th scope="col" className="px-6 py-4">
                           email
                        </th>
                        <th scope="col" className="px-6 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
    <tbody>
    {(apprenants.length > 0)?apprenants.map(apprenant =>(
      <tr key={apprenant._id} className="bg-white  text-black dark:border-gray-700">
      <td className="px-6 py-4">{apprenant.nom + " "+apprenant.prenom}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.filiere}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.niveau}</td>
        <td className="px-6 py-4">{apprenant.niveauAcademique.annee}</td>
        <td className="px-6 py-4">{apprenant.numTelephone}</td>
        <td className="px-6 py-4">{apprenant.email}</td>
        
       
        <td className="flex justify-between px-6 py-4 text-right">
          
         <button onClick={()=>addApprenantToGroup(apprenant._id)} className='bg-green-400 hover:bg-green-400 p-2 text-white rounded-md'>Ajouter</button>
          
        </td>
      </tr>)):<div className='w-full h-full flex justify-center  items-center'><NoData></NoData></div>}
     </tbody>
  </table>
  </div>
</div>
  
  )
}

export default SelectApprenantToAdd