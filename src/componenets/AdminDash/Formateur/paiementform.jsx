import React, { useState, useEffect } from 'react';



function PaiementForm({userid}) {
  
    const [newPaiement,setNewPaiement]= useState({
        date: '',
        group:'', 
        salair:'',
        notes: ''
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPaiement(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newPaiement.date || !newPaiement.salair) {
            alert('Please fill in all required fields.');
            return;
        }
        await addPaiement(newPaiement);
        setNewPaiement({ date: '', salair: '', notes: '',group:'' }); // Reset the form
        alert("paiement a été ajouté")
    };
    const addPaiement = async (newPaiement) => {
        const response = await fetch(`http://localhost:3500/formateur/ajouterpaiementformateur/${userid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPaiement)
        });
        if (response.ok) {
            const addedPaiement = await response.json();
            
        } else {
            console.error('Failed to add payment');
        }
    };
 
    return(
        <form onSubmit={handleSubmit}>
        <h3>Add New Payment:</h3>
        <br></br>
        <label>
            Groupe:
            <input
                type="text"
                name="group"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                value={newPaiement.group}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Date:
            <input
                type="date"
                name="date"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"

                value={newPaiement.date}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Amount:
            <input
                type="number"
                name="salair"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"

                value={newPaiement.salair}
                onChange={handleInputChange}
            />
        </label>
        <label>
            Notes:
            <input
                type="text"
                name="notes"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"

                value={newPaiement.notes}
                onChange={handleInputChange}
            />
        </label>
        <button className='mt-6 w-full bg-blue-900 p-1 rounded-md text-amber-500 px-2 hover:bg-blue-950' type="submit">Add Payment</button>
    </form>
    
 )
}

export default PaiementForm