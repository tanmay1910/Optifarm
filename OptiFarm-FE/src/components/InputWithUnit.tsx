import { InputAdornment, TextField } from "@mui/material";


type InputWithUnitProps = {
    label: string;
    unit: string;
    value: number | undefined;
    onChange: (newValue: number) => void;
}

export const InputWithUnit: React.FC<InputWithUnitProps> = ({ label, unit, value, onChange }) => {
    return <TextField
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(Number(event.target.value));
        }}
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
}
