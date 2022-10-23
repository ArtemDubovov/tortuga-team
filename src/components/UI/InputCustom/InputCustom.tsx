import React from 'react';

import './InputCustom.css';

interface InputCustomProps {
  placeholder: string;
  classes: string;
  type: string;
  isRequired: boolean;
  title?: string;
}

const InputCustom: React.FC<InputCustomProps> = ({placeholder, classes, type, isRequired, title}) => {
  return (
    <input
      className={`input-custom ${classes}`}
      placeholder={placeholder}
      type={type}
      required={isRequired}
      title={title && ''}
      />
  )
}

export default InputCustom;
