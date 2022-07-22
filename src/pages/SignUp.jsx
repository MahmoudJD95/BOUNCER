import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { auth } from '../FireBase/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [input, setInput] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userDataHandle = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const signupHandle = async () => {
    try {
      await createUserWithEmailAndPassword(auth, input.email, input.password);
      navigate('/');
    } catch (err) {
      const errorMsg = err.message.split(':')[1];
      setError(errorMsg);
    }
  };

  return (
    <Box className="container">
      <Typography variant="h3" marginTop={'.5em'}>
        Sign Up
      </Typography>
      <TextField
        variant="standard"
        name="email"
        label="Email"
        className="input"
        onChange={userDataHandle}
        required
      />
      <TextField
        variant="standard"
        name="password"
        label="password"
        type={'password'}
        className="input"
        onChange={userDataHandle}
        required
      />
      <Button variant="outlined" onClick={signupHandle}>
        {' '}
        sign up{' '}
      </Button>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <Link to={'/login'} className="link">
        to login
      </Link>
    </Box>
  );
}
