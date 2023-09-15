import { Select } from "../../components";
import { CropResults } from "./CropResults";
import { useRef, useState } from "react";
import { InputWithUnit } from "../../components/InputWithUnit";
import { Button } from "@mui/material";
import axios from "axios";

const locations = ["Hyderabad", "Noida", "Bangalore"];
const soilTypes = ["Dry", "Wet"];

export const Basic: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [location, setLocation] = useState<string>('');
    const [soilType, setSoilType] = useState<string>('');
    const rainfallRef = useRef<HTMLInputElement | null>(null);
    const temperatureRef = useRef<HTMLInputElement | null>(null);

    return <div>
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
                <div className="grid grid-cols-2 gap-10">
                    <Select data={locations} label="Location" value={location} onChange={setLocation} />
                    <div className="pt-2">
                        <InputWithUnit label="Rainfall" unit="cm" ref={rainfallRef} />
                    </div>
                    <Select data={soilTypes} label="Soil Type" value={soilType} onChange={setSoilType} />
                    <div className="pt-2">
                        <InputWithUnit label="Temperature" unit="°C" ref={temperatureRef} />
                    </div>
                </div>
                <div className="grid place-items-center mt-10">
                    <Button
                        variant="contained"
                        onClick={
                            () => {
                                axios.post("/basic", {
                                    location,
                                    soilType,
                                    rainfall: rainfallRef.current?.value,
                                    temperature: temperatureRef.current?.value
                                }).finally(() => setShow(true));
                            }
                        }
                    >
                        Get Recommendation
                    </Button>
                </div>
            </div>
            <div>
                HeatMap
            </div>
        </div>
        {show && <CropResults crops={[]} />}
    </div >
}
