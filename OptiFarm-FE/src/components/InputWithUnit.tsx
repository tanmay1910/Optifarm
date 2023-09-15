import { InputAdornment, TextField } from "@mui/material";
import { forwardRef } from "react";


type InputWithUnitProps = {
    label: string;
    unit: string;
}

export const InputWithUnit = forwardRef<HTMLInputElement, InputWithUnitProps>(({ label, unit }, ref) => {
    return <TextField
        inputRef={ref}
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
