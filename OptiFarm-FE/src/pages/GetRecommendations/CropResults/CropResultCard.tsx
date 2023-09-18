import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Tooltip } from '@mui/material';

import apple from '../../../assets/crops/apple.jpg';
import banana from '../../../assets/crops/banana.jpg';
import blackgram from '../../../assets/crops/blackgram.jpg';
import chickpea from '../../../assets/crops/chickpea.jpg';
import coconut from '../../../assets/crops/coconut.jpg';
import coffee from '../../../assets/crops/coffee.jpg';
import cotton from '../../../assets/crops/cotton.jpg';
import grapes from '../../../assets/crops/grapes.jpg';
import jute from '../../../assets/crops/jute.jpg';
import kidneybeans from '../../../assets/crops/kidneybeans.jpg';
import lentil from '../../../assets/crops/lentil.jpg';
import maize from '../../../assets/crops/maize.jpg';
import mango from '../../../assets/crops/mango.jpg';
import mothbeans from '../../../assets/crops/mothbeans.jpg';
import muskmelon from '../../../assets/crops/muskmelon.jpg';
import orange from '../../../assets/crops/orange.jpg';
import papaya from '../../../assets/crops/papaya.jpg';
import pigeonpeas from '../../../assets/crops/pigeonpeas.jpg';
import pomegranate from '../../../assets/crops/pomegranate.jpg';
import rice from '../../../assets/crops/rice.jpg';
import watermelon from '../../../assets/crops/watermelon.jpg';
import { Select } from '../../../components';
import { useState } from 'react';

const crops: { [crop: string]: string } = {
  apple,
  banana,
  blackgram,
  chickpea,
  coconut,
  coffee,
  cotton,
  grapes,
  jute,
  kidneybeans,
  lentil,
  maize,
  mango,
  mothbeans,
  muskmelon,
  orange,
  papaya,
  pigeonpeas,
  pomegranate,
  rice,
  watermelon
}


type CropResultCardProps = {
  name: string;
  canGetAlternate?: boolean;
  onClick: () => void;
}

export const CropResultCard: React.FC<CropResultCardProps> = ({ name, canGetAlternate = false, onClick }) => {
  const [factor, setFactor] = useState<string>('');

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={crops[name]}
        />
        <CardContent>
          <div className="flex justify-between">
            <Typography gutterBottom variant="h5" component="div">
              <div className="flex gap-1">
                <div>
                  {name[0].toUpperCase() + name.slice(1)}
                </div>
                <Tooltip title={cropInfo[name]}>
                  <div>
                    <Info className="h-4 w-4" />
                  </div>
                </Tooltip >
              </div>
            </Typography>
            <Select label="Factor" value={factor} data={Object.keys(companion[name])} onChange={setFactor} maxWidth={150} />
          </div>
          <Typography className="pt-2">
            {factor
              ? <span>To improve the selected factor you can plant <strong><em>{companion[name][factor]}</em></strong> along with the main crop.</span>
              : 'Select factor to get a companion crop.'
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      {canGetAlternate &&
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={onClick}>
            Get alternate crop
          </Button>
        </CardActions>
      }
    </Card>
  );
}

type Companion = {
  [crop: string]: {
    [factor: string]: string;
  }
}

