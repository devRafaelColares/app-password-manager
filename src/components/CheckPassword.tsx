import React, { useState } from 'react';

type CheckPasswordProps = {
  onTogglePasswordVisibility: (isVisible: boolean) => void;
};

function CheckPassword({ onTogglePasswordVisibility }: CheckPasswordProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const isVisible = !isChecked;
    setIsChecked(isVisible);
    onTogglePasswordVisibility(isVisible);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={ isChecked }
          onChange={ handleCheckboxChange }
        />
        Esconder senhas
      </label>
    </div>
  );
}

export default CheckPassword;
