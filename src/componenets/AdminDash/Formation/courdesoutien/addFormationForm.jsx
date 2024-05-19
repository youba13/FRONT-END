import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CourDeSoutienForm = () => {
    const [courseData, setCourseData] = useState({
        img: null,
        nom: "",
        type: "Cour De Soutien",
        formateur: "",
        description: "",
        prix: 0,
        groups: [],
        inscriptions: [],
        niveau: "",
        filiere: "",
        annee: "",
        matiere: ""
    });

    const [allFormateur, setallFormateur] = useState([]); // Assuming these would be fetched
    const [allInscriptions, setAllInscriptions] = useState([]); // Assuming these would be fetched
    useEffect(() => {
        const fetchInscriptions=  async () => {
            try {
                const response = await fetch(`http://localhost:3500/formateur`); // Change the URL as needed
                const data = await response.json();
                setallFormateur(data);
                
                
            } catch (error) {
                console.error('Failed to fetch user:', error);
              
            }
          };
          fetchInscriptions()
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleMultiSelectChange = (e) => {
        const options = e.target.options;
        const value = '';
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
               value = options[i].value;
            }
        }
        setCourseData({ ...courseData, formateur: value });
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
    courseDataToSend.append('niveau', courseData.niveau);
    courseDataToSend.append('filiere', courseData.filiere);
    courseDataToSend.append('annee', courseData.annee);
    courseDataToSend.append('matiere', courseData.matiere);
    courseDataToSend.append('formateur', courseData.formateur);
    courseDataToSend.append('type', courseData.type);
        try {
            const response = await axios.post('http://localhost:3500/formation/courDeSoutien', courseDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(courseDataToSend)
            console.log(courseData)
           if(response.ok){
            alert('course was added !!!')
           }else{
            alert("error")
           }
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
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Name</label>
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
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                    <input type="text" name="type" id="type"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.type}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Matiére</label>
                    <input type="text" name="matiere" id="matiere"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.matiere}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Niveau</label>
                    <input type="text" name="niveau" id="niveau"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.niveau}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Filiére</label>
                    <input type="text" name="filiere" id="filiere"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.filiere}
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Année</label>
                    <input type="text" name="annee" id="annee"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={handleChange}
                        value={courseData.annee}
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
                    <label htmlFor="prix" className="block text-sm font-medium text-gray-700">Price</label>
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
