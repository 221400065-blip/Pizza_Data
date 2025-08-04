import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/authContext.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const { useInfo, setuserInfo } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      setuserInfo(res.data);
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      console.log("Login successful:", res.data);
      navigate('/'); // Redirect to home page after successful login
    } catch {
      console.log("Login failed:");
      alert("Login failed. Please check your credentials and try again.");
    }
  }

  return (
    <Form onSubmit={handleLogin}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         onChange={(e)=>setPassword(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
  );
}

export default LoginScreen;