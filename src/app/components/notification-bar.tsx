// components/NotificationBar.js
"use client"
import { useState } from 'react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full bg-purple-600 text-white p-4 flex items-center justify-between shadow-md z-40">
        <span>¡SALEEEEEEEEEEEE!.</span>
        <button
          onClick={handleClose}
          className="ml-4 bg-purple-800 hover:bg-purple-900 text-white p-2 rounded-full"
        >
          &times;
        </button>
      </div>
    )
  );
};

export default NotificationBar;


