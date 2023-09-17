import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MaterialSelect, { SelectChangeEvent } from '@mui/material/Select';

type SelectProps = {
  label: string;
  data: Array<string>;
  value: string,
  onChange: (newValue: string) => void
  disabled?: boolean;
  maxWidth?: number
}

export const Select: React.FC<SelectProps> = ({ label, data, value, onChange, maxWidth = 1000, disabled = false }) => {

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, maxWidth }} size="small">
      <InputLabel>{label}</InputLabel>
      <MaterialSelect
        disabled={disabled}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {data.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
      </MaterialSelect>
    </FormControl>
  );
}
