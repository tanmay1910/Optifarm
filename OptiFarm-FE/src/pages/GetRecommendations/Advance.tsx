import { CropResults } from "./CropResults";
import { useRef, useState } from "react";
import { InputWithUnit } from "../../components/InputWithUnit";
import { Button, Slider, styled } from "@mui/material";
import axios from "axios";
import { CropProtectionStrategyDialog } from "./CropProtectionStrategyDialog";
import { SERVER_URL } from "../../App";
import { flushSync } from "react-dom";

export const Advance: React.FC = () => {
  const [crops, setCrops] = useState<Array<string>>([]);

  const [phValue, setPhValue] = useState<number>(7);
  const nitrogenRef = useRef<HTMLInputElement | null>(null);
  const phosphorusRef = useRef<HTMLInputElement | null>(null);
  const potassiumRef = useRef<HTMLInputElement | null>(null);
  const temperatureRef = useRef<HTMLInputElement | null>(null);
  const humidityRef = useRef<HTMLInputElement | null>(null);
  const rainfallRef = useRef<HTMLInputElement | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [disableGet, setDisableGet] = useState<boolean>(false);

  return <div>
    <div className="col-span-3">
      <div className="grid grid-cols-3 gap-10">
        <InputWithUnit label="Nitrogen" unit="mg" ref={nitrogenRef} />
        <InputWithUnit label="Phosphorus" unit="mg" ref={phosphorusRef} />
        <InputWithUnit label="Potassium" unit="mg" ref={potassiumRef} />
        <InputWithUnit label="Temperature" unit="°C" ref={temperatureRef} />
        <InputWithUnit label="Humidity" unit="%" ref={humidityRef} />
        <InputWithUnit label="Rainfall" unit="mm" ref={rainfallRef} />
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
      <div className="flex gap-4 items-center justify-center mt-10">
        <Button
          disabled={disableGet}
          variant="contained"
          onClick={() => {
            axios.post<{ crops: Array<string> }>(`${SERVER_URL}/advance`, {
              nitrogen: nitrogenRef.current?.value,
              phosphorus: phosphorusRef.current?.value,
              potassium: potassiumRef.current?.value,
              temperature: temperatureRef.current?.value,
              humidity: humidityRef.current?.value,
              rainfall: rainfallRef.current?.value,
              ph: String(phValue),
            }).then((response) => {
              setCrops(response.data.crops);
              flushSync(() => setDisableGet(true));
            });
          }}
        >
          Get Recommendation
        </Button>
        <Button
          variant="contained"
          disabled={crops.length === 0}
          onClick={() => {
            if (crops.length > 0) {
              setOpen(true);
            }
          }}
        >
          Crop protection strategy
        </Button>
        {disableGet &&
          <Button onClick={() => {
            setDisableGet(false);
            setCrops([]);
            if (nitrogenRef.current)
              nitrogenRef.current.value = '';
            if (phosphorusRef.current)
              phosphorusRef.current.value = '';
            if (potassiumRef.current)
              potassiumRef.current.value = '';
            if (temperatureRef.current)
              temperatureRef.current.value = '';
            if (humidityRef.current)
              humidityRef.current.value = '';
            if (rainfallRef.current)
              rainfallRef.current.value = '';
            setPhValue(7);
          }}>
            Get another recommendation
          </Button >
        }
      </div>
    </div>
    {crops.length > 0 &&
      <CropProtectionStrategyDialog crops={crops} open={open} onClose={() => setOpen(false)} />
    }
    {crops && <CropResults crops={crops} />}
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
