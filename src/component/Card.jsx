import * as React from 'react';
import {
  Rating,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import mac from '../pages/mac.svg';
const useStyles = makeStyles({
  ratings: {
    margin: '0 auto',
    width: '60%',
  },
  rating: {
    width: '100%',
  },
  price: {
    display: 'flex',
    justifyContent: 'space-around',

    padding: '0 2em',
  },
});
export default function CardComponent() {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={mac} alt="mac" />
        <CardContent>
          <Typography
            gutterBottom
            textAlign={'center'}
            variant="h5"
            component="div"
          >
            MacBook Pro
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.ratings}>
          <Rating name="no-value" className={classes.rating} value={2} />
        </div>
      </CardActions>
      <Box className={classes.price}>
        <Typography color={'error'}>{'$499'}</Typography>

        <Typography>{'$599'}</Typography>
      </Box>
    </Card>
  );
}
