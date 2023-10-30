import React, { useState } from 'react';
import PasswordValidation from './PasswordValidation';

type FormProps = {
  handleCancelForm: () => void;
  handleServiceRegistration: (serviceInfo: ServiceInfo) => void;
  services?: ServiceInfo[];
  onRemoveService?: (index: number) => void;
  isPasswordVisible?: boolean;
};

type ServiceInfo = {
  service: string;
  login: string;
  password: string;
  url: string;
};

function Form({
  handleCancelForm,
  handleServiceRegistration,
  services = [],
  onRemoveService = () => {},
  isPasswordVisible = false,
}: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [loginName, setLoginName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const isServiceNameValid = !serviceName.split('').every((char) => char === ' ');
    const isLoginNameValid = !loginName.split('').every((char) => char === ' ');
    const isPasswordValid = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,16}$/.test(passwordValue);

    setIsFormValid(isServiceNameValid && isLoginNameValid && isPasswordValid);
  };

  const handleServiceName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceName(e.target.value);
  };

  const handleLoginName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    validateForm();
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value);
  };

  const handleRegister = () => {
    if (isFormValid) {
      const serviceInfo: ServiceInfo = {
        service: serviceName,
        login: loginName,
        password: passwordValue,
        url: urlValue,
      };
      handleServiceRegistration(serviceInfo);

      setServiceName('');
      setLoginName('');
      setPasswordValue('');
      setUrlValue('');
      setIsFormValid(false);
      handleCancelForm();
    }
  };

  return (
    <form action="">
      <label htmlFor="service-name">Nome do serviço</label>
      <input
        type="text"
        id="service-name"
        name="service-name"
        value={ serviceName }
        onChange={ handleServiceName }
      />

      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        name="login"
        value={ loginName }
        onChange={ handleLoginName }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={ passwordValue }
        onChange={ handlePasswordChange }
      />

      <PasswordValidation password={ passwordValue } />

      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="url"
        name="url"
        value={ urlValue }
        onChange={ handleUrlChange }
      />

      <button disabled={ !isFormValid } onClick={ handleRegister }>
        Cadastrar
      </button>
      <button onClick={ handleCancelForm }>Cancelar</button>

      {services.length > 0 && (
        <ul>
          {services.map((service, index) => (
            <li key={ index }>
              {service.service}
              <button
                data-testid="remove-btn"
                onClick={ () => onRemoveService(index) }
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Form;
