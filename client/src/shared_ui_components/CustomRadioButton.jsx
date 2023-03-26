import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const CustomRadioButton = ({ value, onChange, checked, error, noMargin }) => {
  return (
    <div className={`inputGroup ${error && 'errorGroup'} ${noMargin && 'noMargin'}`} style={{ padding: '0px 16px' }}>
      <FormControl>
        <RadioGroup aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={value} onChange={onChange}>
          <FormControlLabel value={value} control={<Radio />} label={value} checked={checked} />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CustomRadioButton;
