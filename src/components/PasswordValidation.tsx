type PasswordValidationProps = {
  password: string;
};

function PasswordValidation({ password }: PasswordValidationProps) {
  const isEightCharactersValid = password.length >= 8;
  const isSixteenCharactersValid = password.length <= 16;
  const isLettersAndNumbersValid = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const isSpecialsCharactersValid = /[!@#$%^&*]/.test(password);

  const validPasswordCheck = 'valid-password-check';
  const invalidPasswordCheck = 'invalid-password-check';

  return (
    <div>
      <p className={ isEightCharactersValid ? validPasswordCheck : invalidPasswordCheck }>
        Possuir 8 ou mais caracteres
      </p>

      <p
        className={ isSixteenCharactersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        Possuir até 16 caracteres
      </p>

      <p
        className={ isLettersAndNumbersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        Possuir letras e números
      </p>

      <p
        className={ isSpecialsCharactersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        Possuir algum caractere especial
      </p>
    </div>
  );
}

export default PasswordValidation;
