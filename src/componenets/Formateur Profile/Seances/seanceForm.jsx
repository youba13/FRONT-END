import { useState,useEffect } from 'react';
import NoData from '../../profile Apprenant/mes groupes/nodata';
import axios from 'axios';
import SuccesOp from '../Apprenant/create apprenant form/modal/succesOp';
import Modal from '../Apprenant/create apprenant form/modal/modal';

const SeanceForm = ({group}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent,setModalContent] = useState(null)
   const [apprenants,setApprenants] =useState([])
   const [data,setData] =useState([])
  const [contenu, setContenu] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [date, setDate] = useState('');
  const formateur = group.formateur
  const idgroup = group._id 
  const presneces = group.apprenants 
  const [absences, setAbsences] = useState([]);
  const showSuccess = (message)=>{
    const content = <SuccesOp message={message}></SuccesOp>
    setModalContent(content)
    setModalOpen(true)
    
    
  }
  
  const fetchData=  async () => {
    fetch('http://localhost:3500/apprenant')
      .then(response => response.json())
      .then(data => {
        setApprenants(data.filter((apprenant)=> group.apprenants.includes(apprenant._id)))
        
    })
      .catch(error => console.error('Error fetching data: ', error));
  };
  useEffect(()=>{
    const interval = setInterval(fetchData, 1000); // Fetch every 5 seconds
    
    return () => clearInterval(interval);
  },[])
  // Function to handle adding/removing absences
  const handleAbsenceChange = (id, isChecked) => {
    if (isChecked) {
      // Add absence to array
      setAbsences([...absences, id]);
    } else {
      // Remove absence from array
      setAbsences(absences.filter(absence => absence !== id));
    }
  };
  const createSeance = async ()=>{
    const data = {
        contenu: contenu,
        heureDebut:  heureDebut,
        heureFin: heureFin,
        date:  date,
        formateur:formateur,
        group:idgroup,
        absences:absences,
        presences: presneces
    }
    console.log(data)
   try{ 
    const response = await axios.post('http://localhost:3500/seance',data)
    showSuccess('La Séance a été ajoutée')
   
    
}catch(err){
    alert('err')
}
  }
  

  // Dummy data for presences table
  
  return (
    <div className="max-w-4xl max-h-[600px] overflow-y-auto mx-auto p-8">
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {modalContent}
      </Modal>
      
        <div className="mb-4">
          <label className="block text-lg text-bold  text-gray-700">Contenu</label>
          <textarea style={{maxHeightheight:"60px"}}  value={contenu} onChange={e => setContenu(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          <label className="block text-lg text-bold text-gray-700">heur début:</label>
          <input type='time'   value={heureDebut} onChange={e => setHeureDebut(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          <label className="block text-lg text-bold text-gray-700">heur  fin</label>
          <input type='time'  value={heureFin} onChange={e => setHeureFin(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          <label className="block text-lg text-bold text-gray-700">heur  fin</label>
          <input type='date'  value={date} onChange={e => setDate(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        {/* Add other form fields here */}

        {/* Absences table with checkboxes */}
        <div className="mb-4">
          <label className="block text-lg text-bold text-gray-700 mb-2">Absences</label>
          <span className='text-red-500 '>NB: les presences sont par defaut les apprenants de ce groupe </span>
          <div className='max-h-[300px] overflow-y-auto'>
          <table className="w-full  border-collapse">
            <thead>
              <tr className='bg-blue-950 text-amber-400'>
              <th scope="col" className="px-2 py-2">
                           nom et prenom
                        </th>
                        <th scope="col" className="px-2 py-2">
                            filiere
                         </th>
                        <th scope="col" className="px-2 py-2">
                            niveau
                        </th>
                        <th scope="col" className="px-2 py-2">
                            année
                        </th>
                        <th scope="col" className="px-2 py-2">
                            numero de telephone
                        </th>
                        <th scope="col" className="px-2 py-2">
                           email
                        </th>
                        <th scope="col" className="px-2 py-2">
                            Action
                        </th>
              </tr>
            </thead> 
            <tbody>
                
                     {(apprenants.length > 0)?apprenants.map(apprenant =>(
      <tr style={{border:"1px solid gray"}} key={apprenant._id} className="bg-white    text-black dark:border-gray-700">
      <td className="px-2 py-2">{apprenant.nom + " "+apprenant.prenom}</td>
        <td className="px-2 py-2">{apprenant.niveauAcademique.filiere}</td>
        <td className="px-2 py-2">{apprenant.niveauAcademique.niveau}</td>
        <td className="px-2 py-2">{apprenant.niveauAcademique.annee}</td>
        <td className="px-2 py-2">{apprenant.numTelephone}</td>
        <td className="px-2 py-2">{apprenant.email}</td>
        
       
        <td className="flex justify-between px-2 py-2 text-right">
          
        <a><input className=' text-lg' type="checkbox" onChange={e => handleAbsenceChange(apprenant._id, e.target.checked)} /></a>
          
        </td>
      </tr>)):<p>hhh</p>}
                 
              
            </tbody>
          </table>
          </div>
        </div>

        {/* Submit button */}
        <button onClick={()=>createSeance()} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
    
    </div>
  );
};

export default SeanceForm;
