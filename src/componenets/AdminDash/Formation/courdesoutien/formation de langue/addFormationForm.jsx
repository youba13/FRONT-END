import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CourDeSoutienForm = () => {
    const [courseData, setCourseData] = useState({
        img: null,
        nom: "",
        description: "",
        prix: 0,
        langue:"",
        duree:0,
        dateDebut:"",
        dateFin:"",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };
    const handleFileChange = (e) => {
        setCourseData({ ...courseData, img: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    const courseDataToSend = new FormData();
    courseDataToSend.append('img', courseData.img);
    courseDataToSend.append('nom', courseData.nom);
    courseDataToSend.append('description', courseData.description);
    courseDataToSend.append('prix', courseData.prix);
    courseDataToSend.append('domain', courseData.langue);
    courseDataToSend.append('duree', courseData.duree);
    courseDataToSend.append('dateFin', courseData.dateFin);
    courseDataToSend.append('dateDebut', courseData.dateDebut);
        try {
            const response = await axios.post('http://localhost:3500/formation/formationDeLangue', courseData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
         
            alert('Formation a été ajoutée!!!')
          
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding course.');
        }
        // Submit logic here
    };

    return (
        <div className="  overflow-y-auto mx-auto p-4">
            <form onSubmit={handleSubmit} className=" max-h-[550px] overflow-y-auto space-y-4">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input type="text" name="nom" id="nom" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.nom}
                    />
                </div>

                <div>
                    <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" name="img" id="img" accept="image/*"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleFileChange}
                    />
                </div>

                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">La langue</label>
                    <input type="text" name="langue" id="langue"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.langue}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Durée (heurs)</label>
                    <input type="number" name="duree" id="filiere"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.duree}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Date Début</label>
                    <input type="date" name="dateDebut" id="annee"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.dateDebut}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Date Fin</label>
                    <input type="date" name="dateFin" id="annee"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.dateFin}
                    />
                </div>
                

                

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea name="description" id="description" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.description}
                    />
                </div>

                <div>
                    <label htmlFor="prix" className="block text-sm font-medium text-gray-700">Prix</label>
                    <input type="number" name="prix" id="prix" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.prix}
                    />
                </div>

            

                {/* Additional fields for niveau, filiere, annee, matiere, etc. follow the same pattern */}
                
                <div>
                    <button type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CourDeSoutienForm;
