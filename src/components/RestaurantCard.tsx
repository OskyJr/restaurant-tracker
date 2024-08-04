import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RestaurantInterface } from '../interfaces/RestaurantInterface';
import { Box, Rating } from '@mui/material';

export interface RestaurantCardProps extends RestaurantInterface {
  onClickCallback: (id: string, isOpen: boolean) => void;
}

export const RestaurantCard = (props: RestaurantCardProps) => {
  const { id, name, rating, description, images, onClickCallback } = props;

  const onClick = () => {
    onClickCallback(id, true);
  };

  return (
    <Card
      key={id}
      sx={{
        maxWidth: 345,
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardMedia sx={{ height: 140 }} image={images.length ? images[0] : ''} title={name} />
      <CardContent sx={{ flex: 1 }}>
        <Typography align="left" fontWeight="bold" gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Rating readOnly name="simple-controlled" value={rating} />
        </Box>
        <Typography align="left" variant="body2" color="text.secondary" paddingTop={2}>
          {description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end">
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button color="secondary" onClick={onClick} size="small">
            View More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
