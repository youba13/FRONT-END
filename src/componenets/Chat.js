import React, { useEffect } from 'react';
import { parseISO, format } from 'date-fns';

function Chat({ message,userId }) {


    const isoDateString = message.timestamp;
    const date = parseISO(isoDateString);
    const formattedDate = format(date, 'yyyy-MM-dd:H:m');
    return (
        <div className={`p-2 ${message.sender ===  userId ? 'text-right' : 'text-left'}`}>
            <div>
                <div>
                <h1 className='text-gray-500'>{message.sender  === userId ? "Moi": 'User'}</h1>
                <p className='text-gray-400'>{formattedDate}</p>
                </div>
                <p className={`${message.sender ===  userId ? 'inline-block bg-blue-500 text-white bold rounded px-4 py-2 shadow' : 'inline-block bg-gray-300 rounded text-black bold px-4 py-2 shadow'}`} >
                {message.content}
            </p>
            </div>
        </div>
    );
}

export default Chat;