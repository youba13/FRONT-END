import React from 'react'

function FormateurInfo({formateur}) {
  return (
    <div>
        
    <div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="text-center my-4">
<img
  className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
  src="https://randomuser.me/api/portraits/women/21.jpg"
  alt=""
/>
<div className="py-2">
  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
    Cait Genevieve
  </h3>
  <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
   
   
  </div>
</div>
</div>

      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Nom et Prenom
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {formateur.nom} {formateur.prenom}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
             {formateur.email}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Numéro de Téléphone
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formateur.numTelephone}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {formateur.adress}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Spécialité
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {formateur.specialite}
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
             Dernier paiement
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {(formateur.paiements.length > 0)?formateur.paiements[formateur.paiements.length -1].group:<p></p>} {(formateur.paiements.length > 0)?formateur.paiements[formateur.paiements.length -1].salair:<p></p>} DA le  {(formateur.paiements.length > 0)?formateur.paiements[formateur.paiements.length -1].date:<p></p>}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}

export default FormateurInfo