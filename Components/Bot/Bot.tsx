"use client";

import Chat from "./Chat/Chat";

const Bot = ({ isOpen, onClose }:{
    isOpen: boolean,
    onClose: () => void
}) => {
    return (
      <>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )}
  
        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Chat/>
        </div>
      </>
    );
  };

export default Bot;