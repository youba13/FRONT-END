import React, { useState } from 'react';
import axios from 'axios';

function FileUpload({fetchagain, groupId }) {
  const [file, setFile] = useState(null);
  const [titre , setTitre] = useState('')
  const [sender , setSender] = useState('')
  const [description , setDescription] = useState('')
 console.log(groupId)
  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("group", groupId);
    formData.append("sender", sender);
    formData.append("titre", titre);
    formData.append("description", description);
    console.log(formData)
    axios.post("http://localhost:3500/chatmessages/uploads", formData)
      .then(response => {alert('File uploaded successfully')
      fetchagain()})
      .catch(err => alert('Error uploading file', err));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-lg">
  <input 
    type="text" 
    value={titre} 
    className="w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    placeholder="Titre"
    onChange={(e) => setTitre(e.target.value)}
  />
  <input 
    type="text" 
    value={sender} 
    className="w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    placeholder="votre Nom et Prénom"
    onChange={(e) => setSender(e.target.value)}
  />
  <input 
    type="text" 
    value={description} 
    className="w-full px-4 py-2 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    placeholder="Description"
    onChange={(e) => setDescription(e.target.value)}
  />
  <input 
    type="file" 
    className="mb-4"
    onChange={onFileChange}
  />
  <button 
    onClick={onFileUpload} 
    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
  >
    Upload
  </button>
</div>
  );
}

export default FileUpload;
