import React from 'react';

type HandleFormProps = {
  handleForm: () => void;
};

function NewPassword({ handleForm }: HandleFormProps) {
  return (
    <button onClick={ handleForm }>Cadastrar nova senha</button>
  );
}

export default NewPassword;
