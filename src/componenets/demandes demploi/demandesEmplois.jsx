import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [userData, setUserData] = useState({
        nom: '',
        email: '',
        numTelephone: '',
        specialite: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "cv") {
            setUserData(prevState => ({ ...prevState, cv: e.target.files[0] }));
        } else {
            setUserData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nom', userData.nom);
        formData.append('email', userData.email);
        formData.append('specialite', userData.specialite);

        formData.append('numTelephone', userData.numTelephone);
        formData.append('cv', userData.cv);

        try {
            await axios.post('http://localhost:3500/demmande', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUserData({     
            nom: '',
            email: '',
            numTelephone: '',
            specialite: '',
            cv: null
          })
            alert('User registered successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Error registering user.');
        }
    };

    return (
      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contacts
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Work with Us Right Now
            </h2>
            <h4 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-3xl">
             Travailler avec nous maintenant !
            </h4>
           
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis
                ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Notre  Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                     Bab elkhmis en face CHU Tlemcen
                    </p>
                    
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contacts
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile:+213552941027
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: tatwiracademy@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Heures de travaille
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                       7/7 jour : 08:00 - 18:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Envoyer Votre Cv !
              </h2>
              <form onSubmit={handleSubmit} id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="nom"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="text" name="nom" 
                        value={userData.nom} 
                        onChange={handleChange} 
                        placeholder="Votre nom"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                      
                      />
                    </div>
                     <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="prenom"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        
                        type="text"
                         name="specialite"
                        value={userData.specialite}
                        onChange={handleChange}
                        placeholder="Votre Spécialité"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                       
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Email" 
                        required
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                        
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="numTelephone"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="text" name="numTelephone" value={userData.numTelephone} onChange={handleChange} placeholder="Phone Number" required 
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"
                        
                      />
                    </div>
                     <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="numTelephone"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        className="mb-2 w-full rounded-md bg-white border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                        type="file" name="cv" onChange={handleChange} accept="application/pdf" required 
                      />
                    </div>
                  </div>
                 
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    );
}

export default UserForm;
