import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TimetableDisplay({groupName}) {
   const [events, setEvents] = useState([]);
   const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/events/${groupName}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    
    fetchEvents();
  }, 1000);

  // Helper function to format the display of the time slots
  const formatTime = time => {
    return time.slice(0, 5); // slices off seconds if the time format is hh:mm:ss
  };

  // Group events by day for easier management and display
  const daysOfWeek = ['samedi','dimanche','lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const eventsByDay = daysOfWeek.map(day => ({
    day,
    events: events.filter(event => event.day === day)
  }));

  // Example static data
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
    
  };
  const deleteEvent =async (id) =>{
    try {
        const response = await axios.delete(`http://localhost:3500/events/${id}`);
        alert("event deleted")
        fetchEvents()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
   }
  return (
    <div  className="container mx-auto px-4 sm:px-8 w-full">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight"><span className='text-gray-500'>Groupe:</span>{groupName}</h2>
        </div>
        <div className="my-2  flex sm:flex-row flex-col">
          <div className=" rounded-xl block w-full overflow-x-auto">
            <table className="min-w-full border-collapse block md:table">
              <thead>
                <tr>
                  {daysOfWeek.map(day => (
                    <th key={day} className="bg-gray-900 text-white p-4 md:border md:border-gray-500 text-left md:table-cell">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className=''>
                  {daysOfWeek.map(day => (
                    <td key={day} className="p-2 md:border  md:border-gray-500 text-left md:table-cell">
                      {events.filter(event => event.day === day).map(event => (
                        <div key={event._id}  className=" rounded-lg text-white relative text-bold hover:bg-blue-700 bg-blue-600 p-4 my-1">
                          <p>{`${groupName} ,Salle: ${event.room}`}</p>
                          <p>Formateur: {event.formateur}</p>
                          
                          <p>{formatTime(event.startTime)} - {formatTime(event.endTime)}</p>
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimetableDisplay;
