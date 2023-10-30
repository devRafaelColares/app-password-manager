import React from 'react';
import Form from './Form';

type ServiceInfo = {
  service: string;
  login: string;
  password: string;
  url: string;
};

type RegisterProps = {
  onRegister: (serviceInfo: ServiceInfo) => void;
};

function Register({ onRegister }: RegisterProps) {
  const handleServiceRegistration = (serviceInfo: ServiceInfo) => {
    onRegister(serviceInfo);
  };

  return (
    <div>
      <Form
        handleCancelForm={ () => {} }
        handleServiceRegistration={ handleServiceRegistration }
      />
    </div>
  );
}

export default Register;
