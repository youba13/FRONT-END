import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourDeSoutien from '../AdminDash/Formation/courdesoutien/courdesoutien'
import CourDeSoutienTable from '../Formation Home/les Formation cour de soutien/courdesoutientable'
import FormationCourDeSoutienHome from '../Formation Home/les Formation cour de soutien/FormationsCourDeSoutien'
import FormationDeLangueTable from '../Formation Home/les Formation de langues/formationdelanguetable'
import FormationPratiqueTable from '../Formation Home/les Formation pratique/formationpratique'

function Formation() {
  const [value, setValue] = useState('CourDeSoutien')
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };

  function renderElmeent(value){
    if(value === "CourDeSoutien"){
      return <CourDeSoutienTable></CourDeSoutienTable>
    }
    if(value === "FormationPratique"){
      return  <FormationPratiqueTable></FormationPratiqueTable>
    }
    if(value === "FormationDeLangue"){
      return <FormationDeLangueTable></FormationDeLangueTable>
    }
  }
  return (
    <div>
        <Header></Header>
        <div className="formations-section flex justify-center items-center flex-col min-h-[800px] mt-28 ">
            <div className="w-full flex justify-center align-middle search-area">
            <form className="flex flex-col md:flex-row gap-3">
  <div className="flex">
    <input
      type="text"
      placeholder="Search for the tool you like"
      className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
    />
    <button
      type="submit"
      className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
    >
      Search
    </button>
  </div>
  <select
    onChange={handleInputChange}
    value={value}
    id="pricingType"
    name="pricingType"
    className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
  >
    <option >
      
    </option>
    <option value="CourDeSoutien">Cours De Soutien</option>
    <option value="FormationPratique">Formation Pratique</option>
    <option value="FormationDeLangue">Forrmation De Langue</option>
  </select>
</form>

            </div> 
            {renderElmeent(value)}
           
</div>
        <Footer></Footer>
    </div>
  )
}

export default Formation