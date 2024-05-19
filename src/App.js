import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';

import Home from './componenets/Header/pages/Home';
import Footer from "./componenets/Footer/Footer";
import Login from "./componenets/Log in/Login";
import Register from "./componenets/Register/Register";
import Header from "./componenets/Header/Header";
import Formation from "./componenets/Les Fomrations/Formation";
import ScrollToTop from "./componenets/Scrolltop";
import Dash from "./componenets/AdminDash/Dash";
import Apprenant from "./componenets/AdminDash/Apprenant/apprenant";

import ApprenantProfile from "./componenets/profile Apprenant/ApprenantProfile";
import MesFormations from "./componenets/profile Apprenant/les Formation pratique/FormationsPratique";
import MesGroupes from "./componenets/profile Apprenant/mes groupes/mesgroupes";
import FormationPratique from "./componenets/profile Apprenant/les Formation cour de soutien/FormationsCourDeSoutien";
import FormationDeLangue from "./componenets/profile Apprenant/les Formation de langues/FormationsDeLangue";
import MesPaiements from "./componenets/profile Apprenant/mes paiements/mespaiements";
import Moncompte from "./componenets/profile Apprenant/mon compte/moncompte";
import Bibliotheque from "./componenets/profile Apprenant/bibliotheque/bibliotheque";
import HomeApprenant from "./componenets/profile Apprenant/home/home";
import ChatRooms from "./componenets/profile Apprenant/chatrooms/chatrooms";
import VerifyToken from "./verifyToken";
import Formateur from "./componenets/AdminDash/Formateur/formateur";
import Inscription from "./componenets/AdminDash/inscription/inscription";
import DemandesEmploi from "./componenets/AdminDash/demandes demploi/demandesEmplois";
import Seances from "./componenets/AdminDash/Seances/seances";
import Groups from "./componenets/AdminDash/Groups/groupes";
import Message from "./componenets/AdminDash/Message/message";
import Salle from "./componenets/AdminDash/les salles/salle";
import Admins from "./componenets/AdminDash/admins/admins";
import CourDeSoutien from "./componenets/AdminDash/Formation/courdesoutien/courdesoutien";
import EmploiTemps from "./componenets/AdminDash/Emploi de temps/emploitempsAdmin";
import FormationPratiqueAdmin from "./componenets/AdminDash/Formation/courdesoutien/fromation pratique/formationpratique";
import ContactAdmin from "./componenets/profile Apprenant/contact/contact";
import FormateurProfile from "./componenets/Formateur Profile/formateurrofile";
import HomeFormateur from "./componenets/Formateur Profile/home/home";
import MesGroupesFormateur from "./componenets/Formateur Profile/mes groupes formateur/mesgroupes";
import ContactAdminFormateur from "./componenets/Formateur Profile/contact/contact";
import MesPaiementsFormateur from "./componenets/Formateur Profile/mes paiements/mespaiements";
import EmploiTempsApprenant from "./componenets/profile Apprenant/Empli de temps/emploitempsViewOnly";
import EmploiTempsHome from "./componenets/Emploi de Temps/emploitemp";
import SeancesFormateur from "./componenets/Formateur Profile/Seances/seances";
import EmploiTempsFormateur from "./componenets/Formateur Profile/Empli de temps/emploitempsViewOnly";
import FormationDeLangueAdmin from "./componenets/AdminDash/Formation/courdesoutien/formation de langue/formationdelangue";
import FormationCourDeSoutien from "./componenets/profile Apprenant/les Formation cour de soutien/FormationsCourDeSoutien";
import FormationPratiqueApprenant from "./componenets/profile Apprenant/les Formation pratique/FormationsPratique";




function App() {
  return (
   
   <Routes>
      
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/emploidutemps' element={<EmploiTempsHome></EmploiTempsHome>} />
    <Route path='/formations' element={<Formation/>} />
      <Route path='/admin' element={<Dash></Dash>}>
        <Route path='apprenant' element={<Apprenant></Apprenant>}/>
        <Route path='formateur' element={<Formateur></Formateur>}/>
        <Route path='courdesoutien' element={<CourDeSoutien></CourDeSoutien>}/>
        <Route path='formationpratique' element={<FormationPratiqueAdmin></FormationPratiqueAdmin>}/>
        <Route path='formationdelangue' element={<FormationDeLangueAdmin></FormationDeLangueAdmin>}/>
        <Route path='salle' element={<Salle></Salle>}/>
        <Route path='group' element={<Groups></Groups>}/>
        <Route path='seance' element={<Seances></Seances>}/>
        <Route path='demandesemploi' element={<DemandesEmploi></DemandesEmploi>}/>
        <Route path='nouveaute' element={<Apprenant></Apprenant>}/>
        <Route path='emploitemp' element={<EmploiTemps></EmploiTemps>}/>
        <Route path='inscriptions' element={<Inscription></Inscription>}/>
        <Route path='biblio' element={<Bibliotheque></Bibliotheque>}/>
        <Route path='messages' element={<Message></Message>}/>
        <Route path='admins' element={<Admins></Admins>}/>
      
      </Route>
      <Route path='/profilestudent' element={<VerifyToken><ApprenantProfile></ApprenantProfile></VerifyToken>}>
      <Route path='formationpratique' element={<FormationPratiqueApprenant></FormationPratiqueApprenant>}/>
      <Route path='fromationdelangue' element={<FormationDeLangue></FormationDeLangue>}/>
      <Route path='formationcourdesoutien' element={<FormationCourDeSoutien></FormationCourDeSoutien>}/>
      <Route path='home' element={<HomeApprenant></HomeApprenant>}/>
      <Route path='emploitemps' element={<EmploiTempsApprenant></EmploiTempsApprenant>}/>
      <Route path='moncompte' element={<Moncompte></Moncompte>}/>
      <Route path='mespaiements' element={<MesPaiements></MesPaiements>}/>
      <Route path='bibliotheque' element={<Bibliotheque></Bibliotheque>}/>
      <Route path='chatrooms' element={<ChatRooms></ChatRooms>}/>
      <Route path='mesgroupes' element={<MesGroupes></MesGroupes>}/>
      <Route path='contact' element={<ContactAdmin></ContactAdmin>}/>
       
      
      </Route>
      <Route path='/profileformateur' element={<FormateurProfile></FormateurProfile>}>
      <Route path='home' element={<HomeFormateur></HomeFormateur>}/>
      <Route path='groupe' element={<MesGroupesFormateur></MesGroupesFormateur>}/>
      <Route path='contact' element={<ContactAdminFormateur></ContactAdminFormateur>}/>
      <Route path='mespaiements' element={<MesPaiementsFormateur></MesPaiementsFormateur>}/>
      <Route path='messeances' element={<SeancesFormateur></SeancesFormateur>}/>
      <Route path='emploitemps' element={<EmploiTempsFormateur></EmploiTempsFormateur>}/>
      </Route>
    
 
  </Routes>
 
  
  );
}

export default App;
