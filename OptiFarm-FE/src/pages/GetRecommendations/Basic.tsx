import { Select } from "../../components";
import { CropResults } from "./CropResults";
import { useState } from "react";
import { InputWithUnit } from "../../components/InputWithUnit";
import { Button } from "@mui/material";

const locations = ["Hyderabad", "Noida", "Bangalore"];
const soilTypes = ["Dry", "Wet"];

export const Basic: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [location, setLocation] = useState<string>('');
    const [soilType, setSoilType] = useState<string>('');
    const [rainfall, setRainfall] = useState<number>();
    const [temperature, setTemperature] = useState<number>();

    const handleClick = () => {
        setShow(true);
        console.log(location, soilType);
    }

    return <div>
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
                <div className="grid grid-cols-2 gap-10">
                    <Select data={locations} label="Location" value={location} onChange={setLocation} />
                    <div className="pt-2">
                        <InputWithUnit label="Rainfall" unit="cm" value={rainfall} onChange={setRainfall} />
                    </div>
                    <Select data={soilTypes} label="Soil Type" value={soilType} onChange={setSoilType} />
                    <div className="pt-2">
                        <InputWithUnit label="Temperature" unit="°C" value={temperature} onChange={setTemperature} />
                    </div>
                </div>
                <div className="grid place-items-center mt-10">
                    <Button variant="contained" onClick={handleClick}>
                        Get Recommendation
                    </Button>
                </div>
            </div>
            <div>
                HeatMap
            </div>
        </div>
        {show && <CropResults />}
    </div>
}
