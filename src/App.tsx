import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import NewPassword from './components/NewPassword';

type ServiceInfo = {
  service: string;
  login: string;
  password: string;
  url: string;
};

function App() {
  const [seeForm, setSeeForm] = useState(false);
  const [services, setServices] = useState<ServiceInfo[]>([]);

  const handleForm = () => {
    setSeeForm(!seeForm);
  };

  const cancelForm = () => {
    setSeeForm(false);
  };

  const title = 'Gerenciador de senhas';

  const handleServiceRegistration = (serviceInfo: ServiceInfo) => {
    setServices([...services, serviceInfo]);
  };

  return (
    <div>
      <Title title={ title } />
      <div>
        {seeForm ? (
          <Form
            handleCancelForm={ cancelForm }
            handleServiceRegistration={ handleServiceRegistration }
          />
        ) : (
          <NewPassword handleForm={ handleForm } />
        )}
      </div>
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              <a href={ service.url } target="_blank" rel="noopener noreferrer">
                {service.service}
              </a>
              <p>
                Login:
                {' '}
                {service.login}
              </p>
              <p>
                Senha:
                {' '}
                {service.password}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
