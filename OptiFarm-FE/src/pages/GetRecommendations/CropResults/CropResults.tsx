import { CropResultCard } from "./CropResultCard"

export const CropResults: React.FC = () => {
    return <div className="flex gap-x-10 mt-32">
        <CropResultCard name="Crop1" description="Description1" canGetAlternate />
        <CropResultCard name="Crop2" description="Description2" />
        <CropResultCard name="Crop3" description="Description3" />
    </div>
}
