import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GroupSelect(formationid) {
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const formation =formationid.formation
    console.log(formation)
    const apprenantid =JSON.parse(localStorage.getItem('user'))._id;
    useEffect(() => {
        const fetchGroups = async () => {
            try {
                // Fetch the initial object containing the 'groups' array
                const result = await axios.get(`http://localhost:3500/formation/formationDeLangue/${formation}`);
                const groupIds = result.data.groups;
                
                
                // Fetch details for each group ID
                const groupDetailsRequests = groupIds.map(id =>
                    axios.get(`http://localhost:3500/group/${id}`)
                );
                const groupDetailsResponses = await Promise.all(groupDetailsRequests);
                const groupDetails = groupDetailsResponses.map(response => response.data);
                console.log(groupDetails)
                setGroups(groupDetails);
            } catch (error) {
                console.error('Error fetching groups:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);
  
    const handleComfirmation= async () => {
            const url = `http://localhost:3500/inscriptions`;
           
            try {
              const response = await axios.post(url,{group: selectedGroup, apprenant :apprenantid});
        
              console.log('Success:', response.data);
              alert('Enrollment successful!');
            } catch (error) {
              console.error('Error:', error.response ? error.response.data : error.message);
              alert('Failed to enroll!');
            }
          };
        
    
    if (loading) return <p>Loading...</p>;
    if (groups.length < 0) return <p>Loading...</p>;
    if (error) return <p>Error loading groups!</p>;

    const handleSelectChange = (event) => {
        setSelectedGroup(event.target.value);
       
    };

    return (
        <div>
            <label htmlFor="groupSelect">Choose a Group:</label>
            <select className='w-full bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500' id="groupSelect" value={selectedGroup} onChange={handleSelectChange}>
            <option >
                     
                    </option>
                {groups.map(group => (
                    
                    <option key={group._id} value={group._id}>
                       {group.nom}
                    </option>
                ))}
            </select>
            <button onClick={()=> handleComfirmation()} className='my-4 p-2 bg-blue-950 text-amber-500 rounded-lg'>
                Comfirmer
            </button>
        </div>
    );
}

export default GroupSelect;