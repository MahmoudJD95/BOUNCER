import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBase/firebase.js';
import './login.css';

export default function Login() {
  const [input, setInput] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const userDataHandle = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const logInHandle = async () => {
    try {
      await signInWithEmailAndPassword(auth, input.email, input.password);
      navigate('/');
    } catch (err) {
      const errorMsg = err.message.split(':')[1];
      setError(errorMsg);
    }
  };
  return (
    <Box className="container">
      <Typography variant="h3" marginTop={'.5em'}>
        Login
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
        type="password"
        label="password"
        className="input"
        onChange={userDataHandle}
        required
      />
      <Button variant="outlined" onClick={logInHandle}>
        {' '}
        log in{' '}
      </Button>
      {error ? (
        <Alert className="alert" severity="error">
          {error}
        </Alert>
      ) : null}
      <Link to={'/signup'} className="link">
        to sign up
      </Link>
    </Box>
  );
}
