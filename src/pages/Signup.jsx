// src/pages/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Helpdesk System</h2>
        <p style={styles.subheading}>Sign up here</p>

        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />

        <button style={styles.button}>Sign Up</button>

        <div style={styles.links}>
          <Link to="/forgot-password" style={styles.forgot}>Forgot password</Link>
          <Link to="/login" style={styles.signin}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#40e0d0', // turquoise
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#b2dfdb', // light greenish
    padding: '40px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center'
  },
  heading: {
    marginBottom: '8px',
    fontStyle: 'italic',
    fontWeight: '600'
  },
  subheading: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#1976d2', // blue
    color: 'white',
    padding: '10px',
    width: '100%',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginTop: '10px'
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '14px'
  },
  forgot: {
    color: 'red',
    textDecoration: 'none'
  },
  signin: {
    color: 'black',
    textDecoration: 'none'
  }
};

export default Signup;