const companion: Companion = {
  "rice": {
    "nitrogen": "Azolla",
    "green manure": "Azolla",
    "soil fertility": "Clover",
    "structure": "Clover",
    "natural fertilizer": "Fish",
    "deter pests": "Sesame",
    "soil nitrogen": "Mungbean",
    "ground cover": "Watermelon",
    "soil moisture": "Watermelon",
    "control algae": "Duckweed",
    "forage for ducks": "Duckweed",
    "attract pollinators": "Sunflowers",
    "provide shade": "Sunflowers",
    "reduce weed growth": "Taro",
    "repels pests": "Lemongrass",
    "adds aroma": "Lemongrass"
  },
  "maize": {
    "nitrogen": "Beans",
    "ground cover": "Squash",
    "deter pests": "Potatoes",
    "attracts beneficial insects": "Sunflowers",
    "repels beetles": "Cucumber",
    "repels pests": "Oregano",
    "improves maize growth": "Marjoram",
    "attracts pollinators": "Borage",
    "deters aphids and beetles": "Nasturtium"
  },
  "jute": {
    "deter pests": "Basil",
    "attracts beneficial insects": "Cilantro",
    "control nematodes": "Mustard",
    "attract pollinators": "Sunflowers",
    "nitrogen": "Beans",
    "deter jute beetles": "Radishes",
    "improves jute growth": "Coriander",
    "deters pests": "Dill",
    "repels pests": "Mint"
  },
  "cotton": {
    "attract beneficial insects": "Peanuts",
    "attract pollinators.": "Sunflowers",
    "provides shade": "Sorghum",
    "deter pests": "Basil",
    "nitrogen": "Beans",
    "provides support": "Sorghum",
    "deters aphids": "Nasturtium",
    "attracts beneficial insects": "Cilantro",
    "improves soil fertility": "Clover"
  },
  "coconut": {
    "shade for young coconuts": "Cocoa",
    "vines can be grown on coconut trees": "Pepper",
    "deters coconut pests": "Turmeric",
    "provides ground cover": "Pineapple",
    "provides additional canopy cover": "Banana",
    "provides shade and ground cover": "Papaya",
    "intercropped in coconut plantations": "Ginger",
    "control weeds": "Taro",
    "repels pests": "Lemongrass"
  },
  "papaya": {
    "deter pests": "Marigolds",
    "deters aphids and beetles": "Nasturtium",
    "attracts beneficial insects": "Cilantro",
    "nitrogen": "Beans",
    "deter beetles": "Radishes",
    "attract pollinators": "Sunflowers",
    "provides shade for papaya": "Okra",
    "control papaya pests": "Mustard",
    "intercropped with papaya": "Spinach"
  },
  "orange": {
    "attracts pollinators": "Marjoram",
    "deter citrus pests": "Basil",
    "deters aphids": "Nasturtium",
    "repels citrus pests": "Thyme",
    "deter aphids and mites": "Chives",
    "provides nutrient-rich mulch": "Comfrey",
    "attracts beneficial insects": "Dill",
    "improves soil fertility": "Clover",
    "deters ants and flies": "Tansy"
  },
  "apple": {
    "deter apple scab": "Chives",
    "deters aphids and beetles": "Nasturtium",
    "attracts beneficial insects": "Dill",
    "helps deter apple pests": "Basil",
    "improves soil fertility": "Clover",
    "deter apple pests": "Marigolds",
    "attracts pollinators": "Calendula",
    "repels apple pests": "Thyme",
    "deters apple moths": "Lavender",
    "deters flying insects": "Tansy"
  },
  "muskmelon": {
    "deters aphids": "Nasturtium",
    "deter cucumber beetles": "Radishes",
    "nitrogen": "Beans",
    "provides support for muskmelon vines": "Corn",
    "deter common pests": "Marigolds",
    "improves muskmelon flavor": "Oregano",
    "attract pollinators": "Sunflowers",
    "improves muskmelon growth": "Borage",
    "enhances muskmelon aroma": "Tarragon",
    "provide ground cover": "Cucumbers"
  },
  "watermelon": {
    "deter watermelon beetles": "Radishes",
    "nitrogen": "Beans",
    "deter watermelon pests": "Marigolds",
    "deters aphids": "Nasturtium",
    "attract pollinators": "Sunflowers",
    "provides support for watermelon vines": "Corn",
    "helps deter watermelon pests": "Basil",
    "enhances watermelon aroma": "Tarragon",
    "provide ground cover": "Cucumbers",
    "repels watermelon pests": "Mint"
  },
  "grapes": {
    "deters grape pests": "Rosemary",
    "helps deter grape pests": "Basil",
    "repels pests and improves flavor": "Mint",
    "deters aphids": "Nasturtium",
    "improves soil fertility": "Clover",
    "deter mildew and aphids": "Chives",
    "repels grape moths": "Lavender",
    "deter pests and nematodes": "Marigolds",
    "improves grape flavor": "Oregano",
    "attract pollinators": "Sunflowers"
  },
  "mango": {
    "helps deter mango pests": "Garlic",
    "repels insects and enhances flavor": "Basil",
    "deter mango pests": "Marigolds",
    "provides ground cover and shade": "Papaya",
    "deters mango pests": "Tumeric",
    "natural pesticide": "Neem",
    "repels pests": "Lemongrass",
    "helps control weeds": "Taro",
    "nitrogen": "Beans",
    "improves mango growth": "Paprika"
  },
  "banana": {
    "provides ground cover": "Sweet Potato",
    "nitrogen": "Beans",
    "provides shade and ground cover": "Papaya",
    "deters banana pests": "Tumeric",
    "intercropped with bananas": "Ginger",
    "helps control weeds": "Taro",
    "provides nutrient-rich mulch": "Comfrey",
    "deters aphids": "Nasturtium",
    "can grow on banana trees": "Vanilla",
    "helps deter banana pests": "Basil"
  },
  "pomegranate": {
    "repels pests and enhances flavor": "Mint",
    "deter pomegranate pests": "Marigolds",
    "deters aphids": "Nasturtium",
    "helps deter pests and enhances growth": "Basil",
    "improves pomegranate flavor": "Oregano",
    "repels pests and adds fragrance": "Lavender",
    "deter aphids and improve flavor": "Chives",
    "enhances pomegranate aroma": "Tarragon",
    "nitrogen": "Beans",
    "attract pollinators": "Sunflowers"
  },
  "lentil": {
    "repels lentil aphids": "Cabbage",
    "improves lentil growth": "Chickpea",
    "attract pollinators": "Sunflowers",
    "attracts beneficial insects": "Cilantro",
    "deter lentil pests": "Marigolds",
    "helps control lentil pests": "Mustard",
    "can be intercropped with lentils": "Spinach",
    "deter lentil beetles": "Radishes",
    "nitrogen": "Beans",
    "improves soil fertility": "Clover"
  },
  "blackgram": {
    "provides support for blackgram": "Maize",
    "attract pollinators": "Sunflowers",
    "fixes nitrogen for blackgram": "Cowpea",
    "improves blackgram flavor": "Coriander",
    "deter blackgram pests": "Radishes",
    "helps control aphids": "Mustard",
    "provide ground cover": "Cucumbers",
    "improves soil health": "Chickpea",
    "intercropped with blackgram": "Lentil",
    "provide shade": "Tamarind"
  },
  "mungbean": {
    "attracts beneficial insects": "Cilantro",
    "deter mungbean pests": "Marigolds",
    "deter mungbean beetles": "Radishes",
    "nitrogen": "Beans",
    "attract pollinators": "Sunflowers",
    "deters mungbean pests": "Ginger",
    "improves mungbean growth": "Coriander",
    "provide shade": "Tamarind",
    "provides ground cover": "Papaya",
    "improves soil health": "Chickpea"
  },
  "mothbeans": {
    "deter mothbean pests": "Marigolds",
    "attract pollinators": "Sunflowers",
    "deter mothbean beetles": "Radishes",
    "intercropped with mothbeans": "Lentil",
    "improves soil health": "Mungbean",
    "improves mothbean growth": "Chickpea",
    "attracts beneficial insects": "Cilantro",
    "helps control mothbean pests": "Mustard",
    "provide shade": "Tamarind",
    "provides ground cover": "Papaya"
  },
  "pigeonpeas": {
    "provides support and shade": "Sorghum",
    "deter pigeonpea pests": "Marigolds",
    "attract pollinators": "Sunflowers",
    "fixes nitrogen for pigeonpeas": "Cowpea",
    "deters pigeonpea pests": "Tumeric",
    "helps deter pests": "Basil",
    "improves soil health": "Chickpea",
    "attracts beneficial insects": "Cilantro",
    "fix nitrogen for pigeonpeas": "Beans",
    "provide shade": "Tamarind"
  },
  "kidneybeans": {
    "attracts beneficial insects": "Cilantro",
    "deter kidney bean pests": "Marigolds",
    "helps control aphids": "Mustard",
    "attract pollinators": "Sunflowers",
    "deter kidney bean beetles": "Radishes",
    "intercropped with kidney beans": "Spinach",
    "provide shade": "Tamarind",
    "support for kidney beans": "Maize",
    "deters kidney bean pests": "Tumeric",
    "helps deter kidney bean pests": "Basil"
  },
  "chickpea": {
    "attracts beneficial insects": "Cilantro",
    "deter chickpea pests": "Marigolds",
    "deter chickpea beetles": "Radishes",
    "fix nitrogen for chickpeas": "Beans",
    "attract pollinators": "Sunflowers",
    "helps control aphids": "Mustard",
    "provide shade": "Tamarind",
    "enhances chickpea growth": "Paprika",
    "repels chickpea pests": "Thyme",
    "helps deter chickpea pests": "Basil"
  },
  "coffee": {
    "can be grown on coffee trees": "Pepper",
    "provide shade for coffee": "Cacao",
    "provides additional canopy cover": "Banana",
    "can provide shade for coffee": "Citrus",
    "can be intercropped with coffee": "Cardamom",
    "can be grown under coffee canopy": "Ginger",
    "provide shade": "Tamarind",
    "can be grown with coffee": "Macadamia"
  }
}
const cropInfo: { [crop: string]: string } = {
  "rice": "Rice is a staple food for more than half of the world\u2019s population and provides 21% of global human per capita energy and 15% of per capita protein . Rice is also the most important crop to millions of small farmers who grow it on millions of hectares throughout the region, and to the many landless workers who derive income from working on these farms.",
  "maize": "Maize is a versatile crop that can be used for food, feed, and fuel . Maize is a good source of carbohydrates, fiber, and essential vitamins and minerals such as vitamin C, potassium, and magnesium . Maize is also a good source of antioxidants that can help protect against chronic diseases such as cancer and heart disease .",
  "jute": "Jute is an eco-friendly crop that is biodegradable and renewable . Jute is a cash crop that provides employment opportunities for millions of people in rural areas . Jute cultivation helps in soil conservation by preventing soil erosion and maintaining soil fertility.",
  "cotton": "Cotton is a versatile crop that can be used for clothing, bedding, and other textile products . Cotton cultivation provides employment opportunities for millions of people in rural areas . Cottonseed oil is a byproduct of cotton production that can be used for cooking and as a salad dressing .",
  "coconut": "Coconut cultivation provides employment opportunities for millions of people in rural areas. Coconut oil is a byproduct of coconut production that has many health benefits such as improving heart health, boosting brain function, and aiding digestion 6. Coconut water is another byproduct of coconut production that is rich in electrolytes and can help prevent dehydration .",
  "papaya": "Papaya is a nutritious fruit that is rich in vitamins A, C, and E, folate, potassium, and fiber. Papaya cultivation provides employment opportunities for millions of people in rural areas. Papaya contains an enzyme called papain that can aid digestion and reduce inflammation.",
  "orange": "Oranges are a nutritious fruit that are rich in vitamin C, fiber, folate, and potassium . Orange cultivation provides employment opportunities for millions of people in rural areas . Oranges contain flavonoids that have anti-inflammatory properties and can help prevent chronic diseases such as cancer and heart disease .",
  "apple": "Apples are a nutritious fruit that are rich in fiber, vitamin C, potassium, and antioxidants. Apple cultivation provides employment opportunities for millions of people in rural areas.",
  "muskmelon": "Muskmelon is a nutritious fruit that is rich in vitamins A and C, potassium, and fiber. Muskmelon cultivation provides employment opportunities for millions of people in rural areas.",
  "watermelon": "Watermelon is a refreshing and juicy fruit known for its high water content, sweet flavor, and vibrant red or pink flesh. It's a summer favorite, perfect for quenching thirst and providing essential hydration.",
  "grapes": "Grapes are small, sweet, and versatile fruits that come in various colors, including green, red, and purple. They're enjoyed fresh, used for making wine, and packed with antioxidants, making them a healthy snack choice.",
  "mango": "Mango Known as the \"King of Fruits,\" mangoes are tropical gems renowned for their sweet and juicy flesh. They are not only delicious but also rich in vitamins, minerals, and antioxidants, making them a nutritious treat.",
  "banana": "Bananas are a versatile and potassium-packed fruit that provides a quick energy boost. Their high fiber content aids digestion, while the creamy texture and sweet flavor make them a popular snack worldwide",
  "pomegranate": "Pomegranates are bursting with vibrant, juicy seeds that are loaded with antioxidants. These nutrient-packed fruits are not only delicious but also known for their potential health benefits, including heart health and anti-inflammatory properties.",
  "lentil": "Lentils are a source of plant-based protein and essential nutrients. They come in various colors, such as green, red, and brown, and are a staple in many cuisines due to their versatility and high nutritional value.",
  "blackgram": "Blackgram, also known as urad dal, is a protein-rich pulse commonly used in Indian cuisine. It's a key ingredient in dishes like dal makhani and idli, providing essential nutrients and a unique flavor.",
  "mungbean": "Mungbeans are a type of legume known for their green, cylindrical shape. They are a good source of protein and fiber, making them a nutritious addition to salads, soups, and stir-fries.",
  "mothbeans": "Mothbeans are small, kidney-shaped legumes often used in Indian cooking. They are rich in protein and iron, making them an important dietary component, especially for vegetarians and vegans.",
  "pigeonpeas": "Pigeonpeas, also called toor dal or arhar dal, are a staple in Indian cuisine. They are a valuable source of plant-based protein and are used in a wide range of dishes, from soups to curries.",
  "kidneybeans": "Kidney beans are kidney-shaped legumes that are high in protein and fiber. They are popular in dishes like chili and are a nutritious choice for adding substance and flavor to meals.",
  "chickpea": "Chickpeas, also known as garbanzo beans, are versatile legumes used in various cuisines. They are packed with protein and fiber and are the primary ingredient in dishes like hummus and falafel.",
  "coffee": "Coffee, made from roasted coffee beans, is one of the world's most beloved beverages. It contains caffeine, which provides an energy boost, and its complex flavors and aromas make it a cherished daily ritual for many."
}

const Info: React.FC<{ className: string }> = ({ className }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" fill="white" />
    <circle cx="12" cy="12" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 11V17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M11.75 8V7H12.25V8H11.75Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

}
