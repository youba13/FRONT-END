
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../../AdminDash/Apprenant/create apprenant form/modal/modal';
import Chat from '../../Chat';
import ChatRoom from '../../ChatRoom';
function GroupTable({apprenant}) {
  const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)

    useEffect(() => {
      const fetchGroups = async () => {
          try {
              const groupFetchPromises = apprenant.groups.map(id =>
                  axios.get(`http://localhost:3500/group/${id}`)
              );
              const groupResponses = await Promise.all(groupFetchPromises);
              setGroups(groupResponses.map(response => response.data));
          } catch (err) {
              console.error('Failed to fetch groups:', err);
              
          } finally {
              setLoading(false); 
          }
      };

      fetchGroups();
  }, [apprenant.groups]);
   console.log(groups)
   const ShowChatRoom = async (id)=>{
    const form = <ChatRoom userId={apprenant._id} groupId={id}></ChatRoom>;
    setModalContent(form);
    setModalOpen(true);
   }
  return (
    <div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-x text-amber-500 uppercase bg-blue-950  ">
            <tr>
              <th scope="col" className="px-6 py-3">
               Nom de groupe
              </th>
              <th scope="col" className="px-6 py-3">
                Niveau
              </th>
              <th scope="col" className="px-6 py-3">
                Emploi Du Temps
              </th>
              <th scope="col" className="px-6 py-3">
               Type De Formation
              </th>
              <th scope="col" className=" text-center px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           
            {groups.map((group)=>(
            <tr className="text-black bg-white font-medium">
            <td className="px-6 py-4">
                {group.nom}
              </td>
              <td className="px-6 py-4">
                {group.niveau}
              </td>
              <td className="px-6 py-4">
                {group.emploiTemp}
              </td>
              <td className="px-6 py-4">
                {group.typeDeFormation}
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={()=> ShowChatRoom(group._id)} href="#" className=" mr-2 font-medium bg-green-400 text-white  p-2 rounded-lg hover:bg-green-500">CHATROOM</button>
                <button href="#" className="font-medium bg-blue-500 text-white  p-2 rounded-lg hover:bg-blue-600">Bibliothéque PDF</button>
              
              </td>
            </tr>))}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default GroupTable