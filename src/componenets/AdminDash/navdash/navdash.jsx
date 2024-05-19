import React from 'react'

function Navdashboard() {
  
  return (
    <div>
      <h1 className='text-bold text-3xl'>Statistiques:</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-red-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">Uilisateurs</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">20</p>
      {/* <hr > */}
    </div>
  </div>
  {/*-== First Stats Container ====-*/}
  {/*-== Second Stats Container ====-*/}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-blue-500 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">Formations</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">19</p>
      {/* <hr > */}
    </div>
  </div>
  {/*-== Second Stats Container ====-*/}
  {/*-== Third Stats Container ====-*/}
  <div className="container mx-auto pr-4">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-purple-400 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">Groupes</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">14</p>
      {/* <hr > */}
    </div>
  </div>
  {/*-== Third Stats Container ====-*/}
  {/*-== Fourth Stats Container ====-*/}
  <div className="container mx-auto">
    <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className="h-20 bg-purple-900 flex items-center justify-between">
        <p className="mr-0 text-white text-lg pl-5">Paiements</p>
      </div>
      <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>Totla revenue</p>
      </div>
      <p className="py-4 text-3xl ml-5">250000.00 DA</p>
      {/* <hr > */}
    </div>
  </div>
  </div>
  </div>
  )
}

export default Navdashboard