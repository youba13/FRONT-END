import React from 'react';
import { useEffect,useState } from 'react';
import Modal from '../Apprenant/create apprenant form/modal/modal';
import SeanceForm from './seanceForm';
import axios from 'axios';
import Presneces from './presnece';
import SuccesOp from '../Apprenant/create apprenant form/modal/succesOp';
import Absences from './absences';

const SeanceTable = ({group}) => {
    const [seances, setSeances] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
   
   
    
    const fetchSeances = async () => {
        try {
            const seancePromises = group.seances.map(seanceId =>
                axios.get(`http://localhost:3500/seance/${seanceId}`)
            );
            const seanceResponses = await Promise.all(seancePromises);
            const seanceData = seanceResponses.map(response => response.data);
            setSeances(seanceData);
        } catch (error) {
            console.error('Error fetching seances:', error);
        }
    };
    useEffect(() => {
        
        
        if (group && group.seances && group.seances.length > 0) {
            const interval = setInterval(fetchSeances, 1000); // Fetch every 5 seconds
    
            return () => clearInterval(interval);
        }
    }, [group]);
    const ShowSeanceForm = async ()=>{
      const content = <SeanceForm group={group}></SeanceForm>
      setModalContent(content)
      setModalOpen(true)
    } 
    const ShwoPresences = async (seance)=>{
        const content = <Presneces seancebody={seance}></Presneces>
        setModalContent(content)
        setModalOpen(true) 
      } 
      const ShowAbsences = async (seance)=>{
        const content = <Absences seancebody={seance}></Absences>
        setModalContent(content)
        setModalOpen(true)
      } 
  return (
    <div className="max-h-[600px]  overflow-y-auto min-w-[500px] max-w-[900] mx-auto p-8">
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
        <div className="flex items-center justify-between mb-5 text-lg w-full font-semibold text-left rtl:text-right text-gray-900 bg-white ">
      <h1> Les Séances :</h1>
      <button onClick={()=> ShowSeanceForm()} type="button" className="text-yellow-500 bg-blue-900 hover:bg-blue-950 focus:ring-4 font-bold focus:outline-none focus:ring-primary-300 py-2.5 px-5 me-2 mb-2 text-sm  rounded-lg border border-gray-200  focus:z-10  focus:ring-gray-100 ">Ajouter Séances</button>
      
    </div>
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className='bg-blue-950 text-amber-400 p-4'>
            <th className="border border-gray-300 px-4 py-2">Contenu</th>
            <th className="border border-gray-300 px-4 py-2">Heure de début</th>
            <th className="border border-gray-300 px-4 py-2">Heure de fin</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Formateur</th>
            <th className="border border-gray-300 px-4 py-2">Group</th>
            <th className="border border-gray-300 px-4 py-2">Apprenants</th>
          </tr>
        </thead>
        <tbody>
          {(seances.length > 0)?seances.map((seance)=>(<tr>
            <td className="border border-gray-300 px-4 py-2">{seance.contnue}</td>
            <td className="border border-gray-300 px-4 py-2">{seance.heureDebut}</td>
            <td className="border border-gray-300 px-4 py-2">{seance.heureFin}</td>
            <td className="border border-gray-300 px-4 py-2">{seance.date}</td>
            <td className="border border-gray-300 px-4 py-2">{seance.formateur}</td>
            <td className="border border-gray-300 px-4 py-2">{seance.group}</td>
            <td className="border border-gray-300 px-4 py-2 flex justify-between items-center">
            <button onClick={()=>ShwoPresences(seance)}  className=" mr-2 font-medium bg-blue-400 text-white  p-2 rounded-lg hover:bg-blue-500">Présents</button>
            <button onClick={()=>ShowAbsences(seance)}   className="mr-2 font-medium bg-green-500 text-white  p-2 rounded-lg hover:bg-green-600">Absents</button>
            <button className="mr-2 font-medium bg-red-500 text-white  p-2 rounded-lg hover:bg-red-600">delete</button>
            </td> 
          </tr>)):<p>no data</p>}
          {/* Add more rows with actual data here */}
        </tbody>
      </table>
    </div>
  );
};

export default SeanceTable;
