import React from 'react'
import './TypeFormation.css'

function TypeFormation() {
  return (
    <div className="typeformation-container h-full min-h-screen w-full  pt-12 p-4">
       <div className="section-title"><h1>Nos Formations</h1></div> 
  <div className="grid gap-14 md:grid-cols-3 md:gap-5">
    <div className="scale-card rounded-xl blue-bg p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-orange-400 shadow-lg shadow-orange-500/80">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-blue-950 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>

      </div>
      <h1 className="text-darken mb-3 text-xl font-bold lg:px-14">Cour De Soutien</h1>
      <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
      <button className="orange-bg">Découvrir</button>
    </div>
    <div className="scale-card rounded-xl orange-bg p-6 text-center shadow-xl">
    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-blue-950 shadow-lg shadow-blue-500/40">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-orange-400 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
    </div>
    <h1 className="text-darken mb-3 text-xl font-bold lg:px-14">Formation Pratique</h1>
    <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
    <button className="blue-bg">Découvrir</button>
  </div>
  <div className="scale-card rounded-xl blue-bg p-6 text-center shadow-xl">
      <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-orange-400 shadow-lg shadow-orange-500/80">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-blue-950 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
      </div>
      <h1 className="text-darken mb-3 text-xl font-bold lg:px-14">Formation De Langue</h1>
      <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
      <button className="orange-bg">Découvrir</button>
    </div>
  </div>
</div>

  )
}

export default TypeFormation