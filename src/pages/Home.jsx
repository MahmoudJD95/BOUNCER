import React from 'react';
import NavBar from '../component/NavBar';
import { Typography } from '@mui/material';
import './home.css';
import img from './MaskGroup.svg';

export default function Home() {

  return (
    <>

      <NavBar />
      <div className={'box'}>
        <div className="content">
          <Typography className="content-name" variant="h3">
            {' '}
            IPhone X
          </Typography>

          <Typography className="content-details" variant="body">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            nulla quo et, reiciendis sequi, iste cupiditate architecto aperiam
            natus quisquam suscipit dicta perferendis vel, asperiores
            voluptatibus libero totam cumque.
          </Typography>
        </div>

        <img className="iphone-img" src={img} alt="iphone" />
      </div>
    </>
  );
}
