import { CropResultCard } from "./CropResultCard"

type CropResultsProps = {
  crops: Array<string>
}

export const CropResults: React.FC<CropResultsProps> = ({ crops }) => {
  return <div className="flex gap-x-10 mt-32">
    {crops.map(crop => <CropResultCard key={crop} name={crop} canGetAlternate />)}
  </div>
}
