import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import apple from '../../../assets/crops/apple.jpg';
// import banana from '../../../assets/crops/banana.jpg';
// import blackgram from '../../../assets/crops/blackgram.jpg';
// import chickpea from '../../../assets/crops/chickpea.jpg';
// import coconut from '../../../assets/crops/coconut.jpg';
// import coffee from '../../../assets/crops/coffee.jpg';
// import cotton from '../../../assets/crops/cotton.jpg';
// import grapes from '../../../assets/crops/grapes.jpg';
// import jute from '../../../assets/crops/jute.jpg';
// import kidneybeans from '../../../assets/crops/kidneybeans.jpg';
// import lentil from '../../../assets/crops/lentil.jpg';
// import maize from '../../../assets/crops/maize.jpg';
// import mango from '../../../assets/crops/mango.jpg';
// import mothbean from '../../../assets/crops/mothbean.jpg';
// import muskmelon from '../../../assets/crops/muskmelon.jpg';
// import orange from '../../../assets/crops/orange.jpg';
// import papaya from '../../../assets/crops/papaya.jpg';
// import pigeonpeas from '../../../assets/crops/pigeonpeas.jpg';
// import pomegranate from '../../../assets/crops/pomegranate.jpg';
// import rice from '../../../assets/crops/rice.jpg';
// import watermelon from '../../../assets/crops/watermelon.jpg';



type CropResultCardProps = {
  name: string;
  canGetAlternate?: boolean;
}

export const CropResultCard: React.FC<CropResultCardProps> = ({ name, canGetAlternate = false }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={apple}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {canGetAlternate &&
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Get alternate crop
          </Button>
        </CardActions>
      }
    </Card>
  );
}
