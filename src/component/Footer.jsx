import React from 'react';
import { Divider, Typography } from '@mui/material';
import twitter from '../assest/twitter.svg';
import facebook from '../assest/facebook.svg';
import Brands from '../assest/Brands.svg';
import './footer.css';
export default function Footer() {
  return (
    <>
      <Divider />
      <div className="footer-top">
        <div className="bouncer">
          <Typography variant="h2" color={'GrayText'}>
            BOUNCER
          </Typography>
          <Typography variant="body" textAlign={'right'}>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit numquam eius, veniam tenetur veritatis? Ipsam optio
            nam placeat aliquam consectetur .
          </Typography>
        </div>
        <div className="follow-us">
          <Typography variant="h5">Follow Us</Typography>
          <Typography variant="body">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
            <div className="icons">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </Typography>
        </div>
        <div className="contact-us">
          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="body">
            My Company ,<br /> 4578 Marmora Road, <br />
            Glasgow D04 89GR Call us now:
            <br />
            0123-456-789 <br />
            Email: support@whatever.com
          </Typography>
        </div>
      </div>
      <Divider variant="middle" />
      <div className="footer-bottom">
        <div className="footer-bottom-div">
          <Typography variant="h6"> information</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> information</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> information</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> Service</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> Extras</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> My Account</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
        <div className="footer-bottom-div">
          <Typography variant="h6"> Userful Links</Typography>
          <Typography variant="body">
            {' '}
            About Us
            <br />
            Infomation
            <br />
            Privacy Policy
            <br />
            Terms & Conditions
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="cards-pay">
        <Typography variant="body" color={'GrayText'}>
          © 2021 Ecommerce theme by www
        </Typography>
        <img src={Brands} alt="Brands" />
      </div>
    </>
  );
}
