import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';
import chatService from '../services/chatServices';
import FileUpload from './FileUpload';
import Modal from './AdminDash/Apprenant/create apprenant form/modal/modal';

 // Adjust according to your server

function ChatRoom({ groupId ,userId}) {
    
    const socket = io('http://localhost:3500');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)

    useEffect(() => {
        
        socket.emit('joinRoom', groupId);
         console.log(groupId)
        // Fetch history messages when the component mounts
        chatService.getMessages(groupId).then(data => {
            setMessages(data);
        });

        // Setup to listen to new messages
        socket.on('message', message => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        // Cleanup on unmount
        return () => {
            socket.off('message');
        };
    }, [groupId]); 

    const sendMessage = () => {
        if (newMessage.trim()) {
            socket.emit('chatMessage', { group:groupId, sender: userId, message: newMessage });
            setNewMessage("");
        }
    };
   

    return (
        <div className="p-4 h-[600px] w-[700px] flex flex-col">
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
            <div className="overflow-auto mb-4 flex-grow">
                {messages.map((msg, index) => (
                   <Chat key={index} message={msg} userId={userId} />
                ))}
            </div>
            <div className="mt-auto">
                <input 
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button> 
                
            </div>
        </div>
    );
}

export default ChatRoom;
