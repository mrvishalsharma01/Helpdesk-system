// src/pages/ForgotPassword.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Helpdesk System</h2>
        <p style={styles.subheading}>
          Don’t worry, enter your email below and we will <br />
          send you a link to change password.
        </p>

        <input type="email" placeholder="Email" style={styles.input} />

        {/* Submit (Green) Button */}
        <button style={styles.button}>Submit</button>

        {/* Sign In (Light Green) Button */}
        <div style={styles.linkWrap}>
          <Link to="/login" style={styles.signinButton}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#40e0d0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#b2dfdb',
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
    marginBottom: '20px',
    fontSize: '14px',
    lineHeight: '1.4'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#32CD32',
    color: 'white',
    padding: '10px',
    width: '100%',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '8px',
    marginBottom: '12px'
  },
  linkWrap: {
    marginTop: '0px'
  },
  signinButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    width: '100%',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500'
  }
};

export default ForgotPassword;
