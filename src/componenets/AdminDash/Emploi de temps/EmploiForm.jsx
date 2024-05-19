import React, { useState,useEffect } from 'react';
import axios from 'axios';

function AddEventForm({onClose}) {
  const [groups, setGroups] = useState([]);
  const [salles, setSalles] = useState([]);
  const [formateur, setFormateur] = useState([]);
  const [inputs, setInputs] = useState({
    groupName: '',
    day: '',
    room: '',
    startTime: '',
    endTime: '',
    formateur: ''
  });
  useEffect(() => {
    async function fetchGroups() {
        try {
            // Fetch the initial list of groups
            const response = await axios.get('http://localhost:3500/group');
            const groupsData = response.data;
         
            // Fetch each formateur for each group
            const groupsWithDetails = await Promise.all(groupsData.map(async group => {
              // Fetch formateur details
              const formateurResponse = await axios.get(`http://localhost:3500/formateur/${group.formateur}`);
              // Fetch formation details
            //  const formationResponse = await axios.get(`http://localhost:3500/formation/FormationPratique/${group.formation}`);
            
              return {
                  ...group,
                  formateurName: formateurResponse.data.nom, // assuming the formateur's name is what you want to display
                 // formationDetails: formationResponse.data // replace formation ID with detailed object
              };
          }));
          console.log(groupsWithDetails)
          setGroups(groupsWithDetails); 
        } catch (error) {
            console.error('Error fetching groups or formateurs:', error);
        }
    }
    async function fetchSalles() {
      try {
          // Fetch the initial list of groups
          const response = await axios.get('http://localhost:3500/salle');
         setSalles(response.data); 
      } catch (error) {
          console.error('Error fetching groups or formateurs:', error);
      }
  }
  async function fetchFormateur() {
    try {
        // Fetch the initial list of groups
        const response = await axios.get('http://localhost:3500/formateur');
       setFormateur(response.data); 
    } catch (error) {
        console.error('Error fetching groups or formateurs:', error);
    }
}
fetchFormateur()
    fetchGroups();
    fetchSalles()
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      const response = await axios.post('http://localhost:3500/events', inputs);
      
        alert('Event Added!');
        onClose(true)
      
    } catch (error) {
       

      alert('Failed to add event: ' + error.response.data.message);
    }
  };

  return (
    <div className="p-4">
        <div className='w-full flex justify-center'>
            <h1 className='text-bold text-xl mb-5'>Ajouter évenement</h1>
        </div>
      <form onSubmit={handleSubmit} className=" max-h-[500px] overflow-y-auto grid grid-cols-1 gap-6">
      <label className='text-bold'>Le Groupe</label>
        <select onChange={handleChange}  value={inputs.groupName} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" name="groupName" id="">
         <option></option>
         {(groups && groups.length > 0)?groups.map((group)=>(
          <option>{group.nom}</option>
         )):<option></option>}
          
        </select>
        {/*<input               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
 type="text" name="groupName" placeholder="Group Name" value={inputs.groupName} onChange={handleChange} />*/}
  <label className='text-bold'>La Salle</label>
  <select onChange={handleChange}  value={inputs.room} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" name="room" id="">
         <option></option>
         {(salles && salles.length > 0)?salles.map((salle)=>(
          <option>{salle.nom}</option>
         )):<option></option>}
          
        </select>
        <label className='text-bold'>Formateur</label>
        <select  onChange={handleChange}  value={inputs.formateur} className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" name="formateur" id="">
         <option></option>
         {(formateur && formateur.length > 0)?formateur.map((item)=>(
          <option>{item.nom+" "+item.prenom}</option>
         )):<option></option>}
          
        </select>
        <input               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
 type="text" name="day" placeholder="Day" value={inputs.day} onChange={handleChange} />
       
        <input              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
 type="time" name="startTime" placeholder="Start Time" value={inputs.startTime} onChange={handleChange} />
        <input               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
 type="time" name="endTime" placeholder="End Time" value={inputs.endTime} onChange={handleChange} />
        <button type="submit" className="bg-blue-900 text-amber-500 text-bold rounded-md hover:bg-blue-950 p-2">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventForm;
