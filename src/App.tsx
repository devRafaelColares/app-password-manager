import React, { useState } from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/Form';
import NewPassword from './components/new-password';

function App() {
  const [seeForm, setSeeForm] = useState(false);
  const handleForm = () => {
    setSeeForm(!seeForm);
  };
  const cancelForm = () => {
    setSeeForm(false);
  };
  const title = 'Gerenciador de senhas';
  return (
    <div>
      <Title
        title={ title }
      />
      <div>
        {seeForm ? (
          <Form handleCancelForm={ cancelForm } />
        ) : (
          <NewPassword handleForm={ handleForm } />

        )}
      </div>

    </div>
  );
}

export default App;
