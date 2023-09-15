import { useState } from "react"
import { CropResultCard } from "./CropResultCard"

type CropResultsProps = {
  crops: Array<string>
}

export const CropResults: React.FC<CropResultsProps> = ({ crops }) => {
  const [showAlternate, setShowAlternate] = useState<boolean>(false);

  if (crops.length && !showAlternate) {
    return <div className="flex gap-x-10 mt-32">
      <CropResultCard name={crops[0]} canGetAlternate onClick={() => setShowAlternate(true)} />
    </div>
  }

  return <div className="flex gap-x-10 mt-32">
    {crops.map(crop => <CropResultCard key={crop} name={crop} onClick={() => { }} />)}
  </div>
}
