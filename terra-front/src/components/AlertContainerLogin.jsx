// src/components/AlertContainer.jsx
import React, { useState } from 'react';
import AlertMessages from './AlertMessagesLogin';

const AlertContainer = () => {
  const [alert, setAlert] = useState({ type: '', message: '' });

  // Puedes agregar funciones para configurar alertas aquí, por ejemplo:
  const showErrorAlert = () => {
    setAlert({ type: 'error', message: 'Error de usuario o contraseña' });
  };

  const showWarningAlert = () => {
    setAlert({ type: 'warning', message: 'Ingrese un correo válido' });
  };

  const showInfoAlert = () => {
    setAlert({ type: 'info', message: 'Es necesario correo y contraseña' });
  };

  const showSuccessAlert = () => {
    setAlert({ type: 'success', message: 'Usuario registrado con éxito' });
  };

  return (
    <div>
      <AlertMessages messageType={alert.type} message={alert.message} />
    </div>
  );
};

export default AlertContainer;
