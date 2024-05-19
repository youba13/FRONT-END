import React from 'react'
import { Link } from 'react-router-dom'

function Steps() {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-blue-950">Comment?</span>
		<h2 className="text-5xl font-bold text-center dark:text-gray-900">Comment participer au formations ?</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-950 dark:text-gray-50">1</div>
				<p className="text-2xl font-semibold">
					<b>Créer un compte</b> <Link to='/register' className='text-blue-400 underline'> Créer un compte maintenant!</Link>
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-950 dark:text-gray-50">2</div>
				<p className="text-2xl font-semibold">
					<b> Visiter votre Profile </b> <Link to='/login' className='text-blue-400 underline'> Acceder a votre espace</Link>
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-950 dark:text-gray-50">3</div>
				<p className="text-2xl font-semibold">
					<b>Participer à une Fomration.</b>
                    <a href="#" className='text-blue-400 underline'> Visiter votre profile maintenant!</a>
				</p>
			</div>
		</div>
	</div>
</section>
			
  )
}

export default Steps