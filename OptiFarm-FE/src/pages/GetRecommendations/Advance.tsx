import { CropResults } from "./CropResults";
import { useState } from "react";
import { InputWithUnit } from "../../components/InputWithUnit";
import { Button, Slider, styled } from "@mui/material";

export const Advance: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [phValue, setPhValue] = useState<number>(7);

    return <div>
        <div className="col-span-3">
            <div className="grid grid-cols-3 gap-10">
                <InputWithUnit label="Nitrogen" unit="cm" />
                <InputWithUnit label="Phosphorus" unit="cm" />
                <InputWithUnit label="Potassium" unit="cm" />
                <InputWithUnit label="Temperature" unit="°C" />
                <InputWithUnit label="Humidity" unit="°C" />
                <InputWithUnit label="Rainfall" unit="°C" />
                <div className="flex gap-x-3">
                    <div className="grid place-items-center pb-1 text-gray-500 text-sm">Ph: </div>
                    <PHSlider
                        valueLabelDisplay="auto"
                        min={0}
                        max={14}
                        defaultValue={7}
                        step={0.1}
                        onChange={(_e, ph) => setPhValue(ph as number)}
                        value={phValue}
                    />
                </div>
            </div>
            <div className="grid place-items-center mt-10">
                <Button variant="contained" onClick={() => setShow(true)}>
                    Get Recommendation
                </Button>
            </div>
        </div>
        {show && <CropResults />}
    </div>
}

const PHSlider = styled(Slider)({
    color: '#52af77',
    height: 5,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 28,
        height: 28,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
