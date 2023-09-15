import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type CropResultCardProps = {
    name: string;
    description: string;
    canGetAlternate?: boolean;
}

export const CropResultCard: React.FC<CropResultCardProps> = ({ name, description, canGetAlternate = false }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="null"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
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
