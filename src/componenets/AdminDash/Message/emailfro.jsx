import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Apprenant/create apprenant form/modal/modal';
import SuccesOp from '../Apprenant/create apprenant form/modal/succesOp';


function EmailForm({email,onClose}) {
 
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
  const ShowSeccess = async ()=>{
    const form =<SuccesOp message={"email a été envoyé"} onClose={() => setModalOpen(false)}></SuccesOp>;
    setModalContent(form);
    setModalOpen(true);
   }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/send-email', {
        to: email,
        subject: 'Message from Admin of Tatwir Academy',
        text: message
      });
      if(response.status === 200){
      ShowSeccess()
      setMessage('')
     
      }
    } catch (error) {
      alert('Failed to send email', error);
      console.log(error.message)
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 mt-10 rounded shadow-lg">
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
      <form onSubmit={handleSubmit} className="space-y-6">
      
        <div>
          <label className="text-sm font-bold text-gray-600 block">Email:</label>
          <input
            type="email"
            value={email}
           
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="text-sm font-bold text-gray-600 block">Message:</label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 each-in-out"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default EmailForm;
