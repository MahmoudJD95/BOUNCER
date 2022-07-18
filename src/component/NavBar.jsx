import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';
const useStyles = makeStyles({
  categories: {
    display: 'flex',
    justifyContent: 'center',
  },
  
});
export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography textAlign={'center'} color={'error'} variant="h2">
        BOUNCER
      </Typography>
      <Box sx={{ width: '100%' }} spacing={2} alignContent={'center'} margin={'10px'}>
        <Tabs value={value} onChange={handleChange} className={classes.taps}>
          <Tab value="Me" label="Me" />
          <Tab value="Store" label="Store" />
          <Tab value="IPhone" label="IPhone" />
          <Tab value="IPad" label="IPad" />
          <Tab value="MacBooks" label="MacBooks" />
          <Tab value="ACCESSORIES" label="ACCESSORIES" />
        </Tabs>
      </Box>
    </>
  );
}
