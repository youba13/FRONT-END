import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="w-auto fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div style={{minWidth:"400px"}} className=" bg-white p-5 rounded-lg shadow-lg ">
      <button onClick={onClose} className="top-2 right-2  text-red-500  rounded-lg font-bold">
          X
        </button>
        {children}
       
      </div>
    </div>
  );
}

export default Modal;