import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import NavdashboardApprenant from '../../profile Apprenant/navdash/navdash';
import FormationDeLangueTable from './formationdelanguetable';




function FormationDeLangueHome() {
   


  return (
    <div>
        
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
      
    </div>
    <div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Les Formations :</h1>
    
    </div>
    <div className='min-h-96 border   overflow-x-auto overflow-y-auto'>
     <FormationDeLangueTable></FormationDeLangueTable>
  </div>
</div>

     
    </div>
  </main>
  </div>
  
  )
}

export default FormationDeLangueHome