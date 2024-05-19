import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



import axios from 'axios';
import NavdashboardApprenant from '../../profile Apprenant/navdash/navdash';





function HomeFormateur() {
   


  return (
    <div>
        
    <main className="bg-gray-200 p-4 md:ml-60 h-auto pt-20">
    <div>
      <NavdashboardApprenant></NavdashboardApprenant>
    </div>
    <div className="  rounded-lg border-gray-300 dark:border-gray-600 min-h-96   mb-2">
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between p-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1>  Acceuil :</h1>
    
    </div>
    <div className='h-96 border   overflow-x-auto overflow-y-auto'>
 
  </div>
</div>

     
    </div>
  </main>
  </div>
  
  )
}

export default HomeFormateur