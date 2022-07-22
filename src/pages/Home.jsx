import React, { useState } from 'react';
import NavBar from '../component/NavBar';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Grid, Tabs, Tab } from '@mui/material';
import './home.css';
import CardComponent from '../component/Card';
import StoreInformation from '../component/StoreInformation';
import Footer from '../component/Footer';
import img from './MaskGroup.svg';
import banner from './BANNERS.svg';

const useStyles = makeStyles({
  categories: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 10px 0',
  },
  itemGrid: {
    // width: '80% !important',

  },
});
export default function Home() {
  const [value, setValue] = useState('All');
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <NavBar />
      <div className={'box'}>
        <div className="img-content">
          <div className="content">
            <Typography className="content-name" variant="h3">
              {' '}
              IPhone X
            </Typography>

            <Typography className="content-details" variant="body">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              eius nulla quo et, reiciendis sequi, iste cupiditate architecto
              aperiam natus quisquam suscipit dicta perferendis vel, asperiores
              voluptatibus libero totam cumque.
            </Typography>
          </div>

          <img className="iphone-img" src={img} alt="iphone" />
        </div>
      </div>
      <div className="banner-div">
        <img className="banner" src={banner} alt="banner" />
      </div>
      <Typography variant="h2" textAlign={'center'}>
        BEST SELLER
      </Typography>

      <Box sx={{ width: '100%' }} spacing={2} alignContent={'center'} marginBottom={'10px'}>
        <Tabs value={value} onChange={handleChange} className={classes.taps}>
          <Tab value="All" label="All" />
          <Tab value="Mac" label="Mac" />
          <Tab value="IPhone" label="IPhone" />
          <Tab value="IPad" label="IPad" />
          <Tab value="Ipod" label="Ipod" />
          <Tab value="ACCESSORIES" label="ACCESSORIES" />
        </Tabs>
      </Box>
      <Box alignItems={'center'} width={'80%'} margin={'0 auto'}>
        <Grid container spacing={2} className={classes.itemGrid}>
          <Grid item xs={6} md={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={6} md={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={6} md={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={6} md={3}>
            <CardComponent />
          </Grid>
        </Grid>
      </Box>
      <StoreInformation />
      <Footer />
    </>
  );
}
