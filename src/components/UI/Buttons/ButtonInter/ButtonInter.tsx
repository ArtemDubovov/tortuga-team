import React from 'react';

import './ButtonInter.css';

export enum ButtonStatus {
  Light = 'button-light',
  Dark = 'button-dark',
}

interface ButtonAddPostProps {
  Content: React.ReactNode | string;
  status: ButtonStatus
}

const ButtonAddPost: React.FC<ButtonAddPostProps> = ({Content, status}) => {
  return (
    <button className={`button-inter ${status}`}>
      {Content}
    </button>
  );
};

export default ButtonAddPost;
