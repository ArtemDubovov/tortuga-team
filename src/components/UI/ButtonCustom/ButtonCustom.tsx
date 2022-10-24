import React from 'react';

import './ButtonCustom.css';

interface ButtonCustomProps {
  children: string | React.ReactNode;
  classes: string
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({children, classes}) => {
  return (
    <button className={`button-custom ${classes}`}>{children}</button>
  )
}

export default ButtonCustom;
