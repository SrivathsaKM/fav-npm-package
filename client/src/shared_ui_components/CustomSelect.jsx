import { TextField, Autocomplete, Box } from '@mui/material';

import { createFilterOptions } from '@mui/material/Autocomplete';

const CustomSelect = ({ error, placeholder, onFocus, onBlur, value, noMargin, options, onChange, isDisable }) => {
  const filterOptions = createFilterOptions({
    matchFrom: 'any',
    stringify: (option) => option.label,
  });
  return (
    <div className={`inputGroup ${error && 'errorGroup'} ${noMargin && 'noMargin'}`}>
      <Autocomplete
        disablePortal
        id='free-solo-demo'
        //freeSolo
        ListboxProps={{
          style: {
            maxHeight: '100px',
            border: '1px solid #E6E6E7',
            boxShadow: '0px 2px 8px #EAEBEC',
            borderRadius: '4px',
          },
        }}
        style={{ paddingRight: '0px' }}
        //  className="autoCompleteSelect"
        options={options}
        // options={options as any}
        filterOptions={filterOptions}
        onChange={onChange}
        disabled={isDisable ? true : false}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            error={error ? true : false}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ backgroundColor: error ? '#ffecee' : '' }}
            // disabled={isDisable ? true : false}
            // className={isDisable ? "disabledInputGroup" : ""}
          />
        )}
        renderOption={(props, option) => (
          <Box component='li' {...props} key={option.value}>
            {option.label}
          </Box>
        )}
        //getOptionLabel={(option: TAutoComplete) => (option?.label ? option?.label : "")}
        // isOptionEqualToValue={(option, value) => value.value === option.value}
        getOptionDisabled={(option) => (isDisable ? true : false)}
        value={value}
      />
      {error && <h6 className='errorMsg absolute'>{error}</h6>}
    </div>
  );
};

export default CustomSelect;
