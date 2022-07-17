import React from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';
const useStyles = makeStyles({
  categories: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: 'black !important',
  },
});
export default function NavBar() {
  const classes = useStyles();
  return (
    <>
      <Typography textAlign={'center'} color={'error'} variant="h2">
        BOUNCER
      </Typography>
      <Stack className={classes.categories} spacing={2} direction="row">
        <Button variant="text">Me</Button>
        <Button className={classes.button} variant="text">
          Store
        </Button>
        <Button className={classes.button} variant="text">
          IPhone
        </Button>
        <Button className={classes.button} variant="text">
          IPad
        </Button>
        <Button className={classes.button} variant="text">
          MacBooks
        </Button>
        <Button className={classes.button} variant="text">
          ACCESORIES
        </Button>
      </Stack>
    </>
  );
}
