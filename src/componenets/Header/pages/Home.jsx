import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../../Footer/Footer";
import Herosection from '../../hero section/Herosection'

import Aboutus from "../../About Us/Aboutus";
import TypeFormation from "../../types formation/TypeFormation";
import Statistique from "../../stats section/Statistique";
import Contactus from "../../contact us/Contactus";
import Steps from "../../steps/Steps";
import UserForm from "../../demandes demploi/demandesEmplois";



const Home = ()=>{
    return (
        <div>
            <Fragment>
       <Header></Header>
        <Herosection></Herosection>
       <Aboutus></Aboutus>
       <Steps></Steps>
       <TypeFormation></TypeFormation>
       <Statistique/>
       <Contactus></Contactus>
       <UserForm></UserForm>
       <Footer></Footer>
       </Fragment>
        </div>
    )
}
export default Home;