import { Button, Dialog, DialogTitle } from "@mui/material"
import { Select } from "../../components";
import { useState } from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  crops: Array<string>;
}

export const CropProtectionStrategyDialog: React.FC<DialogProps> = ({ open, onClose, crops }) => {
  const [crop, setCrop] = useState<string>(crops[0]);
  const [season, setSeason] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  return <Dialog open={open} onClose={onClose}>
    <DialogTitle>
      Crop protection strategy
    </DialogTitle>
    <div className="h-[40vh] w-[50vh]">
      <div className="m-2">
        <Select
          label="Crop"
          data={crops}
          value={crop}
          onChange={(newCrop) => {
            setCrop(newCrop);
            setSeason('');
            setShow(false);
          }}
        />

        <Select label="Season" data={Object.keys(strategy[crop])} value={season} onChange={setSeason} />
      </div>
      {crop && season &&
        <div className="m-4">
          <div>
            <div>
              <strong>Crop Protection Strategy:</strong> {strategy[crop][season]["Crop Protection Strategy"]}.
            </div>
            <div>
              <strong>Cost per Acre (Pest Management) (INR): </strong>{strategy[crop][season]["Cost per Acre (Pest Management) (INR)"]}
            </div>
            <div>
              <strong>Cost per Acre (Disease Control) (INR): </strong>{strategy[crop][season]["Cost per Acre (Disease Control) (INR)"]}
            </div>
          </div>
          <div className="mt-6">
            <Button variant="contained" onClick={() => setShow(true)} disabled={show}>
              Sudden weather change
            </Button>
            {show && <div className="mt-4">
              <div>
                <strong>Weather change: </strong>{weatherChange[crop]["Weather"]}
              </div>
              <div>
                <strong>Protection strategy: </strong> {weatherChange[crop]["Protection_Strategy"]}
              </div>
              <div>
                <strong>Pest management cost: </strong> {weatherChange[crop]["cost_Pest_Management"]}
              </div>
              <div>
                <strong>Disease control cost: </strong> {weatherChange[crop]["cost_Disease_Control"]}
              </div>
            </div>}
          </div>
        </div>
      }
    </div>
  </Dialog>
}

type Strategy = {
  [crop: string]: {
    [season: string]: {
      "Crop Protection Strategy": string,
      "Cost per Acre (Pest Management) (INR)": number,
      "Cost per Acre (Disease Control) (INR)": number
    }
  }
}

