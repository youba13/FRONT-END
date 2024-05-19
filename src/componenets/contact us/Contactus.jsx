import React, { useState } from 'react'
import './contactus.css'
function Contactus() {
  const [email, setEmail] = useState("")
  const [sujet, setSujet] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit =async (e)=>{
    e.preventDefault()
    const messageSent = {email,sujet,message}
    console.log(messageSent)
    const response = await fetch("http://localhost:3500/message" , {
      method  : 'POST',
      body : JSON.stringify(messageSent),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    const json = await response.json()
    if(!response.ok){
     console.log("error sneding the message")
    }
    if(response.ok){
      setEmail('')
      setSujet('')
      setMessage('')
      alert("message a été envoyée")
    }
  }


  return (
    <section id="contact" className="bg-white ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white-900 dark:text-black">Contacter Nous</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form  onSubmit={handleSubmit} className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-black ">Votre email</label>
              <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-black ">Sujet</label>
              <input  onChange={(e)=> setSujet(e.target.value)} value={sujet} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-black ">Votre message</label>
              <textarea   onChange={(e)=> setMessage(e.target.value)} value={message} id="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
          </div>
          <button  type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
  
</section>
  )
}

export default Contactus