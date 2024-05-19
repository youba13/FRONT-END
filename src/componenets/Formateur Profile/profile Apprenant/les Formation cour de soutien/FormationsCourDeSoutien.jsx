import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import CourDeSoutienTable from './courdesoutientable';
import NavdashboardApprenant from '../navdash/navdash';




function FormationCourDeSoutien() {
   


  return (
    <div>
        
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
      <NavdashboardApprenant></NavdashboardApprenant>
    </div>
    <div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Les Formations :</h1>
       
    </div>
    <div className='h-auto border   overflow-x-auto overflow-y-auto'>
    <CourDeSoutienTable></CourDeSoutienTable>
  </div>
</div>

     
    </div>
  </main>
  </div>
  
  )
}

export default FormationCourDeSoutien