const strategy: Strategy = {
  "rice": {
    "Kharif": {
      "Crop Protection Strategy": "Integrated pest management (IPM) with focus on blast and sheath blight control",
      "Cost per Acre (Pest Management) (INR)": 2000,
      "Cost per Acre (Disease Control) (INR)": 1000
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement proper field sanitation to reduce overwintering pests",
      "Cost per Acre (Pest Management) (INR)": 1800,
      "Cost per Acre (Disease Control) (INR)": 900
    }
  },
  "maize": {
    "Kharif": {
      "Crop Protection Strategy": "Regular scouting for fall armyworm and maize streak virus. Use resistant varieties",
      "Cost per Acre (Pest Management) (INR)": 2500,
      "Cost per Acre (Disease Control) (INR)": 1200
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement crop rotation to break pest cycles",
      "Cost per Acre (Pest Management) (INR)": 2200,
      "Cost per Acre (Disease Control) (INR)": 1100
    }
  },
  "jute": {
    "Kharif": {
      "Crop Protection Strategy": "Control jute stem weevil with insecticides. Monitor for leaf spot diseases",
      "Cost per Acre (Pest Management) (INR)": 2500,
      "Cost per Acre (Disease Control) (INR)": 1100
    },
    "Rabi": {
      "Crop Protection Strategy": "Practice field sanitation and crop rotation to manage disease risk",
      "Cost per Acre (Pest Management) (INR)": 2300,
      "Cost per Acre (Disease Control) (INR)": 1200
    }
  },
  "cotton": {
    "Kharif": {
      "Crop Protection Strategy": "Use BT cotton for bollworm control. Apply fungicides for cotton leaf curl virus",
      "Cost per Acre (Pest Management) (INR)": 2200,
      "Cost per Acre (Disease Control) (INR)": 1300
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement intercropping and trap cropping to reduce pest pressure",
      "Cost per Acre (Pest Management) (INR)": 2400,
      "Cost per Acre (Disease Control) (INR)": 1200
    }
  },
  "coconut": {
    "Year-round": {
      "Crop Protection Strategy": "Integrated pest management (IPM) for coconut pests. Monitor for root wilt disease",
      "Cost per Acre (Pest Management) (INR)": 2200,
      "Cost per Acre (Disease Control) (INR)": 1200
    }
  },
  "papaya": {
    "Year-round": {
      "Crop Protection Strategy": "Use insecticides for papaya mealybugs. Apply fungicides for papaya ringspot virus",
      "Cost per Acre (Pest Management) (INR)": 1900,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  },
  "orange": {
    "Year-round": {
      "Crop Protection Strategy": "Monitor for citrus greening disease. Apply foliar fertilizers and pest control as needed",
      "Cost per Acre (Pest Management) (INR)": 2500,
      "Cost per Acre (Disease Control) (INR)": 1200
    }
  },
  "apple": {
    "Year-round": {
      "Crop Protection Strategy": "Apply fungicides for apple scab control. Prune trees for proper air circulation",
      "Cost per Acre (Pest Management) (INR)": 1700,
      "Cost per Acre (Disease Control) (INR)": 800
    }
  },
  "muskmelon": {
    "Kharif": {
      "Crop Protection Strategy": "Control aphids and fruit flies with insecticides. Ensure proper irrigation",
      "Cost per Acre (Pest Management) (INR)": 1300,
      "Cost per Acre (Disease Control) (INR)": 900
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement crop rotation and adjust planting density to reduce disease risk",
      "Cost per Acre (Pest Management) (INR)": 1400,
      "Cost per Acre (Disease Control) (INR)": 800
    }
  },
  "watermelon": {
    "Kharif": {
      "Crop Protection Strategy": "Monitor for powdery mildew. Apply fungicides and practice proper spacing",
      "Cost per Acre (Pest Management) (INR)": 1900,
      "Cost per Acre (Disease Control) (INR)": 1000
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement trellising and proper irrigation management",
      "Cost per Acre (Pest Management) (INR)": 1800,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  },
  "grapes": {
    "Kharif": {
      "Crop Protection Strategy": "Prune vines and use netting to protect against birds. Apply fungicides for downy mildew",
      "Cost per Acre (Pest Management) (INR)": 2200,
      "Cost per Acre (Disease Control) (INR)": 1100
    },
    "Rabi": {
      "Crop Protection Strategy": "Implement canopy management and adjust trellising for disease prevention",
      "Cost per Acre (Pest Management) (INR)": 2100,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  },
  "mango": {
    "Kharif": {
      "Crop Protection Strategy": "Prune trees and control mango hoppers with insecticides. Apply fungicides for anthracnose",
      "Cost per Acre (Pest Management) (INR)": 2300,
      "Cost per Acre (Disease Control) (INR)": 1200
    },
    "Rabi": {
      "Crop Protection Strategy": "Adjust pruning and provide proper nutrition for tree health",
      "Cost per Acre (Pest Management) (INR)": 2200,
      "Cost per Acre (Disease Control) (INR)": 1100
    }
  },
  "banana": {
    "Year-round": {
      "Crop Protection Strategy": "Use tissue culture plants for disease-free planting. Monitor for Sigatoka leaf spot",
      "Cost per Acre (Pest Management) (INR)": 1800,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  },
  "pomegranate": {
    "Year-round": {
      "Crop Protection Strategy": "Prune trees and use organic mulch. Apply fungicides for fruit rot",
      "Cost per Acre (Pest Management) (INR)": 1700,
      "Cost per Acre (Disease Control) (INR)": 900
    }
  },
  "lentil": {
    "Rabi": {
      "Crop Protection Strategy": "Practice crop rotation to reduce disease risk. Use organic fertilizers",
      "Cost per Acre (Pest Management) (INR)": 1200,
      "Cost per Acre (Disease Control) (INR)": 800
    }
  },
  "blackgram": {
    "Rabi": {
      "Crop Protection Strategy": "Apply neem-based insecticides. Monitor for powdery mildew",
      "Cost per Acre (Pest Management) (INR)": 1300,
      "Cost per Acre (Disease Control) (INR)": 900
    }
  },
  "mungbean": {
    "Kharif": {
      "Crop Protection Strategy": "Practice row planting to reduce disease spread. Apply fungicides as needed",
      "Cost per Acre (Pest Management) (INR)": 1400,
      "Cost per Acre (Disease Control) (INR)": 800
    }
  },
  "mothbeans": {
    "Kharif": {
      "Crop Protection Strategy": "Use resistant varieties. Monitor for pod borer",
      "Cost per Acre (Pest Management) (INR)": 1500,
      "Cost per Acre (Disease Control) (INR)": 900
    }
  },
  "pigeonpeas": {
    "Kharif": {
      "Crop Protection Strategy": "Practice intercropping to deter pests. Apply neem oil for pod borer",
      "Cost per Acre (Pest Management) (INR)": 1600,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  },
  "kidneybeans": {
    "Rabi": {
      "Crop Protection Strategy": "Control aphids with insecticides. Rotate crops to prevent disease buildup",
      "Cost per Acre (Pest Management) (INR)": 1400,
      "Cost per Acre (Disease Control) (INR)": 900
    }
  },
  "chickpea": {
    "Rabi": {
      "Crop Protection Strategy": "Use resistant varieties. Monitor for blight and pod borer",
      "Cost per Acre (Pest Management) (INR)": 1500,
      "Cost per Acre (Disease Control) (INR)": 800
    }
  },
  "coffee": {
    "Year-round": {
      "Crop Protection Strategy": "Control coffee berry borer with insecticides. Monitor for coffee rust",
      "Cost per Acre (Pest Management) (INR)": 2100,
      "Cost per Acre (Disease Control) (INR)": 1000
    }
  }
}

type WeatherChange = {
  [crop: string]: {
    "Weather": string,
    "Protection_Strategy": string,
    "cost_Pest_Management": string,
    "cost_Disease_Control": string
  }
}

const weatherChange: WeatherChange = {
  "rice": {
    "Weather": "Sudden Cold Snap",
    "Protection_Strategy": "Provide frost protection through covers or heaters",
    "cost_Pest_Management": "1500",
    "cost_Disease_Control": "800"
  },
  "maize": {
    "Weather": "Sudden Heatwave",
    "Protection_Strategy": "Increase irrigation and shading",
    "cost_Pest_Management": "1200",
    "cost_Disease_Control": "600"
  },
  "jute": {
    "Weather": "Sudden Heavy Rainfall",
    "Protection_Strategy": "Improve drainage and apply fungicides",
    "cost_Pest_Management": "1300",
    "cost_Disease_Control": "700"
  },
  "cotton": {
    "Weather": "Sudden Drought",
    "Protection_Strategy": "Implement drip irrigation and reduce planting density",
    "cost_Pest_Management": "1400",
    "cost_Disease_Control": "900"
  },
  "coconut": {
    "Weather": "Sudden Strong Winds",
    "Protection_Strategy": "Prune and provide windbreaks",
    "cost_Pest_Management": "1600",
    "cost_Disease_Control": "1000"
  },
  "papaya": {
    "Weather": "Sudden Hailstorm",
    "Protection_Strategy": "Protect with hail nets or temporary shelters",
    "cost_Pest_Management": "1700",
    "cost_Disease_Control": "1100"
  },
  "orange": {
    "Weather": "Sudden Flooding",
    "Protection_Strategy": "Improve soil drainage and reduce waterlogging",
    "cost_Pest_Management": "1400",
    "cost_Disease_Control": "800"
  },
  "apple": {
    "Weather": "Sudden Early Frost",
    "Protection_Strategy": "Harvest ripe fruits immediately and provide frost protection",
    "cost_Pest_Management": "1800",
    "cost_Disease_Control": "1000"
  },
  "muskmelon": {
    "Weather": "Sudden Pest Outbreak",
    "Protection_Strategy": "Increase pest monitoring and apply appropriate insecticides",
    "cost_Pest_Management": "1300",
    "cost_Disease_Control": "700"
  },
  "watermelon": {
    "Weather": "Sudden Disease Outbreak",
    "Protection_Strategy": "Apply fungicides and practice crop rotation",
    "cost_Pest_Management": "1500",
    "cost_Disease_Control": "800"
  },
  "grapes": {
    "Weather": "Sudden Temperature Drop",
    "Protection_Strategy": "Provide thermal covers and adjust pruning",
    "cost_Pest_Management": "1600",
    "cost_Disease_Control": "900"
  },
  "mango": {
    "Weather": "Sudden Prolonged Rain",
    "Protection_Strategy": "Improve orchard drainage and reduce excess moisture",
    "cost_Pest_Management": "1700",
    "cost_Disease_Control": "1000"
  },
  "banana": {
    "Weather": "Sudden Hailstorm",
    "Protection_Strategy": "Protect with hail nets and assess damage for rescue treatments",
    "cost_Pest_Management": "1800",
    "cost_Disease_Control": "1100"
  },
  "pomegranate": {
    "Weather": "Sudden Heatwave",
    "Protection_Strategy": "Provide shade and increase irrigation",
    "cost_Pest_Management": "1400",
    "cost_Disease_Control": "800"
  },
  "lentil": {
    "Weather": "Sudden Heavy Rainfall",
    "Protection_Strategy": "Improve field drainage and practice crop rotation",
    "cost_Pest_Management": "1200",
    "cost_Disease_Control": "600"
  },
  "blackgram": {
    "Weather": "Sudden Pest Outbreak",
    "Protection_Strategy": "Increase pest monitoring and apply appropriate insecticides",
    "cost_Pest_Management": "1300",
    "cost_Disease_Control": "700"
  },
  "mungbean": {
    "Weather": "Sudden Drought",
    "Protection_Strategy": "Implement efficient irrigation practices and conserve soil moisture",
    "cost_Pest_Management": "1400",
    "cost_Disease_Control": "800"
  },
  "mothbeans": {
    "Weather": "Sudden Heatwave",
    "Protection_Strategy": "Provide shade and adjust planting density",
    "cost_Pest_Management": "1300",
    "cost_Disease_Control": "700"
  },
  "pigeonpeas": {
    "Weather": "Sudden Flooding",
    "Protection_Strategy": "Improve soil drainage and reduce waterlogging",
    "cost_Pest_Management": "1500",
    "cost_Disease_Control": "900"
  },
  "kidneybeans": {
    "Weather": "Sudden Temperature Drop",
    "Protection_Strategy": "Provide thermal covers and adjust planting density",
    "cost_Pest_Management": "1600",
    "cost_Disease_Control": "1000"
  },
  "chickpea": {
    "Weather": "Sudden Pest Outbreak",
    "Protection_Strategy": "Increase pest monitoring and apply appropriate insecticides",
    "cost_Pest_Management": "1300",
    "cost_Disease_Control": "700"
  },
  "coffee": {
    "Weather": "Sudden Early Frost",
    "Protection_Strategy": "Harvest ripe beans immediately and provide frost protection",
    "cost_Pest_Management": "1800",
    "cost_Disease_Control": "1000"
  }
}
