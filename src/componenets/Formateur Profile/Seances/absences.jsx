import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import NoData from '../mes groupes formateur/nodata';



function Absences({seancebody}) {
     

    const [apprenants, setApprenants] = useState([]);

    useEffect(() => {
        if (seancebody) {
            setApprenants(seancebody.absences);
        }
    }, [seancebody]);

    if(!apprenants || apprenants.length < 0 ) return <NoData></NoData>
    return (
        <div className="container mx-auto p-4">
            
           
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="bg-blue-950 text-amber-500">
                        <tr>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Nom</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Prénom</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Date Naissance</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Adresse</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Num Téléphone</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Email</th>
                            <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {apprenants.map(apprenant => (
                            <tr key={apprenant._id} className="text-gray-700">
                                <td className="py-3 px-4">{apprenant.nom}</td>
                                <td className="py-3 px-4">{apprenant.prenom}</td>
                                <td className="py-3 px-4">{new Date(apprenant.dateNaissance).toLocaleDateString()}</td>
                                <td className="py-3 px-4">{apprenant.adress}</td>
                                <td className="py-3 px-4">{apprenant.numTelephone}</td>
                                <td className="py-3 px-4">{apprenant.email}</td>
                                
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Absences