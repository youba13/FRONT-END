import { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Modal from './AdminDash/Apprenant/create apprenant form/modal/modal';
import FileUpload from './FileUpload';

const Bibliofiles = ({group}) => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent,setModalContent] = useState(null)
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/chatmessages/uploads/${group}`);
      setItems(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
   

    fetchData();
  }, 1000);

  const handleDownload = (url, filename) => {
    axios({
      url: url,
      method: 'GET',
      responseType: 'blob',
    })
    .then(response => {
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      saveAs(blob, filename);
    })
    .catch(error => {
      console.error('Error downloading file:', error);
    });
  };
  const uploadfiles = async (id)=>{
    const form = <FileUpload groupId={id} fetchagain={()=>fetchData()} ></FileUpload> 
    setModalContent(form);
    setModalOpen(true);
   }
  return (
    <div className="min-w-[900px] mx-auto p-8">
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
        <div className='mb-5 w-full flex justify-between items-center'>
            <h1 className=' text-2xl text-bold'>Les documments:</h1>
            <button
                  onClick={()=> uploadfiles(group)}
                  className="px-4 py-2 bg-blue-900  text-amber-400 rounded-lg hover:bg-blue-950 focus:outline-none focus:bg-blue-600"
                 
                >
                  Télécharger le fichier
                </button>
        </div>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className='bg-blue-950 text-amber-400'>
          <th className="border bg-white border-white  border-b-gray-300 px-4 py-2"></th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Utilisateur</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
           

            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
                <td className="border  border-gray-300 px-4 py-2"> <svg className="mr-4  w-6 h-6 text-red-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clip-rule="evenodd"/>
</svg></td>
              <td className="border flex justify-center  items-center border-gray-300 px-4 py-2">
{item.titre}</td>
<td className="border  border-gray-300 px-4 py-2">{item.sender || ""}</td>
              <td className="border max-w-[300px] overflow-x-auto overflow-y-auto border-gray-300 px-4 py-2">{item.description}</td> 
              <td className="border border-gray-300 px-4 py-2 text-center">
                <a
                href={`http://localhost:3500/${item.file_path}`}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-blue-600"
                 
                >
                  Télécharger le fichier
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bibliofiles;
