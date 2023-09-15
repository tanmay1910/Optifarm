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
}

export const Select: React.FC<SelectProps> = ({ label, data, value, onChange }) => {

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>{label}</InputLabel>
      <MaterialSelect
        value={value}
        label={label}
        onChange={handleChange}
      >
        {data.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
      </MaterialSelect>
    </FormControl>
  );
}
