type PasswordValidationProps = {
  password: string;
};

function PasswordValidation({ password }: PasswordValidationProps) {
  const eightCharacters = 'Possuir 8 ou mais caracteres';
  const sixteenCharacters = 'Possuir até 16 caracteres';
  const lettersAndNumbers = 'Possuir letras e números';
  const specialsCharacters = 'Possuir algum caractere especial';

  const isEightCharactersValid = password.length >= 8;
  const isSixteenCharactersValid = password.length <= 16;
  const isLettersAndNumbersValid = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const isSpecialsCharactersValid = /[!@#$%^&*]/.test(password);

  const validPasswordCheck = 'valid-password-check';
  const invalidPasswordCheck = 'invalid-password-check';

  return (
    <div>
      <p className={ isEightCharactersValid ? validPasswordCheck : invalidPasswordCheck }>
        {eightCharacters}
      </p>

      <p
        className={ isSixteenCharactersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        {sixteenCharacters}
      </p>

      <p
        className={ isLettersAndNumbersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        {lettersAndNumbers}
      </p>

      <p
        className={ isSpecialsCharactersValid
          ? validPasswordCheck : invalidPasswordCheck }
      >
        {specialsCharacters}
      </p>
    </div>
  );
}

export default PasswordValidation;
