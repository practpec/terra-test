// src/components/AlertMessages.jsx
import React from 'react';

const AlertMessages = ({ messageType, message }) => {
  const getAlertClass = () => {
    switch (messageType) {
      case 'error':
        return 'bg-red-500 border-red-700 text-white';
      case 'warning':
        return 'bg-yellow-500 border-yellow-700 text-black';
      case 'info':
        return 'bg-blue-500 border-blue-700 text-white';
      case 'success':
        return 'bg-green-500 border-green-700 text-white';
      default:
        return 'bg-gray-500 border-gray-700 text-white';
    }
  };

  return (
    message ? (
      <div className={`border-l-4 p-4 rounded-md mb-4 ${getAlertClass()}`}>
        <p>{message}</p>
      </div>
    ) : null
  );
};

export default AlertMessages;
