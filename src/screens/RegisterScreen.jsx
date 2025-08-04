import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/authContext.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
import { useNavigate } from 'react-router-dom';

function RegisterScreen() {
  const { useInfo, setuserInfo } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const handleRegister = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  try{
    const res=await axios.post('http://localhost:5000/api/users/register', {
      name,
      email,
      password,
    });
    setuserInfo(res.data);
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    console.log("Registration successful:", res.data);
    navigate('/login'); // Redirect to login page after successful registration
  }
  catch  {
    console.log("Registration failed:");
    alert("Registration failed. Please try again.");
  }
}

  return (
    <Form onSubmit={handleRegister}>

    <Form.Group className="mb-3" controlId="name">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name"  value={name}
        onChange={(e)=>setName(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
        onChange={(e)=>setPassword(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password"  value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} required/>
      </Form.Group>
      
     
      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
  );
}

export default RegisterScreen;