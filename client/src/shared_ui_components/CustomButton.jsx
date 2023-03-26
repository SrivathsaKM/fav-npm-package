import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, leftIcon, className, onClick, type }) => {
  return (
    <Button className={className} onClick={onClick} type={type}>
      {leftIcon ? leftIcon : null}
      {children}
    </Button>
  );
};

export default CustomButton;
