import React from 'react';
import { TextField } from '@mui/material';

const CustomInput = ({ className, label, name, onBlur, onFocus, autoFocus, multiline, onChange, placeholder, type, value, error, noMargin, disabled, onKeyPress }) => {
  return (
    <div className={`inputGroup ${error && 'errorGroup'} ${noMargin && 'noMargin'}`}>
      <TextField
        className={className}
        label={label}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        autoFocus={autoFocus}
        multiline={multiline}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        disabled={disabled}
        error={error ? true : false}
        autoComplete='off'
      />
      {error && <h6 className='errorMsg absolute'>{error}</h6>}
    </div>
  );
};

export default CustomInput;
