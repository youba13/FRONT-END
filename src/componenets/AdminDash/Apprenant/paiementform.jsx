import React, { useState, useEffect } from 'react';



function PaiementForm({userid}) {
  
    const [newPaiement,setNewPaiement]= useState({
        date: '',
        group:'', 
        montant:'',
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
        if (!newPaiement.date || !newPaiement.montant) {
            alert('Please fill in all required fields.');
            return;
        }
        await addPaiement(newPaiement);
        setNewPaiement({ date: '', montant: '', notes: '' }); // Reset the form
        alert("paiement a été ajouté")
    };
    const addPaiement = async (newPaiement) => {
        const response = await fetch(`http://localhost:3500/apprenant/paiementapprenant/${userid}`, {
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
                name="montant"
                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"

                value={newPaiement.montant}
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
        <button className=' w-full mt-6 bg-blue-900 p-2 rounded-md text-amber-500 px-2 hover:bg-blue-950' type="submit">Add Payment</button>
    </form>
    
 )
}

export default PaiementForm