import React, { useState } from 'react';

type HandleFormProps = {
  handleCancelForm: () => void;
};

function Form({ handleCancelForm }: HandleFormProps) {
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

  const handleServiceName = (e
  : { target: { value: React.SetStateAction<string>; }; }) => {
    setServiceName(e.target.value);
    validateForm();
  };

  const handleLoginName = (e
  : { target: { value: React.SetStateAction<string>; }; }) => {
    setLoginName(e.target.value);
    validateForm();
  };

  const handlePasswordChange = (e
  : { target: { value: React.SetStateAction<string>; }; }) => {
    setPasswordValue(e.target.value);
    validateForm();
  };

  const handleUrlChange = (e
  : { target: { value: React.SetStateAction<string>; }; }) => {
    setUrlValue(e.target.value);
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

      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="url"
        name="url"
        value={ urlValue }
        onChange={ handleUrlChange }
      />

      <button disabled={ !isFormValid }>Cadastrar</button>
      <button onClick={ handleCancelForm }>Cancelar</button>
    </form>
  );
}

export default Form;
