import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import iphone from '../assest/iphone.svg';
import shipping from '../assest/shipping.svg';
import refund from '../assest/refund.svg';
import support from '../assest/support.svg';

const useStyles = makeStyles({
  iphone: {
    height: '709px',
    width: '677px',
    position: 'relative',
    bottom: '29px',
    padding: '0px 100px',
  },informationImg:{
height:'45px',
width:'70px'
  }
});
export default function StoreInformation() {
  const classes = useStyles();
  return (
    <>
      <div className="box-container">
        <div className="content-div">
          <Typography variant="h3"> iPhone 6 Plus</Typography>
          <Typography variant="body">
            {' '}
            Performance and design. Taken right to the edge.
          </Typography>
        </div>
        <img src={iphone} alt="iphone" className={classes.iphone} />
      </div>
      <div className="information">
        <div className="free-shipping">
          <img src={shipping} alt="shipping" className={classes.informationImg} />
          <Typography variant="h5">FREE SHIPPING</Typography>
          <Typography variant="body" textAlign={'ju'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id quas error suscipit? Ea temporibus animi tempore. Rem eum, eos
            nam 
          </Typography>
        </div>
        <div className="refund">
          <img src={refund} alt="refund"  className={classes.informationImg}/>
          <Typography variant="h5">100% REFUND</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id quas error suscipit? Ea temporibus animi tempore. Rem eum, eos
            nam 
          </Typography>
        </div>
        <div className="support">
          <img src={support} alt="support" className={classes.informationImg}/>
          <Typography variant="h5">SUPPORT 24/7</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            id quas error suscipit? Ea temporibus animi tempore. Rem eum, eos
            nam 
          </Typography>
        </div>
      </div>
    </>
  );
}
