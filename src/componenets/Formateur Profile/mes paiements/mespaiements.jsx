import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import NoData from '../mes groupes formateur/nodata';
import MesPaiementsTbale from './mespaimenttbale';
import NavdashboardApprenant from '../profile Apprenant/navdash/navdash';





function MesPaiementsFormateur() {
    const [paiement, setPaiement] = useState(null);
    const [error, setError] = useState(null);
    const apprenant = JSON.parse(localStorage.getItem('user'));
    
    
  
    

  return (
    <div>
        
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
     <NavdashboardApprenant></NavdashboardApprenant>
    </div>
    <div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Mes paiements :</h1>
    
    </div>
    <div className='h-96 border   overflow-x-auto overflow-y-auto'>
    {apprenant?<MesPaiementsTbale></MesPaiementsTbale>:<NoData></NoData>}
  </div>
</div>

     
    </div>
  </main>
  </div>
  
  )
}

export default MesPaiementsFormateur