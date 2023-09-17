import { InputAdornment, TextField } from "@mui/material";
import { forwardRef } from "react";


type InputWithUnitProps = {
  label: string;
  unit: string;
  disabled?: boolean;
  value?: string;
}

export const InputWithUnit = forwardRef<HTMLInputElement, InputWithUnitProps>(({ label, unit, disabled = false, value }, ref) => {
  return <TextField
    value={value}
    inputRef={ref}
    disabled={disabled}
    required
    label={label}
    size="small"
    InputProps={{
      endAdornment: <InputAdornment position="start">{unit}</InputAdornment>,
    }}
    type="number"
    sx={{
      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
      },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
    }}
  />
})
